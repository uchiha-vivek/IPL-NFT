import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-xl font-bold text-white dark:text-gray-200">IPL</h1>
            <h4>One Place For Trading</h4>
            <ul className='flex gap-2 mt-4'>
                <li><FaInstagram/></li>
                <li>  <FaSquareXTwitter/></li>
                <li><FaLinkedin/></li>
                <li><FaDiscord/></li>
                <li><FaYoutube/></li>
            </ul>
            
            
          </div>
          <div className="flex space-x-4 mb-4 mt-4">
            <a href="#" className="hover:text-white dark:hover:text-gray-200 gap-2 ">
                <ul>
                    <li>Products</li>
                    <li>SuperNode</li>
                    <li>NFT-API</li>
                    <li>WebSockets</li>
                    <li>PipeLines</li>
                </ul>
            </a>
            <a href="#" className="hover:text-white dark:hover:text-gray-200">
                <ul>
                    <li>Developers</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                    <li>Status</li>
                    <li>Docs</li>
                </ul>
            </a>
            <a href="#" className="hover:text-white dark:hover:text-gray-200">
                <ul>
                    <li>Community</li>
                    <li>Bugs</li>
                    <li>Bug Bounty</li>
                </ul>
            </a>
            <a href="#" className="hover:text-white dark:hover:text-gray-200">
                <ul>
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Career</li>
                </ul>
            </a>
             
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>© {new Date().getFullYear()} My DApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
