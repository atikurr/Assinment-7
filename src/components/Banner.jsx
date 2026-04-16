import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-16 pb-8 px-4 text-center">
      <h1 className="text-5xl md:text-5xl font-bold text-[#1E293B] mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B] text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the relationships that matter most.
      </p>
      
      <button
        onClick={() => navigate("/add-friend")}
        className="bg-[#244D3F] text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-[#244D] transition flex items-center gap-2 mx-auto"
      >
        <span className="text-lg">+</span> Add a Friend
      </button>
    </section>
  );
};

export default Banner;