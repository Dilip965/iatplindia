import { Link } from 'react-router-dom';

function ServiceCard({ title, description, image, index }) {
  return (
    <Link to={`/services/${index}`} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 animate-cardin">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        )}
        <div className="p-5">
          <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-blue-900 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
