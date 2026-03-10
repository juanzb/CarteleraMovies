import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`shimmer-effect rounded-md ${className}`}></div>
  );
};

export default Skeleton;
