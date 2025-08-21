import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-sm">&copy; 2025 Interlogistics Automation Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-lg">Facebook</a>
          <a href="https://www.twitter.com/wix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-lg">Twitter</a>
          <a href="https://il.linkedin.com/company/wix-com?trk=public_jobs_topcard_logo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-lg">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
