import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import useFetch from "../components/UseFetch";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path?: string;
}

export interface MovieDetails extends Movie {
  adult: boolean;
  production_countries: { name: string }[];
  production_companies: { name: string }[];
  spoken_languages: { name: string }[];
  status: string;
  vote_count: number;
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

interface DataContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  data: MovieResponse | null;
  loading: boolean;
  error: string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("")
  const { data, loading, error } = useFetch<MovieResponse>(`https://api.themoviedb.org/3/search/movie?query=${query}`)

  return (
    <DataContext.Provider value={{ query, setQuery, data, loading, error }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
