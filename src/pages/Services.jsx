import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Services</h2>
      <p className="text-gray-700 mb-6">Explore our wide range of automation, engineering, and maintenance services.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Services;
