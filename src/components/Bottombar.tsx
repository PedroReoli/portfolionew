// src/components/Bottombar.tsx
import React from 'react';

const Bottombar = () => {
  return (
    <footer className="bg-dark-1 p-4 md:hidden fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://iuricode-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href="https://iuricode-blog.vercel.app/setup" target="_blank" rel="noopener noreferrer">Setup</a>
        <a href="https://iuricode.com/efront/" target="_blank" rel="noopener noreferrer">eBook</a>
      </div>
    </footer>
  );
};

export default Bottombar;
