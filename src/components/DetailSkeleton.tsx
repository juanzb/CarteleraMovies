import React from 'react';
import Skeleton from './Skeleton';

const DetailSkeleton: React.FC = () => {
  return (
    <div className="bg-black relative min-h-screen overflow-hidden">
      {/* Background Pulse */}
      <Skeleton className="absolute inset-0 opacity-20" />
      
      <div className="absolute w-full top-24 p-10 flex items-center gap-10">
        <div className="w-1/3 flex flex-col items-start">
          {/* Poster Skeleton */}
          <Skeleton className="w-64 aspect-[2/3] shadow-2xl" />
        </div>
        
        <div className="w-2/3 space-y-6 p-10 bg-white/10 backdrop-blur-sm rounded-lg">
          {/* Title Skeleton */}
          <Skeleton className="h-12 w-3/4 bg-yellow-500/30" />
          
          {/* Overview Skeletons */}
          <div className="space-y-3 mt-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          
          {/* List Skeletons */}
          <ul className="space-y-4 pt-6">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
