import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="w-full relative">
        <img 
          src="https://ojiscarrental.waqarulhaq.com/assets/omanbuildimg-DfRD2M90.jpg" 
          alt="Oman Building" 
          className="w-full h-auto object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2">
              {/* Page Title */}
              <h2 className="text-black text-[28px] md:text-[36px] font-bold m-0">
                Contact Us
              </h2>
              
              {/* Breadcrumb Navigation */}
              <div className="flex items-center gap-2 bg-black/80 rounded-full px-4 py-2">
                <Link 
                  to="/" 
                  className="flex items-center text-white hover:text-[#b71c1c] transition-colors"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 576 512" 
                    className="me-1" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                </Link>
                <span className="breadcrumb-separator text-white">/</span>
                <span className="breadcrumb-current text-white">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Location and Contact Details Section */}
      <div className="bg-[#2c2c2c] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Location and Contact Details */}
            <div className="text-white">
              <h2 className="text-[32px] md:text-[27px] font-bold mb-6">
                Our Location and Contact Details
              </h2>
              
              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#b71c1c]">
                  <FaMapMarkerAlt className="text-[20px]" />
                </div>
                <div>
                  <p className="text-[16px] md:text-[15px] font-semibold mb-2">
                    – Premium & Luxury Car Rental in Muscat, Oman
                  </p>
                  <p className="text-[14px] md:text-[15px]">
                    Near Palm Tree Roundabout, Muscat 112, Oman
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#b71c1c]">
                  <FaPhoneAlt className="text-[20px]" />
                </div>
                <div>
                  <p className="text-[16px] md:text-[15px]">96876768188</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="text-[#b71c1c]">
                  <FaEnvelope className="text-[20px]" />
                </div>
                <div>
                  <p className="text-[16px] md:text-[15px]">reservation@ojisgroup.com</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-8">
                    <h3 className="text-[20px] md:text-[20px] font-bold mb-6 text-center lg:text-left">
                  Follow Us
                </h3>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b71c1c] hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#b71c1c] hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#b71c1c] hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#b71c1c] hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#b71c1c] hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Google Map */}
            <div className="bg-white overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2484571234567!2d58.41234567890123!3d23.58234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzU2LjQiTiA1OMKwMjQnNDQuNCJF!5e0!3m2!1sen!2som!4v1234567890123!5m2!1sen!2som"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ojis Car Rental Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ContactUs
