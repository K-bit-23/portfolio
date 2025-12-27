import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="bg-cover bg-center h-screen flex items-center text-white" style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900')"}}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-2xl">I am a passionate web developer.</p>
      </div>
    </header>
  );
};

export default Header;
