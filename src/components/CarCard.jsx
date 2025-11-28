import React, { useState, useEffect } from 'react'
import { FaUser, FaSuitcase, FaTruck, FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa'

function CarCard({ 
  carName = "HONDA 8",
  thumbnailImage,
  images = [],
  price = "200.000",
  category = "Saloon",
  hasNoHiddenCharges = true,
  hasNoDeposit = true,
  hasFreeDelivery = true,
  onBookNow,
  onWhatsApp,
  onCallUs,
  showImages = true
}) {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 5000) // Change every 5 seconds
      return () => clearInterval(interval)
    }
  }, [images.length])

  // Navigation functions
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="bg-white rounded-2xl  hover:shadow-lg hover:border-2 hover:border-yellow-400     overflow-hidden w-full">
      {/* Car Image with Navigation - Only show if images are provided */}
      {showImages && thumbnailImage && (
        <div className="relative h-[180px] md:h-[200px] bg-gray-100 overflow-hidden">
          <img 
            src={images.length > 0 ? images[currentImage] : thumbnailImage} 
            alt={carName} 
            className="w-full h-full object-cover transition-all duration-5000 ease-in-out"
            key={currentImage}
          />
          
          {/* Left Arrow */}
          {images.length > 1 && (
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-all"
            >
              <FaChevronLeft />
            </button>
          )}
          
          {/* Right Arrow */}
          {images.length > 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-all"
            >
              <FaChevronRight />
            </button>
          )}
          
          {/* Carousel Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        {/* Car Name with Logo/Thumbnail */}
        <div className="flex items-center gap-3 mb-3">
          {thumbnailImage && showImages ? (
            <img 
              src={thumbnailImage} 
              alt="thumbnail" 
              className="w-14 h-8 object-cover "
            />
          ) : (
            <img 
              src="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/691c52937e1c8-OJIS%20LOGO.O1.jpg" 
              alt="OJIS Logo" 
              className="w-12 h-12 object-contain rounded-full"
            />
          )}
          <h2 className="text-[18px] font-bold text-black">{carName}</h2>
        </div>

        {/* Features and Price Row */}
        <div className="flex justify-between mb-3">
          {/* Left: Features */}
          <div className="space-y-2">
            {hasNoHiddenCharges && (
              <div className="flex items-center gap-2 text-green-600">
                <FaCheck className="text-[18px]" />
                <span className="text-sm font-medium">No hidden charges</span>
              </div>
            )}
            {hasNoDeposit && (
              <div className="flex items-center gap-2 text-green-600">
                <FaCheck className="text-[18px]" />
                <span className="text-sm font-medium">No Deposit</span>
              </div>
            )}
            {hasFreeDelivery && (
              <div className="flex items-center gap-2 text-gray-700">
                <FaTruck className="text-[18px]" />
                <span className="text-sm">Free Delivery in Oman</span>
              </div>
            )}
          </div>

          {/* Right: Price */}
          <div className="text-right">
            <p className="text-sm text-gray-600">Price per day</p>
            <p className="text-[15px]">OMR {price}</p>
          </div>
        </div>

        {/* Icons and Category */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <FaUser className="text-[18px] text-gray-700" />
          </div>
          <div className="flex items-center gap-1">
            <FaSuitcase className="text-[18px] text-gray-700" />
          </div>
          <span className="px-4 py-1 bg-gray-100 rounded text-sm font-medium">{category}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={onBookNow}
            className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-[10px] font-semibold hover:bg-yellow-500 text-sm md:text-base"
          >
            Book Now
          </button>
          <button 
            onClick={onWhatsApp}
            className="flex-1 bg-green-600 text-white py-2 px-2 rounded-[10px] font-semibold hover:bg-green-700 flex items-center justify-center gap-1 text-sm md:text-base"
          >
            <FaWhatsapp className="text-[16px] md:text-[18px]" /> WhatsApp
          </button>
          <button 
            onClick={onCallUs}
            className="flex-1 bg-blue-600 text-white py-2 px-2 rounded-[10px] font-semibold hover:bg-blue-700 flex items-center justify-center gap-1 text-sm md:text-base"
          >
            <FaPhone className="text-[16px] md:text-[18px]" /> Call Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarCard

