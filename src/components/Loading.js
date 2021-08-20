import React from 'react';

const Loading = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 64px)' }}
      className="flex items-center justify-center space-x-2 animate-bounce"
    >
      <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
      <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
    </div>
  );
};

export default Loading;
