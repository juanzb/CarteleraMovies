import React from 'react'
import useFetch from '../components/UseFetch'
import { MovieGridSkeleton } from "../components/MovieSkeleton"
import { useNavigate } from 'react-router-dom';
import { MovieResponse } from '../context/DataContext';
import ProgressiveImage from '../components/ProgressiveImage';
  
const TopRated: React.FC = () => {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch<MovieResponse>(`https://api.themoviedb.org/3/movie/top_rated`);
  
  if (loading) return <MovieGridSkeleton count={10} />
  if (error || !data) return <div className="text-white text-center mt-20">Error to load the page</div>
  
  const handleClick = (id: number) => {
    navigate(`/movies/${id}`)
  };
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 mt-10 mb-10'>
      {data.results.map((e, index) => (
        <div
          className='group bg-slate-900/40 rounded-xl overflow-hidden hover:bg-slate-800 transition-all duration-300 cursor-pointer border border-white/5 hover:border-yellow-500/30 fade-in-up shadow-lg'
          key={e.id}
          onClick={() => handleClick(e.id)}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="aspect-[2/3] overflow-hidden">
            <ProgressiveImage 
              src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} 
              alt={e.title}
              className="w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className='p-4 space-y-2'>
            <h3 className='text-white font-semibold text-sm line-clamp-2 uppercase group-hover:text-yellow-500 transition-colors'>
              {e.title || e.original_title}
            </h3>
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-400 text-xs'>⭐</span>
              <span className='text-slate-400 text-xs font-medium' >{e.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopRated
