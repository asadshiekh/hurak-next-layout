import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">

<div className="flex flex-col lg:flex-row justify-between items-center border-b pb-8 mb-8">
      {/* Left side: Text */}
      <div className="mb-4 lg:mb-0 lg:w-1/2 text-center lg:text-left px-5">
        <h3 className="text-lg font-semibold mb-4">Trusted by companies big and small.</h3>
      </div>
      
      {/* Right side: Logos */}
      <div className="flex justify-center lg:justify-end lg:w-1/2 space-x-8">
        <img src="/images/brand1.webp" alt="Crisis" className="h-5 lg:h-8" />
        <img src="/images/brand2.webp" alt="Giorgio Armani" className="h-5 lg:h-8" />
        <img src="/images/brand3.webp" alt="Marks & Spencer" className="h-5 lg:h-8" />
        <img src="/images/brand4.webp" alt="Balfour Beatty" className="h-5 lg:h-8" />
      </div>
      </div>

      <div className="container mx-auto px-5 lg:px-20">
        {/* Top section with logos */}

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-medium text-lg mb-4">Find a Course</h4>
            <ul className="space-y-2">
              <li>All Courses</li>
              <li>Classroom Courses</li>
              <li>On Demand Courses</li>
              <li>Live Online Courses</li>
              <li>Advertise on hurak</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Popular Categories</h4>
            <ul className="space-y-2">
              <li>CITB Site Safety Plus</li>
              <li>Personal Licence</li>
              <li>First Aid</li>
              <li>Health & Safety</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li>CSCS Green Card Training</li>
              <li>Personal Licence</li>
              <li>Traffic Marshal</li>
              <li>Emergency First Aid at Work</li>
              <li>First Aid at Work Training</li>
              <li>Door Supervisor Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <p className="mb-4">
              <strong>0333 344 1293</strong>
            </p>
            <h5 className="font-medium mb-2">Head Office Address</h5>
            <p className="">
              10 Tiller Rd, <br />
              London, <br />
              E14 8PX
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-primary">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-primary">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-primary">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-primary">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-primary">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-sm space-x-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
