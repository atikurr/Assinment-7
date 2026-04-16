import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';
import { MdKeyboardArrowDown } from "react-icons/md";

const Timeline = () => {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('All');

  
  const filteredTimeline = filter === 'All' 
    ? timeline 
    : timeline.filter(entry => entry.type === filter);

  
  const getIcon = (type) => {
    if (type === 'Call') return callImg;
    if (type === 'Text') return textImg;
    if (type === 'Video') return videoImg;
    return callImg;
  };

  return (
    <div className="bg-[#F8FAFC] min-LG-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#1E293B] mb-6">Timeline</h1>
          
          {/* Custom Filter Dropdown */}
          <div className="relative w-86">
            <select 
              className="w-full appearance-none bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D4F40]/10"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">Filter timeline</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
            {/* Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <MdKeyboardArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((entry) => (
              <div key={entry.id} className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-50 shadow-sm transition hover:shadow-md">
                
                {/* Icon Circle */}
                <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-full flex items-center justify-center">
                  <img src={getIcon(entry.type)} alt={entry.type} className="w-6 h-6 object-contain opacity-80" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B]">
                    {entry.type} <span className="font-normal text-gray-400">with</span> {entry.title.split('with')[1]}
                  </h4>
                  <p className="text-[11px] font-medium text-gray-400 mt-0.5">{entry.date}</p>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center bg-white p-12 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 text-sm">No interaction history found.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;