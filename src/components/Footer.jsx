import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-900 text-white py-10 mt-16 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <img src="https://static.wixstatic.com/media/fbe21a_57ddcaa72c1a4c82a54a70a91ffefc8f~mv2.png/v1/fill/w_120,h_30,al_c,lg_1,q_85,enc_avif,quality_auto/fbe21a_57ddcaa72c1a4c82a54a70a91ffefc8f~mv2.png" alt="IATPL Logo" className="h-8 w-auto mr-4" />
          <span className="font-bold text-lg tracking-wide">Interlogistics Automation Technologies Pvt. Ltd.</span>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://www.facebook.com/wix" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
          </a>
          <a href="https://www.twitter.com/wix" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.581-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.419A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/interlogistics-automation-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
          </a>
        </div>
        <div className="text-center md:text-right text-sm">
          <p className="mb-1">&copy; 2025 Interlogistics Automation Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="opacity-70">Designed & Developed by IATPL Web Team</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
