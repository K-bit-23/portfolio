import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/random/800x600" alt="Project 1" className="rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">E-commerce Platform</h3>
              <p>A full-stack e-commerce solution with a custom backend and a responsive user interface.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/random/800x601" alt="Project 2" className="rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">IoT Data Visualization</h3>
              <p>A web application for visualizing real-time data from IoT devices, built with Python and React.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/random/800x602" alt="Project 3" className="rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Mobile App for Social Good</h3>
              <p>A cross-platform mobile application that connects volunteers with non-profit organizations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
