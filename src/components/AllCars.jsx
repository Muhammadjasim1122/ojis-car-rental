import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CarCard from './CarCard'
import FeatureCard from './FeatureCard'
import FAQSection from './FAQSection'

function AllCars() {
  const [sortBy, setSortBy] = useState('Sort By')

  // FAQ data
  const faqs = [
    {
      question: "What is the minimum age requirement to rent a luxury car?",
      answer: "You must be at least 21 years old to rent most cars, and 25 years old for high-end supercars such as Lamborghini or Ferrari."
    },
    {
      question: "What documents do I need to rent a car in Oman?",
      answer: "You will need a valid driver's license, passport or national ID, and a credit card for security purposes. International visitors may need an International Driving Permit (IDP) depending on their country of origin."
    },
    {
      question: "Can I rent a luxury car in Muscat without a driver?",
      answer: "Yes, you can rent a luxury car in Muscat for self-drive. All our vehicles come with comprehensive insurance and 24/7 roadside assistance for your peace of mind."
    },
    {
      question: "What luxury cars are available for rent at OJIS Car Rental Muscat?",
      answer: "We offer a premium selection including Lamborghini, Ferrari, Porsche, Range Rover, Mercedes-Benz, BMW, and many other high-end brands. Our fleet is regularly updated to provide you with the latest models."
    }
  ]
  // Car images array
  const carImages = [
    'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/69119990d45e3-kia%20int2.jpg',
    'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/69119990eaf02-jetourt2car.jpg',
    'https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/6911999119021-Jetour-T2-dashboard.jpg'
  ]

  // Handler functions for button clicks
  const handleBookNow = (carName) => {
    console.log(`Book Now clicked for ${carName}`)
  }

  const handleWhatsApp = (carName) => {
    console.log(`WhatsApp clicked for ${carName}`)
    window.open(`https://wa.me/96876768188?text=I'm interested in ${carName}`, '_blank')
  }

  const handleCallUs = (carName) => {
    console.log(`Call Us clicked for ${carName}`)
    window.location.href = 'tel:96876768188'
  }

  // Sample car data - you can expand this array with more cars
  const allCars = [
    {
      id: 1,
      name: "HONDA 8",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "200.000",
      category: "Saloon"
    },
    {
      id: 2,
      name: "Toyota Camry",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "180.000",
      category: "Sedan"
    },
    {
      id: 3,
      name: "Nissan Patrol",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "250.000",
      category: "SUV"
    },
    {
      id: 4,
      name: "BMW 7 Series",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "300.000",
      category: "Luxury Sedan"
    },
    {
      id: 5,
      name: "Mercedes-Benz S-Class",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "350.000",
      category: "Luxury Sedan"
    },
    {
      id: 6,
      name: "Range Rover Sport",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "400.000",
      category: "Luxury SUV"
    },
    {
      id: 7,
      name: "Audi Q7",
      thumbnailImage: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      images: carImages,
      price: "280.000",
      category: "SUV"
    },
    {
      id: 8,
      name: "Lexus ES 350",
      thumbnail: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      price: "220.000",
      category: "Luxury Sedan"
    },
    {
      id: 9,
      name: "Ford Explorer",
      thumbnail: "https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif",
      price: "190.000",
      category: "SUV"
    }
  ]

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
                Ojis Car Rental Oman
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
                <span className="text-[#b71c1c] font-medium">Cars</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Heading with Sort By Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h1 className="text-[20px] md:text-[20px] lg:text-[25px] font-bold text-black leading-tight">
              Luxury VIP Car Hire in Oman — The Signature Ojis Car Rental Experience —
            </h1>
            
            {/* Sort By Button */}
            <div className="relative flex-shrink-0">
              <select 
                value={sortBy}
                onChange={(e) => {
                  if (e.target.value === "clear sort") {
                    setSortBy("Sort By")
                  } else {
                    setSortBy(e.target.value)
                  }
                }}
                className="px-2 py-2 bg-[#b71c1c] text-white rounded-full text-[14px] font-semibold cursor-pointer hover:bg-[#8b0000] transition-all appearance-none "
                style={{ minWidth: '100px' }}
              >
                <option value="Sort By" disabled hidden>Sort By</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="clear sort">Clear Sort</option>
              </select>
              <svg 
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white" 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Description Content */}
          <div className="max-w-[1200px] mx-auto px-5 text-center ">
            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
              At Ojis Car Rental Oman, we make luxury driving simple and accessible. Enjoy premium vehicles with no security deposit, honest pricing, and a handpicked selection of world-class sedans, sports cars, and SUVs. With flexible rental options and an easy booking process, your journey across Oman will be smooth, comfortable, and refined from start to finish.
            </p>
            <p className="text-[15px] font-semibold text-black mb-1">
              For more details you can contact us on WhatsApp
            </p>
            <p className="text-[14px] font-bold text-black">
              (All cars are available even if they are not mentioned on website)
            </p>
          </div>
        </div>
      </div>

      {/* Car Cards Grid */}
      <div className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCars.slice(0, 3).map((car) => (
              <CarCard
                key={car.id}
                thumbnail={car.thumbnail}
                carName={car.name}
                price={car.price}
                category={car.category}
                onBookNow={() => handleBookNow(car.name)}
                onWhatsApp={() => handleWhatsApp(car.name)}
                onCallUs={() => handleCallUs(car.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Top Luxury Cars Section with Decorative Borders */}
      <div className="bg-white py-12">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="relative bg-white border border-gray-200 shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
            {/* Top left decorative border */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#b71c1c]"></div>

            <h2 className="text-[20px] md:text-[25px] font-bold text-black mb-4">
              Top Luxury Cars at Competitive Prices in Oman
            </h2>
            
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              Looking for a luxury car that matches your budget? Understanding Oman's car rental rates allows you to find the perfect vehicle without overspending. At Ojis Car Rental Oman, we make premium travel affordable with a wide range of luxury sedans, powerful SUVs, and high-performance sports cars—all priced to suit every budget and lifestyle.
            </p>

            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              Whether you're cruising through Oman's vibrant streets in a Lamborghini or venturing across its golden dunes in a Range Rover, Ojis Car Rental Oman offers the perfect mix of elegance and value—turning every drive into a first-class experience.
            </p>

            {/* Bottom right decorative border */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#b71c1c]"></div>
          </div>
        </div>
      </div>

      {/* Believe Luxury Car Rentals Section */}
      <div className="bg-[#2c2c2c] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Main Heading */}
          <div className="text-center mb-1">
            <h2 className="text-[#b71c1c] text-[26px] md:text-[36px] font-bold">
              Believe Luxury Car Rentals Are Too Expensive? Think Again.
            </h2>
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-white text-[14px] md:text-[16px] leading-relaxed max-w-[1300px] mx-auto text-center">
            <p>
              Who says renting a luxury car has to be expensive or difficult? At Ojis Car Rental Oman, we're transforming the way you experience premium driving. Our carefully curated fleet includes luxury SUVs, sleek convertibles, and powerful sports cars from world-class brands such as Ferrari, Lamborghini, Bentley, BMW, and others — all available at affordable rates designed to suit your budget without compromising on quality or style.
            </p>

            <p>
              What truly sets us apart is our commitment to simplicity and transparency. At Ojis Car Rental Oman, we offer complimentary delivery across Oman and no-deposit rental options, making your experience quick, effortless, and stress-free. With us, you'll never encounter hidden charges — just clear pricing, honest service, and smooth support from reservation to return.
            </p>
            <p>
              Whether it's a night out, a business journey, or simply the thrill of driving your dream car, Ojis Car Rental Oman makes luxury rentals simple, affordable, and unforgettable. Plus, with our 24/7 support team just a call away, you can enjoy complete peace of mind on the road. Every ride with Ojis Car Rental Oman VIP feels like first-class luxury — without the hefty price tag.
            </p>
          </div>
        </div>
      </div>    
        {/* looking for luxury vehicles? */}
      <div className="bg-[#2c2c2c] py-5">
          <div className='justify-center items-center mb-8 md:mb-12 '> 
        <img src="	https://ojiscarrental.waqarulhaq.com/assets/tinyhome3-CaLJhyN1.png" alt="luxury car" className='w-full max-w-[700px] h-auto md:h-[300px] object-cover justify-center items-center align-middle m-auto' />  
        </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1200px] ">
            
            {/* Card 1 */}
            <FeatureCard 
              title="No Delays, Just Drive—Ojis Car Rental Oman Freedom Awaits."
              description="Tired of unreliable public transport in Oman? Take control of your travel with Ojis Car Rental Oman. With our fast 30-minute delivery service, your selected luxury car can arrive at your doorstep anywhere in Oman — completely free. Say goodbye to strict schedules and crowded buses. Enjoy the freedom of flexible car rentals and explore Oman at your own pace, on your own terms."
            
            />

            {/* Card 2 */}
            <FeatureCard 
              title="Freedom to Drive – Trusted Cars, Exceptional Comfort."
              description="Elevate your Oman adventure with Ojis Car Rental trusted fleet of reliable vehicles. Imagine exploring the city at your own pace, making spontaneous stops, and enjoying complete freedom. Every rental comes with full insurance coverage and 24/7 roadside assistance, ensuring a worry-free drive. Choose your dream car today and enjoy a smooth, secure, and truly satisfying rental experience across Oman."
            />  

            {/* Card 3 */}
            <FeatureCard 
              title="Discover the Ideal Car for Your Oman Adventure."
              description="Looking for a ride that matches your Oman lifestyle? At Ojis Car Rental, our diverse fleet has it all—from elegant sedans and powerful SUVs to exhilarating convertibles and high-performance sports cars. Whether your goal is pure adventure or unmatched luxury, we've got you covered. Enjoy a generous 250 km daily allowance, giving you the freedom to explore Oman's most iconic destinations without limits."
            />

           

          </div>
         
        </div>
         {/* Why a Luxury Car Rental Section */}
      <div className="bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-gray-200 rounded-lg p-4 shadow-lg ">
            {/* Left Column - Content */}
            <div className="space-y-6 px-4 ">
              <h2 className="text-[20px] md:text-[28px] font-bold text-black mb-4">
                Why a Luxury Car Rental in Oman Makes All the Difference
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                Discover Oman in a luxury car and transform every drive into a truly memorable experience. Whether you're cruising along scenic coastal highways, taking in Muscat's stunning skyline, or arriving at a high-profile event, a premium vehicle makes every moment extraordinary. Ojis Car Rental Oman offers a carefully curated fleet featuring top-tier brands like Porsche, Ferrari, and Lamborghini, delivering unmatched comfort, cutting-edge performance, and striking design. With no-deposit rentals and flexible plans, you can enjoy luxury driving without financial concerns. Transparent pricing, exceptional service, and a fleet of iconic cars make exploring Oman in style effortless and unforgettable.
              </p>

              <h2 className="text-[20px] md:text-[28px] font-bold text-black mb-4 pt-4">
                Elevate Your Journey to First-Class with Ojis Car Rental Oman
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                Why settle for ordinary when you can experience extraordinary? At Ojis Car Rental Oman, we do more than just provide cars — we craft memorable driving experiences. Choose from our exclusive fleet of luxury vehicles, including Ferrari, Bentley, BMW, and more, each built to impress and enhance your journey. Whether you're attending a high-profile event or taking a scenic drive along Oman's coastline, we ensure every ride radiates style, elegance, and confidence. With no-deposit rentals, fast delivery, and a customer-focused approach, you can enjoy Oman in luxury and comfort without any hassle.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <img 
                src="https://ojiscarrental.waqarulhaq.com/assets/car1-mejmAAbl.png" 
                alt="Luxury Car" 
                className="w-[360px] max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      </div>
     
    
  )
}

export default AllCars

