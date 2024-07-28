import React from 'react';

const Logo = () => {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-12 h-12 bg-pink-300 rounded-full opacity-75" style={{ marginLeft: '1.25rem' }}></div>
      </div>
      <span className="text-3xl font-bold text-gray-900 relative z-10">Home Dec</span>
    </div>
  );
};

export default Logo;
