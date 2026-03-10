import { useParams } from "react-router-dom"
import useFetch from "../components/UseFetch"
import DetailSkeleton from "../components/DetailSkeleton"
import ProgressiveImage from "../components/ProgressiveImage"
import { MovieDetails as MovieDetailsType } from "../context/DataContext"

import DefaultImage from "../assets/background-default.jpeg"

const DetailsMovie = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<MovieDetailsType>(`https://api.themoviedb.org/3/movie/${id}`)
  
  if (loading) return <DetailSkeleton />
  if (error || !data) return <div className="text-center text-red-500 mt-20 font-bold">Error al cargar la película.</div>

  return(
  <div className="bg-black/95 min-h-screen relative overflow-hidden" >
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40 blur-[3px] scale-110 transition-all duration-1000" 
      style={ !data.backdrop_path 
        ? { backgroundImage: `url(${DefaultImage})` }
        : { backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')`  }}
    />
    
    <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-16 lg:p-20 gap-10 fade-in-up">
      <div className="w-full md:w-1/4 max-w-[300px] flex-shrink-0" >
        <ProgressiveImage
            className="w-full rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.7)] border border-white/20"
            alt={data.title}
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
        />
      </div>
      
      <div className="flex-1 w-full bg-white/25 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/30 shadow-2xl">
        <h1 className="bg-yellow-500/80 text-black text-center uppercase font-black text-2xl md:text-3xl py-4 rounded-2xl mb-6 shadow-sm px-4">
          {data.title}
        </h1>
        
        <div className="space-y-5">
          <p className="text-black text-base md:text-lg font-bold leading-relaxed text-justify px-4 opacity-90" >
            {data.overview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 border-t border-black/10">
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Release Date</h4>
              <p className="text-black text-sm font-bold">{data.release_date}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Score</h4>
              <p className="text-black text-sm font-bold">★ {data.vote_average.toFixed(1)}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Status</h4>
              <p className="text-black text-sm font-bold">{data.status}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Production</h4>
              <p className="text-black text-xs font-bold truncate">
                {data.production_countries && data.production_countries[0]?.name || "N/A"}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Language</h4>
              <p className="text-black text-sm font-bold">
                {data.spoken_languages && data.spoken_languages[0]?.name || "N/A"}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/5">
              <h4 className="text-yellow-700 text-[9px] font-black uppercase tracking-widest mb-1">Content</h4>
              <p className="text-black text-sm font-bold">{data.adult ? "+18" : "General"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default DetailsMovie
