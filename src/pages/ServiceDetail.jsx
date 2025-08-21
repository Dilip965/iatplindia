import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return <div className="container mx-auto px-4 py-8 text-center">Service not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        {service.image && (
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-xl mb-8 shadow" />
        )}
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">{service.title}</h2>
        <p className="text-gray-700 mb-6 text-lg text-center">{service.description}</p>
        {/* Add more detailed info here if available */}
      </div>
    </div>
  );
}

export default ServiceDetail;
