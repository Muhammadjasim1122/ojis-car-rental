import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header with Banner */}
      <div className="w-full relative">
        <img 
          src="https://ojiscarrental.waqarulhaq.com/assets/omanbuildimg-DfRD2M90.jpg" 
          alt="Oman Building" 
          className="w-full h-auto object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              {/* Page Title */}
              <h2 className="text-black text-[28px] md:text-[36px] font-bold m-0">
                About Ojis Car Rental Oman
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
                    className="mr-1" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                </Link>
                <span className="text-white">/</span>
                <span className="text-[#b71c1c] font-medium">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-8">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-[20px] md:text-[30px] font-bold text-black ">
                Why Choose Ojis Car Rental Oman?
              </h2>
              <div className="hidden md:block flex-1 max-w-[40px] h-[3px] bg-black"></div>
            </div>

            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed max-w-[800px] mx-auto text-center">
              Whether you're upgrading your daily commute or looking to make an impression at an important business meeting, the right car rental service can transform your travel experience. At Ojis Car Rental Oman, we offer more than just vehicles — we deliver elegance, convenience, and excellent value, all while ensuring top-notch safety, unmatched comfort, and affordable options.
            </p>
          </div>

          {/* Car Images */}
          <div className="mt-12">
            <img 
              src="https://ojiscarrental.waqarulhaq.com/assets/aboutus2car-BVfvTF1n.jpg" 
              alt="Luxury Cars - Bentley and Rolls Royce" 
              className="w-[800px] h-auto object-contain rounded-lg items-center justify-center m-auto"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-[20px] md:text-[30px] font-bold text-black ">
                Who Are We?
              </h2>
              <div className="hidden md:block flex-1 max-w-[40px] h-[3px] bg-black"></div>
            </div>

            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed max-w-[800px] mx-auto text-center mb-4">
            Ojis Car Rental Oman was founded with a single mission — to make luxury car rentals in Oman simple, convenient, and stress-free for everyone. With a customer-first approach, we are committed to delivering a seamless rental experience where your safety, comfort, and satisfaction are always our top priorities.

            </p>
    <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed max-w-[800px] mx-auto text-center mb-4">
            From busy business professionals to leisure travelers seeking a luxurious driving experience, Ojis Car Rental Oman proudly serves a wide range of clients. Every customer receives personalized attention and exceptional service, ensuring each journey is smooth, memorable, and tailored to their individual needs.
                </p>
          </div>

         
        </div>
    </div>
    
  )
}

export default AboutUs

