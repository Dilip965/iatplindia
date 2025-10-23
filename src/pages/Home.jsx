import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { useEffect, useRef, useState } from 'react';
import { CountUp } from './About';
// Sample YouTube video for industrial/automation background
const YOUTUBE_VIDEO_ID = "P7fi4hP_y80"; // Replace with your preferred video ID

function Home() {
  return (
    <div>
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mb-16">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Hide heavy iframe on small screens for performance */}
            <iframe
              title="Company Mission Video"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&modestbranding=1&rel=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="hidden md:block w-full h-full object-cover"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            {/* Mobile-friendly poster image */}
            <img
              src="/assets/hero-poster.jpg"
              alt="Automation background"
              className="md:hidden w-full h-full object-cover"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-black/55 to-blue-700/55 flex items-center">
            <div className="mx-6 md:ml-32 text-center md:text-left animate-fadeinup max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white mb-6 sm:mb-8 drop-shadow-xl leading-tight">Broad Vision<br />Honest Service<br />Great Value</h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-4 font-semibold">Where We Build Your Visions</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="inline-block px-3 py-1.5 bg-blue-700 text-white rounded-full shadow">Automation</span>
                <span className="inline-block px-3 py-1.5 bg-blue-500 text-white rounded-full shadow">Engineering</span>
                <span className="inline-block px-3 py-1.5 bg-blue-400 text-white rounded-full shadow">Innovation</span>
              </div>
            </div>
          </div>
          {/* Animated gear SVGs for automation theme */}
          <div className="absolute bottom-0 right-0 flex gap-2 pr-8 pb-8 opacity-60 pointer-events-none">
            <svg className="w-12 h-12 animate-spin-slow text-blue-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2"/></svg>
            <svg className="w-8 h-8 animate-spin-slow text-blue-600" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><path d="M12 4v2M12 18v2M6.34 6.34l1.41 1.41M16.24 16.24l1.41 1.41M4 12h2M18 12h2M6.34 17.66l1.41-1.41M16.24 7.76l1.41-1.41" stroke="currentColor" strokeWidth="2"/></svg>
          </div>
        </section>
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16 animate-fadein">
          {/* Stats with count-up when visible (reuse CountUp from About.jsx) */}
          <StatsItem label="Year Company Started" end={2018} duration={1.2} />
          <StatsItem label="Total Number of Customers" end={25} duration={1.2} suffix="+" />
          <StatsItem label="Total Number of Employees" end={250} duration={1.2} suffix="+" />
        </section>

        {/* Animated Process Timeline */}
        <section className="mb-20 px-6 md:px-12 lg:px-20 text-center">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-12 tracking-tight animate-fadein">
    Our Automation Process
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        title: "Consultation",
        desc: "We understand your business goals and identify automation opportunities.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8m-8 4h5m7 2.5V7a2 2 0 00-2-2H7L3 9v10.5a2 2 0 002 2h12a2 2 0 002-2z"
            />
          </svg>
        ),
      },
      {
        title: "Design & Engineering",
        desc: "Our experts craft custom automation solutions tailored for maximum efficiency.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L3 10.25m6.75 6.75L21 10.25M12 3v18"
            />
          </svg>
        ),
      },
      {
        title: "Implementation",
        desc: "We integrate automation seamlessly with your existing systems and workflows.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6L20.25 9"
            />
          </svg>
        ),
      },
      {
        title: "Support",
        desc: "We provide ongoing monitoring, maintenance, and optimization for lasting results.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75h4.5v4.5h-4.5v-4.5zM12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.47 5.47l1.06 1.06M17.47 17.47l1.06 1.06M5.47 18.53l1.06-1.06M17.47 6.53l1.06-1.06"
            />
          </svg>
        ),
      },
    ].map((step, idx) => (
      <div
        key={step.title}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 animate-cardIn"
        style={{ animationDelay: `${idx * 200}ms` }}
      >
        <div className="flex items-center justify-center mb-5">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
            {step.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-blue-700 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* Services Grid Section */}
          <section className="mb-16 animate-fadein">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center animate-textPulse">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, idx) => (
                <ServiceCard key={idx} {...service} index={idx} />
              ))}
            </div>
          </section>

        {/* Global Clients Carousel */}
        <section className="mb-16 animate-fadein">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center animate-textPulse">Our Global Clients</h2>
          <div className="flex items-center justify-center gap-6 overflow-x-auto pb-4">
            {["Siemens", "ABB", "Bosch", "Honeywell", "Schneider Electric", "Tata Steel"].map((client, idx) => (
              <div key={client} className="bg-white rounded-full shadow-lg px-8 py-4 text-blue-700 font-bold text-lg animate-bounce" style={{ animationDelay: `${idx * 150}ms` }}>
                {client}
              </div>
            ))}
          </div>
        </section>

        {/* Animated Testimonials */}
       <section className="mb-20 px-6 md:px-12 lg:px-20 animate-fadein">
  <h2 className="text-4xl font-extrabold text-blue-800 mb-12 text-center animate-textPulse">
    What Our Clients Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        name: "Rahul Verma",
        company: "Tata Steel",
        text: "IATPL delivered a seamless automation solution that transformed our operations!",
      },
      {
        name: "Priya Singh",
        company: "Bosch",
        text: "Professional, innovative, and reliable team. Highly recommended.",
      },
      {
        name: "Amit Patel",
        company: "Siemens",
        text: "Their engineering expertise is unmatched in the industry.",
      },
    ].map((testimonial, idx) => (
      <div
        key={testimonial.name}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center animate-cardIn"
        style={{ animationDelay: `${idx * 200}ms` }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h6m-3 8a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-800 italic mb-4 leading-relaxed">
          “{testimonial.text}”
        </p>
        <h3 className="text-lg font-bold text-blue-700">{testimonial.name}</h3>
        <p className="text-gray-600 text-sm">{testimonial.company}</p>
      </div>
    ))}
  </div>
