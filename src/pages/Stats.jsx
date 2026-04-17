import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { HiOutlineChartBar } from 'react-icons/hi';

const Stats = () => {
  const { timeline } = useContext(AppContext);
  const navigate = useNavigate();

 
  const data = [
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  const COLORS = ['#8B5CF6', '#2D4F40', '#10B981'];

  const isEmpty = data.every(d => d.value === 0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#1E293B] mb-6 tracking-tight">
          Friendship Analytics
        </h1>

        {/* Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm w-full">
          <h3 className="text-[#244D3F] font-medium text-[20px] mb-10">
            By Interaction Type
          </h3>

          {/* Empty State */}
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <HiOutlineChartBar className="text-7xl text-gray-800" />
              <h2 className="text-xl font-bold text-gray-800">No Analytics Data Found</h2>
              <p className="text-gray-400 text-sm text-center max-w-sm">
                Start connecting with your friends through calls, texts, or video chats to see your analytics here!
              </p>
              <button
                onClick={() => navigate('/')}
                className="mt-2 bg-[#244D3F] hover:bg-[#244D3F] text-white font-semibold px-6 py-2.5 rounded-lg transition"
              >
                Browse Friends
              </button>
            </div>
          ) : (
           
            <div className="w-full h-400px">
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
                      />
                    ))}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />

                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    formatter={(value) => (
                      <span className="text-gray-500 text-sm ml-1">
                        {value}
                      </span>
                    )}
                  />

                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Stats;