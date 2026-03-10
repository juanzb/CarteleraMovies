import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { MovieGridSkeleton } from './MovieSkeleton'
import { useNavigate } from 'react-router-dom';
import ProgressiveImage from './ProgressiveImage';

const ListMovies = () => {
  const navigate = useNavigate()
  const context = useContext(DataContext)

  if (!context) return null;
  const { data, loading, error } = context;

  if (loading) return <MovieGridSkeleton count={10} />
  if (error) return <div className="text-center text-red-500 mt-10">Error loading movies. Please try again.</div>

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/movies/${e.currentTarget.id}`)
  };
  
  return(
  <>
  { !data || !data.results ? <></> :   
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 mt-10 mb-10'>
        {data.results.filter(movie => movie.poster_path ).map((movie, index) => {
          return (
            <div 
              className='group bg-slate-900/40 rounded-xl overflow-hidden hover:bg-slate-800 transition-all duration-300 cursor-pointer border border-white/5 hover:border-yellow-500/30 fade-in-up shadow-lg' 
              style={{ animationDelay: `${index * 50}ms` }}
              key={movie.id}
              onClick={handleClick}
              id={movie.id.toString()}
            >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <ProgressiveImage 
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    alt={movie.title}
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className='p-4 space-y-1'>
                    <h3 className='text-white text-sm font-bold uppercase truncate group-hover:text-yellow-500 transition-colors'>{movie.original_title}</h3>
                    <div className="flex items-center justify-between">
                      <span className='text-yellow-400 text-xs font-bold'>★ {movie.vote_average.toFixed(1)}</span>
                      <span className="text-slate-400 text-[10px]">{movie.release_date.split('-')[0]}</span>
                    </div>
                </div>
            </div>
          )
        })}
      </div>
  }
  </>
  )
}

export default ListMovies
