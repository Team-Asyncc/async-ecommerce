import React from 'react';

const Loading = () => {
  return (
    <div class="flex items-center justify-center space-x-2 animate-bounce">
      <div class="w-6 h-6 bg-yellow-300 rounded-full"></div>
      <div class="w-6 h-6 bg-green-400 rounded-full"></div>
      <div class="w-6 h-6 bg-pink-300 rounded-full"></div>
    </div>
  );
};

export default Loading;
