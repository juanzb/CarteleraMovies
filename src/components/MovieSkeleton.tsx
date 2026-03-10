import React from 'react';
import Skeleton from './Skeleton';

const MovieSkeleton: React.FC = () => {
  return (
    <div className="m-3 bg-slate-900 bg-opacity-50 p-3 rounded-lg">
      <Skeleton className="w-full aspect-[2/3] mb-3" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
};

export const MovieGridSkeleton: React.FC<{ count?: number }> = ({ count = 10 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 mt-10 mb-10">
      {Array.from({ length: count }).map((_, i) => (
        <MovieSkeleton key={i} />
      ))}
    </div>
  );
};

export default MovieSkeleton;
