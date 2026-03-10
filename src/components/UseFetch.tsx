import { useState, useEffect } from 'react';

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    setLoading(true)

    fetch(url, { 
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjliODZmMGY2ODcwYWVlNzI1NGM0YzZlYmUzNDVlZCIsIm5iZiI6MTcxOTEwMDI4MS45MzU2MTQsInN1YiI6IjY2NzY0NjljMWI3YTgyMmY4NzlmZTIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rlWvkbm6-9FLl_iIXPsN6zXLJZri5DiYIXoqBZEPH9M'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((resdata: T) => setData(resdata))
    .catch((err: Error) => setError(err.message))
    .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading, error }
}

export default useFetch
