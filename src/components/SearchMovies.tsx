import { useState, useContext, FormEvent, ChangeEvent } from 'react';
import { DataContext } from '../context/DataContext';

import Lupa from '../assets/lupa.png'

const SearchMovies = () => {
  const [nameSearch, setNameSearch] = useState('')
  const context = useContext(DataContext)

  if (!context) return null;
  const { setQuery } = context;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery(nameSearch)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameSearch(e.target.value);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-6 fade-in-up">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/30 shadow-2xl transition-all duration-500 hover:shadow-yellow-500/10">
        
        <h1 className="w-full text-3xl md:text-4xl text-center mb-8 uppercase font-black text-white tracking-tight leading-none">
          Find your <span className="text-yellow-500">favorite</span> movie
        </h1>
        
        <form className="relative group" onSubmit={handleSubmit}>
          <div className="flex items-center bg-black/40 border border-white/10 group-focus-within:border-yellow-500/50 rounded-full transition-all duration-300 shadow-inner overflow-hidden" >
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search movies..."
              className="appearance-none bg-transparent border-none w-full text-white text-lg md:text-xl py-4 px-6 leading-tight focus:outline-none placeholder:text-white/30 font-medium"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full m-1.5 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center"
            >
              <img src={Lupa} className='w-6 h-6 brightness-0' alt="search-icon" />
            </button>
          </div>
        </form>
        
        <p className="text-center mt-5 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
          Powered by TMDB API
        </p>
      </div>
    </div>
  )
}

export default SearchMovies
