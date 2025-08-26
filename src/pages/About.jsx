import React, { useEffect, useState } from 'react';

function CountUp({ end, duration = 1, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);
  return <span className="text-4xl md:text-5xl font-extrabold text-blue-700">{count}{suffix}</span>;
}

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl p-10 mb-12">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-8 text-center tracking-tight drop-shadow">About Us</h2>
        <p className="text-gray-700 mb-10 text-xl text-center max-w-3xl mx-auto font-medium">Interlogistics Automation Technologies Pvt. Ltd. (IATPL) is your partner in services and automation, providing honest service and great value since 1998. We emphasize customer well-being and deliver real results through our expertise in automation, engineering, and project management.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center my-12">
          <div className="bg-blue-100 rounded-xl p-10 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-2">
              <CountUp end={2018} duration={1.2} />
            </div>
            <p className="text-gray-700 text-lg font-semibold">Year Company Started</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-10 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-2">
              <CountUp end={25} duration={1.2} suffix="+" />
            </div>
            <p className="text-gray-700 text-lg font-semibold">Total Number of Customers</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-10 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-2">
              <CountUp end={250} duration={1.2} suffix="+" />
            </div>
            <p className="text-gray-700 text-lg font-semibold">Total Number of Employees</p>
          </div>
        </div>
        <section className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h3>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto font-medium">To build your visions with broad expertise, honest service, and great value. We focus on delivering automation solutions that drive efficiency and growth for our clients.</p>
        </section>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center w-full md:w-1/3">
          <img src="https://static.wixstatic.com/media/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png/v1/fill/w_150,h_150,al_c,lg_1,q_90,enc_avif,quality_auto/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png" alt="Team Member" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Debajit Das</h3>
          <p className="text-gray-700">Founder & CEO</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center w-full md:w-1/3">
          <img src="https://static.wixstatic.com/media/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png/v1/fill/w_150,h_150,al_c,lg_1,q_90,enc_avif,quality_auto/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png" alt="Team Member" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Team Member</h3>
          <p className="text-gray-700">Project Manager</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center w-full md:w-1/3">
          <img src="https://static.wixstatic.com/media/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png/v1/fill/w_150,h_150,al_c,lg_1,q_90,enc_avif,quality_auto/fbe21a_9e05f1d4ddf24c98a1005001b169f3c9~mv2.png" alt="Team Member" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Team Member</h3>
          <p className="text-gray-700">Lead Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
