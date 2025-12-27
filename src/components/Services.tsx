import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Web Development</h3>
            <p>We build tailored web solutions to meet your specific business needs, from simple websites to complex applications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">IoT and Embedded Systems</h3>
            <p>We specialize in developing software for IoT devices and embedded systems, connecting the physical and digital worlds.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Python Development</h3>
            <p>Our expertise in Python allows us to create powerful and scalable backend systems, APIs, and data processing pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
