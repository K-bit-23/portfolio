import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Freelance Developer & Innovator';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="bg-cover bg-center h-screen flex items-center text-white" style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900')"}}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-2xl">{typedText}</p>
      </div>
    </header>
  );
};

export default Header;
