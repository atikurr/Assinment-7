import React from 'react';
import logo from '../assets/logo-xl.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* logo image */}
        <div className="text-center mb-8 w-full">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="KeenKeeper Logo" className="h-14 w-auto" />
          </div>

          {/* details */}
          <p className="text-white text-[16px] max-w-none md:max-w-4xl mx-auto leading-relaxed opacity-70">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* social part */}
        <div className="mb-12 text-center">
          <h4 className="text-[20px] font-medium mb-5 text-gray-200">
            Social Links
          </h4>

          <div className="flex justify-center gap-4">

            <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
              <img src={instagram} alt="Instagram" className="w-15 h-15 object-contain" />
            </a>

            <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
              <img src={facebook} alt="Facebook" className="w-15 h-15 object-contain" />
            </a>

            <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
              <img src={twitter} alt="Twitter X" className="w-15 h-15 object-contain" />
            </a>

          </div>
        </div>

        {/* copyright */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-400">
          <p className="opacity-70">© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-8 opacity-70">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}