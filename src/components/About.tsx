import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="https://source.unsplash.com/random/400x400" alt="About Me" className="rounded-full mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg">Specializing in IoT and Python development, I bring innovative solutions to life as a freelance developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
