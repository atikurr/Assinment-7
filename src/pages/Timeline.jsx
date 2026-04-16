import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const Timeline = () => {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');

  const getIcon = (type) => {
    if (type === 'Call') return callImg;
    if (type === 'Text') return textImg;
    if (type === 'Video') return videoImg;
    return callImg;
  };

  // Step 1 — Filter by type
  const filtered = filter === 'All'
    ? timeline
    : timeline.filter(entry => entry.type === filter);

  // Step 2 — Search by friend name or type
  const searched = filtered.filter(entry =>
    entry.title.toLowerCase().includes(search.toLowerCase()) ||
    entry.type.toLowerCase().includes(search.toLowerCase())
  );

  // Step 3 — Sort by date
  const sorted = [...searched].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sort === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <h1 className="text-5xl font-bold text-[#1E293B] mb-6">Timeline</h1>

        {/* Controls Row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">

         

          {/* Filter by type */}
          <div className="relative w-full sm:w-[344px]">
            <select
              className="w-full appearance-none bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D4F40]/10"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="All">Filter Timeline</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <MdKeyboardArrowDown className="w-5 h-5" />
            </div>
          </div>

           {/* Search */}
          <div className="relative flex-1">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search by name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2D4F40]/10"
            />
          </div>

          {/* Sort by date */}
          <div className="relative w-full sm:w-44">
            <select
              className="w-full appearance-none bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D4F40]/10"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <MdKeyboardArrowDown className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {sorted.length > 0 ? (
            sorted.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-50 shadow-sm transition hover:shadow-md"
              >
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-full flex items-center justify-center">
                  <img src={getIcon(entry.type)} alt={entry.type} className="w-6 h-6 object-contain opacity-80" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#1E293B]">
                    {entry.type} <span className="font-normal text-gray-400">with</span> {entry.title.split('with')[1]}
                  </h4>
                  <p className="text-[11px] font-medium text-gray-400 mt-0.5">{entry.date}</p>
                </div>

                {/* Type badge */}
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-400">
                  {entry.type}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center bg-white p-12 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 text-sm">No interactions found.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;