import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Lupa from '../assets/lupa.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path: string) => 
    `relative px-4 py-2 text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center h-full ${
      location.pathname === path 
        ? "text-yellow-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-yellow-500" 
        : "text-gray-400 hover:text-white"
    }`;

  const mobileLinkClass = (path: string) =>
    `block px-6 py-4 text-sm font-black uppercase tracking-widest border-b border-white/5 ${
      location.pathname === path ? "text-yellow-500 bg-white/5" : "text-gray-400"
    }`;

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/85 backdrop-blur-2xl border-b border-white/10 h-20 flex items-center shadow-2xl">
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-black text-white tracking-tighter hover:text-yellow-500 transition-colors">
            MOVIES<span className="text-yellow-500">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center h-full space-x-2">
          <Link to="/TopRated" className={linkClass("/TopRated")}>Top Rated</Link>
          <Link to="/NowPlay" className={linkClass("/NowPlay")}>Now Play</Link>
          <Link to="/Popular" className={linkClass("/Popular")}>Popular</Link>
          <Link to="/Upcoming" className={linkClass("/Upcoming")}>Upcoming</Link>
        </div>

        {/* Search & Burger */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              location.pathname === "/" ? "bg-yellow-500 shadow-lg shadow-yellow-500/20" : "bg-white/10 hover:bg-white/20"
            }`}>
              <img src={Lupa} className={`w-5 h-5 ${location.pathname === "/" ? "brightness-0" : "opacity-80"}`} alt="search" />
            </div>
          </Link>

          {/* Burger Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 md:hidden overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col py-2">
          <Link to="/TopRated" onClick={toggleMenu} className={mobileLinkClass("/TopRated")}>Top Rated</Link>
          <Link to="/NowPlay" onClick={toggleMenu} className={mobileLinkClass("/NowPlay")}>Now Play</Link>
          <Link to="/Popular" onClick={toggleMenu} className={mobileLinkClass("/Popular")}>Popular</Link>
          <Link to="/Upcoming" onClick={toggleMenu} className={mobileLinkClass("/Upcoming")}>Upcoming</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
