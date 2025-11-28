import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false)
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const brands = [
    {
      name: 'Ferrari',
      logo: 'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690ca000dc169-LOGO%20FERRARI.png'
    },
    {
      name: 'Jetour',
      logo: 'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c768dbaafd-jetour.png'
    },
    {
      name: 'ASPIRE',
      logo: 'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif'
    }
  ]

  return (
    <header className="bg-[#22272b] border-b-4 border-[#b71c1c] text-[#eaeef0] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-10 py-[10px]">
        
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline text-inherit">
          <img 
            src="https://ojiscarrental.waqarulhaq.com/assets/ojislogoupdateremovebg-DQFIfdWm.png" 
            alt="OJIS Car Rental Logo" 
            className="w-[80px] md:w-[120px] h-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-2xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="list-none flex gap-[26px] m-0 p-0 items-center">
            
            <li><Link to="/" className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition">Home</Link></li>

            <li><Link to="/all-cars" className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition">All Cars</Link></li>
            
            {/* Brands Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setShowBrandsDropdown(true)}
              onMouseLeave={() => setShowBrandsDropdown(false)}
            >
              <a 
                href="#" 
                className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  setShowBrandsDropdown(!showBrandsDropdown)
                }}
              >
                All Brands ▾
              </a>

              {showBrandsDropdown && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 rounded shadow-2xl py-3 px-6 md:px-12 w-[90vw] md:min-w-[600px] max-w-[600px] z-[100] border border-gray-200 bg-white"
                  onMouseEnter={() => setShowBrandsDropdown(true)}
                  onMouseLeave={() => setShowBrandsDropdown(false)}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {brands.map((brand, index) => (
                      <Link 
                        key={index}
                        to={`/brand/${brand.name}`}
                        className="flex flex-col items-center gap-1 no-underline hover:opacity-80 transition"
                        onClick={() => setShowBrandsDropdown(false)}
                      >
                        <div className="w-[50px] h-[100px] flex items-center justify-center">
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <span className="text-black text-[15px] font-semibold text-center">{brand.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Categories Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setShowCategoriesDropdown(true)}
              onMouseLeave={() => setShowCategoriesDropdown(false)}
            >
              <a 
                href="#" 
                className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  setShowCategoriesDropdown(!showCategoriesDropdown)
                }}
              >
                Categories ▾
              </a>

              {showCategoriesDropdown && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl py-3 px-6 w-[230px] z-[100] bg-white"
                  onMouseEnter={() => setShowCategoriesDropdown(true)}
                  onMouseLeave={() => setShowCategoriesDropdown(false)}
                >
                  <Link 
                    to="/category/Economy Sedan" 
                    onClick={() => setShowCategoriesDropdown(false)}
                    className="block text-[15px] font-semibold text-black hover:opacity-70 text-center py-1 no-underline"
                  >
                    Economy Sedan
                  </Link>

                  <div className="flex justify-center my-2">
                    <div className="w-[70%] h-[1.5px] bg-black"></div>
                  </div>

                  <Link 
                    to="/category/SUV" 
                    onClick={() => setShowCategoriesDropdown(false)}
                    className="block text-[15px] font-semibold text-black hover:opacity-70 text-center py-1 no-underline"
                  >
                    SUV
                  </Link>

                  <div className="flex justify-center my-2">
                    <div className="w-[70%] h-[1.5px] bg-black"></div>
                  </div>

                  <Link 
                    to="/category/Saloon" 
                    onClick={() => setShowCategoriesDropdown(false)}
                    className="block text-[15px] font-semibold text-black hover:opacity-70 text-center py-1 no-underline"
                  >
                    Saloon
                  </Link>
                </div>
              )}
            </li>

            <li><Link to="/about-us" className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition">About Us</Link></li>
            <li><Link to="/blog" className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition">Blog</Link></li>
            <li><Link to="/contact-us" className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition">Contact Us</Link></li>

            {/* LOGIN BUTTON (Desktop) */}
            <li>
              <Link 
                to="/login" 
                className="text-[#eaeef0] no-underline text-[16px] opacity-95 hover:text-white transition"
              >
                Login
              </Link>
            </li>

          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed top-[74px] left-0 w-full bg-[#22272b] transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <ul className="flex flex-col p-5 space-y-4">

            <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">Home</Link></li>
            <li><Link to="/all-cars" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">All Cars</Link></li>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">All Brands</a></li>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">Categories</a></li>
            <li><Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">About Us</Link></li>
            <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">Blog</Link></li>
            <li><Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-[#eaeef0] text-[16px] block py-2">Contact Us</Link></li>

            {/* LOGIN (Mobile) */}
            <li>
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-[#eaeef0] text-[16px] block py-2"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header
