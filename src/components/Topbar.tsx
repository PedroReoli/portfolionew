// src/components/Topbar.tsx
import React from 'react';

const Topbar = () => {
  return (
    <header className="bg-dark-1 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/assets/image/logo-iuricode.svg" alt="iuricode" className="w-24" />
        <nav className="hidden md:flex space-x-4">
          <a href="https://iuricode-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://iuricode-blog.vercel.app/setup" target="_blank" rel="noopener noreferrer">Setup</a>
          <a href="https://iuricode.com/efront/" target="_blank" rel="noopener noreferrer">eBook</a>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
