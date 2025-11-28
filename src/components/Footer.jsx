import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#212529] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1 - Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-[#b71c1c] text-[20px] font-bold mb-4">
              Ojis Car Rental Oman
            </h3>
            <p className="text-[14px] leading-relaxed mb-4">
              Ojis Car Rental Oman redefines luxury travel with a premium fleet and unparalleled service. We bring you comfort, style, and convenience whenever you need it. At Ojis Car Rental Oman, customer satisfaction isn't just a promise — it's the standard we uphold.
            </p>
            <button className="border border-white px-4 py-2 rounded text-[14px] hover:bg-white hover:text-[#2c2c2c] transition-all mb-6">
              Continue Reading
            </button>
            
            {/* App Store Badges */}
            <h4 className="text-[#b71c1c] text-[16px] font-bold mb-3">Available At</h4>
            <div className="flex gap-3">
              <a href="#" className="block">
                <img 
                  src="	https://ojiscarrental.waqarulhaq.com/assets/playstore-BBh75eNX.jpeg" 
                  alt="Google Play" 
                  className="h-[30px] w-auto rounded-[10px]"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="	https://ojiscarrental.waqarulhaq.com/assets/appstore-pnLlxA8T.jpeg" 
                  alt="App Store" 
                  className="h-[30px] w-auto rounded-[10px]"
                />
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-[#b71c1c] text-[20px] font-bold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  Blogs & News
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-[#b71c1c] text-[20px] font-bold mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  Economy Sedan
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  Premium SUV
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  Crossover
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3 className="text-[#b71c1c] text-[20px] font-bold mb-4">
              Support
            </h3>
            <div className="space-y-3">
              <p className="text-[14px]">
                Ojis Car Rental – Oman<br />
                – Muscat, Oman
              </p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[14px]" />
                <a href="tel:96876768188" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  96876768188
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[14px]" />
                <a href="https://wa.me/96876768188" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  96876768188
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[14px]" />
                <a href="mailto:reservation@ojisgroup.com" className="text-[14px] hover:text-[#b71c1c] transition-colors">
                  reservation@ojisgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 5 - Follow Us */}
          <div>
            <h3 className="text-[#b71c1c] text-[20px] font-bold mb-4">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-5 items-center">
              <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaYoutube />
              </a>
                    <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaTiktok />
              </a>
                <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white text-[20px] hover:text-[#b71c1c] transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <p className="text-center text-[14px] text-gray-400">
            © 2025 Ojis Car Rental Oman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

