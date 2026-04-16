import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { timeline } = useContext(AppContext);

  
  const data = [
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  
  const COLORS = ['#8B5CF6', '#2D4F40', '#10B981'];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* title */}
        <h1 className="text-5xl font-bold text-[#1E293B] mb-6 tracking-tight">
          Friendship Analytics
        </h1>

        {/* chart card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full">
          <h3 className="text-[#244D3F] font-medium text-[20px] mb-10">
            By Interaction Type
          </h3>
          
          <div className="h-100 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={125}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={450}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      className="outline-none"
                    />
                  ))}
                </Pie>
                
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    padding: '10px 15px'
                  }} 
                />
                
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{ paddingTop: '40px' }}
                  formatter={(value) => (
                    <span className="text-gray-500 font-bold text-xs ml-2 uppercase tracking-wide">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;