</section>


     

        {/* Animated Team Section */}
        <section className="mb-16 animate-fadein">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center animate-textPulse">Meet Our Automation Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[{
              name: "Debajit Das",
              role: "Founder & CEO",
              image: "https://static.wixstatic.com/media/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png/v1/fill/w_150,h_150,al_c,lg_1,q_90,enc_avif,quality_auto/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png"
            }, {
              name: "Priya Singh",
              role: "Automation Engineer",
              image: "https://randomuser.me/api/portraits/women/44.jpg"
            }, {
              name: "Amit Patel",
              role: "Robotics Specialist",
              image: "https://randomuser.me/api/portraits/men/46.jpg"
            }, {
              name: "Alice Johnson",
              role: "Project Manager",
              image: "https://randomuser.me/api/portraits/women/47.jpg"
            }].map((member, idx) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-300 animate-cardIn" style={{ animationDelay: `${idx * 150}ms` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-100 animate-fadein"
                />
                <h3 className="text-xl font-bold text-blue-700 animate-textPulse">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-xl shadow-lg mb-8 animate-fadein relative overflow-hidden">
          <svg className="absolute left-0 top-0 w-32 h-32 text-blue-200 opacity-30 animate-spin-slow" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
          <svg className="absolute right-0 bottom-0 w-32 h-32 text-blue-200 opacity-30 animate-spin-slow" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 animate-textPulse">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-800 mb-8">Let our experts design and implement the perfect automation solution for you.</p>
          <a href="mailto:debajit@iatplindia.com" className="inline-block px-10 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-900 transition-colors animate-bounce text-xl">Get Started</a>
        </section>
          <section className="text-center py-12 bg-blue-50 rounded-xl shadow mb-8 animate-fadein">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-6 animate-textPulse">Get in Touch</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6 animate-cardIn">
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <p className="text-lg text-gray-800 mb-2">Call Us Today: <span className="font-bold text-blue-900">+91 20 41321425</span></p>
                <p className="text-lg text-gray-800 mb-2">Email: <a href="mailto:debajit@iatplindia.com" className="text-blue-700 underline font-semibold">debajit@iatplindia.com</a></p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">Location: <span className="font-medium">Interlogistics Automation Technologies Pvt. Ltd, Tower 1A, 1704, Godrej Infinity, Near Renuka Mata Mandir, Keshavnagar, Mundhawa, Pune, Maharashtra 411036</span></p>
              </div>
            </div>
            <a href="mailto:debajit@iatplindia.com" className="inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-900 transition-colors animate-bounce">Contact Us</a>
          </section>
      </div>
    </div>
  );
}

export default Home;

function StatsItem({ label, end = 100, duration = 1.0, suffix = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <div ref={ref} className="bg-blue-100 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transform transition duration-300">
      <div className="mb-2">
        {visible ? <CountUp end={end} duration={duration} suffix={suffix} /> : <span className="text-4xl md:text-5xl font-extrabold text-blue-700">0{suffix}</span>}
      </div>
      <p className="text-gray-700 text-sm">{label}</p>
    </div>
  );
}
