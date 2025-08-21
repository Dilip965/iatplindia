import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Contact Us</h2>
      <p className="text-gray-700 mb-10 text-lg text-center">Get in touch with us for your automation and engineering needs.</p>
  <form className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-lg mx-auto border border-gray-100 animate-fadeinup">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">First Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Phone</label>
          <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your phone" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" rows="4" placeholder="Tell us what you need help with..."></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">Send</button>
      </form>
  <div className="max-w-lg mx-auto text-center animate-fadeinup">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Contact Info</h3>
        <p className="text-gray-700 mb-2">Call Us: <span className="font-bold">+91 20 41321425</span></p>
        <p className="text-gray-700 mb-2">Email: <a href="mailto:debajit@iatplindia.com" className="text-blue-700 underline">debajit@iatplindia.com</a></p>
        <p className="text-gray-700">Location: Interlogistics Automation Technologies Pvt. Ltd, Tower 1A, 1704, Godrej Infinity, Near Renuka Mata Mandir, Keshavnagar, Mundhawa, Pune, Maharashtra 411036</p>
      </div>
    </div>
  );
}

export default Contact;
