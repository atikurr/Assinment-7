import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { FaClock, FaArchive, FaTrash } from 'react-icons/fa';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';

const FriendDetail = () => {
  const { id } = useParams();
  const { friends, addTimelineEntry } = useContext(AppContext);

  const friend = friends.find(f => f.id === parseInt(id));
  if (!friend) return <div className="p-10 text-center">Friend not found!</div>;

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };
    addTimelineEntry(newEntry);
    toast.success(`${type} added to timeline!`);
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* left*/}
      <div className="md:col-span-1 flex flex-col gap-4">

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-bold mb-2">{friend.name}</h2>

          {/* Status Badge */}
          <div className="flex justify-center mb-2">
            <span className="bg-red-500 text-white px-3 py-0.5 rounded-full text-xs font-semibold uppercase">
              {friend.status}
            </span>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-2 mb-4">
            {friend.tags.map(tag => (
              <span key={tag} className="bg-green-100 text-green-700 text-xs px-3 py-0.5 rounded-full font-medium">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-sm italic mb-1">"{friend.bio}"</p>
          <p className="text-gray-400 text-xs">Preferred: {friend.email}</p>
        </div>

        {/* action btn*/}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-100">
            <FaClock size={14} /> Snooze 2 Weeks
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3.5 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-100">
            <FaArchive size={14} /> Archive
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3.5 text-sm text-red-500 hover:bg-red-50">
            <FaTrash size={14} /> Delete
          </button>
        </div>
      </div>

      {/* right */}
      <div className="md:col-span-2 flex flex-col gap-4">

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</p>
            <p className="text-xs text-[#64748B] mt-2">Days Since Contact</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#244D3F]">{friend.goal}</p>
            <p className="text-xs text-[#64748B] mt-2">Goal (Days)</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-lg font-bold text-[#244D3F]">{friend.next_due_date}</p>
            <p className="text-xs text-[#64748B] mt-2">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-[#244D3F]">Relationship Goal</h3>
            <button className="text-xs border border-gray-200 px-3 py-1 rounded-lg text-gray-500 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <p className="text-sm text-[#64748B]">
            Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
          </p>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-medium text-[#244D3F] mb-4">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">

            <button
              onClick={() => handleAction('Call')}
              className="flex flex-col items-center justify-center gap-2 py-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition"
            >
              <img src={callImg} alt="Call" className="w-7 h-7 object-contain" />
              <span className="text-sm text-gray-600">Call</span>
            </button>

            <button
              onClick={() => handleAction('Text')}
              className="flex flex-col items-center justify-center gap-2 py-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition"
            >
              <img src={textImg} alt="Text" className="w-7 h-7 object-contain" />
              <span className="text-sm text-gray-600">Text</span>
            </button>

            <button
              onClick={() => handleAction('Video')}
              className="flex flex-col items-center justify-center gap-2 py-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition"
            >
              <img src={videoImg} alt="Video" className="w-7 h-7 object-contain" />
              <span className="text-sm text-gray-600">Video</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetail;