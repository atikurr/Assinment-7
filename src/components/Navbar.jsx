import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineClock, HiOutlineChartBar, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
      isActive
        ? "bg-[#244D3F] text-white"
        : "text-gray-500 hover:text-[#244D3F]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
      isActive
        ? "bg-[#244D3F] text-white"
        : "text-gray-600 hover:bg-gray-50 hover:text-[#244D3F]"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="KeenKeeper Logo" className="h-8 md:h-10 w-auto" />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" end className={linkClass}>
            <HiOutlineHome className="text-lg" /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <HiOutlineClock className="text-lg" /> Timeline
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <HiOutlineChartBar className="text-lg" /> Stats
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
        >
          {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
          <NavLink to="/" end className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
            <HiOutlineHome className="text-lg" /> Home
          </NavLink>
          <NavLink to="/timeline" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
            <HiOutlineClock className="text-lg" /> Timeline
          </NavLink>
          <NavLink to="/stats" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
            <HiOutlineChartBar className="text-lg" /> Stats
          </NavLink>
        </div>
      )}
    </nav>
  );
}