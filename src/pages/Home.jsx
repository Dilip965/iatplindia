import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
// Sample YouTube video for industrial/automation background
const YOUTUBE_VIDEO_ID = "P7fi4hP_y80"; // Replace with your preferred video ID

function Home() {
  return (
    <div>
  <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <iframe
            title="Company Mission Video"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="ml-16 md:ml-32 text-left animate-fadeinup">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-lg leading-tight">Broad Vision<br />Honest Service<br />Great Value</h1>
            <p className="text-2xl md:text-3xl text-white mb-4 font-semibold">Where We Build Your Visions</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
          <div className="bg-blue-100 rounded-xl p-8 shadow">
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">2018</h3>
            <p className="text-gray-700">Year Company Started</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-8 shadow">
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">25+</h3>
            <p className="text-gray-700">Total Number of Customers</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-8 shadow">
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">25+</h3>
            <p className="text-gray-700">Total Number of Employees</p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </section>

     

        {/* Contact/CTA Section */}
        <section className="text-center py-12 bg-blue-50 rounded-xl shadow mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-800 mb-2">Call Us Today: <span className="font-bold text-blue-900">+91 20 41321425</span></p>
          <p className="text-lg text-gray-800 mb-2">Email: <a href="mailto:debajit@iatplindia.com" className="text-blue-700 underline font-semibold">debajit@iatplindia.com</a></p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Location: <span className="font-medium">Interlogistics Automation Technologies Pvt. Ltd, Tower 1A, 1704, Godrej Infinity, Near Renuka Mata Mandir, Keshavnagar, Mundhawa, Pune, Maharashtra 411036</span></p>
        </section>
      </div>
    </div>
  );
}

export default Home;
