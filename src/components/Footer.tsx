import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-xl text-gray-400 py-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white tracking-tighter uppercase">
              MOVIES<span className="text-yellow-500">.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Find and explore your favorite movies and TV shows with our comprehensive database powered by TMDB.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em]">Social Networks</h2>
            <div className="flex flex-col space-y-2 font-bold text-sm">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em]">Navigation</h2>
            <div className="flex flex-col space-y-2 font-bold text-sm">
              <Link to="/TopRated" className="hover:text-white transition-colors">Top Rated</Link>
              <Link to="/NowPlay" className="hover:text-white transition-colors">Now Playing</Link>
              <Link to="/Popular" className="hover:text-white transition-colors">Popular</Link>
              <Link to="/Upcoming" className="hover:text-white transition-colors">Upcoming</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
          <p>&copy; 2024 Movies. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ for cinema lovers</p>
        </div>
      </div>
    </footer>
  )
};
    
export default Footer
