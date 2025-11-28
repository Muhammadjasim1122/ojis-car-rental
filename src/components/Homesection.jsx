import React from 'react'
import { Link } from 'react-router-dom'
import CarCard from './CarCard'
import FeatureCard from './FeatureCard'
import FAQSection from './FAQSection'
import { FaBolt } from 'react-icons/fa'

function Homesection() {
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
    // Add your booking logic here
  }

  const handleWhatsApp = (carName) => {
    console.log(`WhatsApp clicked for ${carName}`)
    // Add WhatsApp logic here
  }

  const handleCallUs = (carName) => {
    console.log(`Call Us clicked for ${carName}`)
    // Add call logic here
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="w-full h-[200px] md:h-[300px] overflow-hidden">
        <img 
          src="https://ojiscarrental.waqarulhaq.com/assets/ojisbanner-EWMAONdI.jpg" 
          alt="banner" 
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center center' }}
        />
      </div>

      {/* Search and Content Section */}
      <div className="bg-white py-5">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mb-4">
            <input 
              type="text" 
              placeholder="Enter Keyword" 
              className="w-full md:w-auto md:max-w-[400px] px-6 md:px-8 py-2 md:py-1 border-[2px] border-[#b71c1c] rounded-full text-[16px] md:text-[18px] text-gray-500 outline-none focus:border-[#8b0000] bg-white"
            />
            <button className="w-full md:w-auto px-8 py-2 bg-white text-black border-[2px] border-[#b71c1c] rounded-full text-[13px] font-bold hover:bg-[#b71c1c] hover:text-white transition-all whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Heading with decorative lines */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-center text-[18px] sm:text-[24px] md:text-[30px] font-bold text-black leading-tight px-2 md:px-4">
              Ojis Car Rental – Reliable & Affordable Car Rentals in Oman
            </h1>
            <div className="hidden md:block flex-1 max-w-[50px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Category Section - 4 Cars - FULL WIDTH BACKGROUND */}
      <div className="bg-[#d9d9d9] py-6 w-full">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-full mx-auto">
            {/* Economy Sedan */}
            <div className="flex flex-col items-center">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/eco-B8w0y_is.png" 
                  alt="Economy Sedan" 
                  className="w-full max-w-[220px] h-[80px] md:h-[130px] object-contain mb-2 
                            transform transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[14px] md:text-[16px] font-bold text-black transition-all duration-300">
                  Economy Sedan
                </h3>
              </div>


            {/* Midsize SUV */}
            <div className="flex flex-col items-center">
              <img 
                src="https://ojiscarrental.waqarulhaq.com/assets/eco-B8w0y_is.png" 
                alt="Midsize SUV" 
                className="w-full max-w-[220px] h-[80px] md:h-[130px] object-contain mb-2 
                            transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-[14px] md:text-[16px] font-bold text-black transition-all duration-300">
                Midsize SUV
              </h3>
            </div>

            {/* SUV */}
            <div className="flex flex-col items-center">
              <img 
                src="https://ojiscarrental.waqarulhaq.com/assets/luxurysuv-BKoLWz6S.png" 
                alt="SUV" 
                className="w-full max-w-[220px] h-[80px] md:h-[130px] object-contain mb-2 
                            transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-[14px] md:text-[16px] font-bold text-black transition-all duration-300">
                SUV
              </h3>
            </div>

            {/* Saloon */}
            <div className="flex flex-col items-center">
              <img 
                src="https://ojiscarrental.waqarulhaq.com/assets/eco-B8w0y_is.png" 
                alt="Saloon" 
                className="w-full max-w-[220px] h-[80px] md:h-[130px] object-contain mb-2 
                            transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-[14px] md:text-[16px] font-bold text-black transition-all duration-300">
                Saloon
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ALL CARS Button Section */}
      <div className="bg-white py-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-center">
            <Link to="/all-cars" className="px-3 py-1 bg-[#2c2c2c] text-white rounded-full text-[16px] font-semibold hover:bg-[#1a1a1a] transition-all no-underline">
              ALL CARS
            </Link>
          </div>
        </div>
      </div>

      {/* Saloon Rental Heading */}
      <div className="flex items-center justify-center gap-2 py-2 mb-2 px-5">
        <h1 className="text-center text-[18px] sm:text-[24px] md:text-[30px] font-bold text-black leading-tight px-2 md:px-4">
          Enjoy Luxury and Comfort: Book Your Saloon Rental in Oman Now 
        </h1>
        <div className="hidden md:block flex-1 max-w-[50px] h-[2px] bg-black"></div>
      </div>

      {/* Car Cards Section */}
      <div className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <CarCard
              carName="HONDA 8"
              thumbnailImage="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif"
              images={carImages}
              price="200.000"
              category="Saloon"
              onBookNow={() => handleBookNow("HONDA 8")}
              onWhatsApp={() => handleWhatsApp("HONDA 8")}
              onCallUs={() => handleCallUs("HONDA 8")}
            />

            {/* Card 2 */}
            <CarCard
              carName="HONDA 8"
              thumbnailImage="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif"
              images={carImages}
              price="200.000"
              category="Saloon"
              onBookNow={() => handleBookNow("HONDA 8")}
              onWhatsApp={() => handleWhatsApp("HONDA 8")}
              onCallUs={() => handleCallUs("HONDA 8")}
            />

            {/* Card 3 */}
            <CarCard
              carName="HONDA 8"
              thumbnailImage="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif"
              images={carImages}
              price="200.000"
              category="Saloon"
              onBookNow={() => handleBookNow("HONDA 8")}
              onWhatsApp={() => handleWhatsApp("HONDA 8")}
              onCallUs={() => handleCallUs("HONDA 8")}
            />

          </div>
        </div>
      </div>

      {/* ALL CARS Button Section 2 */}
      <div className="bg-white py-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-center">
            <Link to="/all-cars" className="px-3 py-1 bg-[#2c2c2c] text-white rounded-full text-[16px] font-semibold hover:bg-[#1a1a1a] transition-all no-underline">
              ALL CARS
            </Link>
          </div>
        </div>
      </div>

      {/* Second Car Cards Section - 2 Cards Only */}
      <div className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            
            {/* Card 1 */}
            <CarCard
              carName="HONDA 8"
              thumbnailImage="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif"
              images={carImages}
              price="200.000"
              category="Saloon"
              onBookNow={() => handleBookNow("HONDA 8")}
              onWhatsApp={() => handleWhatsApp("HONDA 8")}
              onCallUs={() => handleCallUs("HONDA 8")}
            />

            {/* Card 2 */}
            <CarCard
              carName="HONDA 8"
              thumbnailImage="https://appicfleetread.s3.ap-south-1.amazonaws.com/vehicle-images/690c7763204b1-toyotacorollafront.avif"
              images={carImages}
              price="200.000"
              category="Saloon"
              onBookNow={() => handleBookNow("HONDA 8")}
              onWhatsApp={() => handleWhatsApp("HONDA 8")}
              onCallUs={() => handleCallUs("HONDA 8")}
            />

          </div>
        </div>
      </div>

      {/* Explore Oman's Roads Section */}
      <div className="bg-[#2c2c2c] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Main Heading with Red Underline */}
          <div className="text-center mb-4">
            <h2 className="text-white text-[20px] md:text-[30px] font-bold ">
              Explore Oman's Roads in Elegance with Ojis Car Rental
            </h2>
          </div>

          {/* Subheading */}
          <h3 className="text-[#b71c1c] text-[18px] md:text-[23px] font-bold text-center mb-2">
            Travel Smoothly Across Oman with Trusted Car Rental Services
          </h3>

          {/* Description Text */}
          <p className="text-white text-center text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-12 max-w-[1000px] mx-auto">
            Ojis Car Rental Oman has built a strong reputation in Oman's car rental market, known for exceptional service and a remarkable selection of premium vehicles. Our fleet features luxury sedans, high-performance sports cars, roomy SUVs, and stylish convertibles from top global brands. Whether you live in Oman or are visiting, we provide a remarkable driving experience that combines elegance, comfort, and performance — all at competitive rates. With our no-deposit rental option, you can enjoy driving your dream car without any upfront costs. At Ojis Car Rental Oman, we focus on effortless bookings, flexible rental plans, and attentive customer support. From everyday journeys to special occasions, we offer the perfect vehicle to enhance your experience. And with 24/7 customer assistance, you can count on a smooth, fast, and stress-free rental experience whenever you need it.
          </p>

          {/* 4 Car Images Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Image 1 - Black SUV */}
            <div className="relative rounded-2xl p-4 shadow-2xl"
                 style={{ 
                   background: 'linear-gradient(135deg, #1a2332, #b71c1c)'
                 }}>
              <div className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-120 hover:shadow-[0_0_30px_rgba(183,28,28,0.6)]">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/Catagory%203-uH1eBtC2.png" 
                  alt="Off-road SUV" 
                  className="w-full h-[120px] object-cover"
                />
              </div>
            </div>

            {/* Image 2 - White Bentley */}
            <div className="relative rounded-2xl p-4 shadow-2xl"
                 style={{ 
                   background: 'linear-gradient(135deg, #1a2332, #b71c1c)'
                 }}>
              <div className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-120  hover:shadow-[0_0_30px_rgba(183,28,28,0.6)]">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/Catagory1-jk4c9FJN.png" 
                  alt="Luxury SUV" 
                  className="w-full h-[120px] object-cover"
                />
              </div>
            </div>

            {/* Image 3 - Red Sports Car */}
            <div className="relative rounded-2xl p-4 shadow-2xl"
                 style={{ 
                   background: 'linear-gradient(135deg, #1a2332, #b71c1c)'
                 }}>
              <div className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-120 hover:shadow-[0_0_30px_rgba(183,28,28,0.6)]">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/Catagory%204-C2_8wfpL.png" 
                  alt="Sports Car" 
                  className="w-full h-[120px] object-cover"
                />
              </div>
            </div>

            {/* Image 4 - Yellow/Orange Sports Car */}
            <div className="relative rounded-2xl p-4 shadow-2xl"
                 style={{ 
                   background: 'linear-gradient(135deg, #1a2332, #b71c1c)'
                 }}>
              <div className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-120 hover:shadow-[0_0_30px_rgba(183,28,28,0.6)]">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/Catagory%202-CwQcJYC2.png" 
                  alt="Exotic Car" 
                  className="w-full h-[120px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section - Left: 1 Description, Right: 3 Descriptions */}
      <div className="bg-white py-6">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Single Large Section */}
            <div className="flex items-start gap-5 justify-center items-center flex-col ">
            
              <div className="flex flex-col">
                <h2 className="text-[23px] font-bold text-black mb-2">
                  Oman's Top Choice for Luxury and Reliable Car Rentals — Over a Decade of Service
                </h2>
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  When it comes to luxury car rentals in Oman, Ojis Car Rental Oman is a trusted name. For over a decade, we have been committed to delivering a premium rental experience that blends sophistication, comfort, and great value. Our extensive fleet offers a variety of vehicles to match your preferences and needs, while our no-deposit rental option makes driving a luxury car more accessible than ever. Whatever your travel plans or lifestyle requirements, we provide customized solutions designed to make every journey remarkable.
                </p>
              </div>
            </div>

            {/* Right Column - Three Stacked Sections */}
            <div className="flex flex-col gap-6">
              
              {/* Section 1 - Experience Luxury */}
              <div className="flex items-start gap-4">
                    <img 
                    src="https://ojiscarrental.waqarulhaq.com/assets/luxury-DJ2HW12q.webp" 
                  alt="Luxury Car" 
                  className="w-[90px] h-[60px] object-contain flex-shrink-0 justify-center items-center align-middle m-auto hover:scale-120 transition-all duration-300"
                />
                <div className="flex flex-col">
                  <h3 className="text-[19px] font-semibold text-black mb-2">
                  Experience the Thrill – Drive Elite Sports Cars Today
                  </h3>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                  Dreaming of cruising along Oman stunning coastline or exploring its majestic mountains in style? Ojis Car Rental Oman brings that dream to life with a premium collection of luxury and sports cars. From Lamborghini and Ferrari to Porsche and beyond, we deliver exceptional performance and elegance right to your doorstep. Turn heads and feel the thrill as you drive through Oman scenic roads in a world-class vehicle. Experience unforgettable moments where luxury meets adventure — only with Ojis Car Rental Oman.
                  </p>
                </div>
              </div>

              {/* Section 2 - Explore Top SUV */}
              <div className="flex items-start gap-4">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/suv-Cd5pt5Cb.webp" 
                  alt="SUV" 
                  className="w-[90px] h-[60px] object-contain flex-shrink-0 justify-center items-center align-middle m-auto hover:scale-120 transition-all duration-300"
                />
                <div className="flex flex-col">
                  <h3 className="text-[19px] font-semibold text-black mb-2">
                  Experience Luxury – Rent Premium Cars in Oman
                  </h3>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                  Experience your dream drive across Oman with Ojis Car Rental’s exclusive selection of luxury vehicles. Discover the perfect balance of elegance, comfort, and performance from our diverse fleet — featuring everything from sleek sedans to powerful premium SUVs. Whether you’re exploring Muscat’s vibrant streets or heading to a special occasion, travel in sophistication and style. Choose Ojis Car Rental Oman as your trusted partner for exceptional luxury car rentals across the Sultanate.                  </p>
                </div>
              </div>

              {/* Section 3 - Affordable Car Rentals */}
              <div className="flex items-start gap-4">
                <img 
                  src="https://ojiscarrental.waqarulhaq.com/assets/convertable-BOJcMV2d.webp" 
                  alt="Economy Car" 
                  className="w-[90px] h-[60px] object-contain flex-shrink-0 justify-center items-center align-middle m-auto hover:scale-120 transition-all duration-300"
                />
                <div className="flex flex-col">
                  <h3 className="text-[19px] font-semibold text-black mb-2">
                  Explore Top SUV Rentals in Oman
                  </h3>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                  Conquer Oman’s diverse landscapes — from vast deserts to picturesque coastal roads — in one of our premium SUVs. Seeking the perfect mix of power and versatility? Our Ojis Car Rental Oman SUV fleet features top models from Range Rover, Nissan, GMC, and other leading brands. Experience spacious interiors, luxurious comfort, and high-performance driving designed for every adventure. Explore Oman like never before with our elite SUV rental options                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="bg-[#2c2c2c] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Main Heading with Red Underline */}
          <div className="text-center mb-4">
            <h2 className="text-red-500 text-[18px] md:text-[30px] font-bold ">
            Looking for Luxury Vehicles? Find Out Why Ojis Car Rental Oman Tops the Market in Oman !
            </h2>
          </div>

       

          {/* Description Text */}
          <p className="text-white text-center text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-12 max-w-[1000px] mx-auto">
          At Ojis Car Rental Oman, luxury isn't just a promise — it's our standard. Our exclusive fleet features exotic sports cars and premium SUVs designed to impress and deliver exceptional performance. Enjoy free delivery, no-deposit rentals, and 24/7 customer support for a smooth, hassle-free experience. If you're looking for the ultimate luxury car rental in Oman, your extraordinary journey starts here.          </p>
    
          

          <div className='justify-center items-center mb-8 md:mb-12'> 
        <img src="	https://ojiscarrental.waqarulhaq.com/assets/tinyhome3-CaLJhyN1.png" alt="luxury car" className='w-full max-w-[700px] h-auto md:h-[300px] object-cover justify-center items-center align-middle m-auto' />  
        </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            
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

            {/* Card 4 */}
            <FeatureCard 
              title="Premium Value Backed by Round-the-Clock Service."
              description="Maximize your Oman adventure without overspending. Ojis Car Rental Oman offers transparent rates and exclusive deals, especially for long-term rentals. Pay conveniently using cash, card, or even cryptocurrency. With round-the-clock support and budget-friendly luxury car options, you can explore Oman in style and comfort, all while keeping your expenses in check."
            />

          </div>
         
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Two Column Section - Content Card & Image */}
      <div className="bg-white py-8 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left Column - Content Card */}
            <div className="bg-[#2c2c2c] text-white p-8 rounded-lg border-l-4 border-[#b71c1c]">
              <h2 className="text-[20px] font-bold mb-3">
                Discover Luxury Beyond Compare with Ojis Car Rental Oman
              </h2>
              
              <p className="text-[15px] leading-relaxed mb-6">
                At Ojis Car Rental Oman, we make your dream drive a reality with our carefully selected fleet of exotic vehicles. Whether you desire the raw power of a supercar, the sophisticated elegance of a luxury sedan, the commanding presence of an SUV, or the exhilarating freedom of a convertible, our collection is designed to impress. Renting with us is simple, fast, and hassle-free — just pick your ideal car and contact our team, and we'll handle everything else. Whether you're a local, a business traveler, or visiting Oman from abroad, our transparent and streamlined process ensures a smooth experience from start to finish.
              </p>

              {/* Bullet Points with Lightning Icons */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[18px] flex-shrink-0 mt-1" />
                  <p className="text-[15px]">
                    Transparent pricing with no surprises—just straight forward rates and dependable service you can trust
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[18px] flex-shrink-0 mt-1" />
                  <p className="text-[15px]">
                    Serving locals and international travelers throughout Oman with pride
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[18px] flex-shrink-0 mt-1" />
                  <p className="text-[15px]">
                    Take advantage of attractive prices and exclusive deals on luxury and sports vehicles.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[18px] flex-shrink-0 mt-1" />
                  <p className="text-[15px]">
                    We bring your rental car directly to your doorstep, hotel, or any location in Oman.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img 
                src="https://ojiscarrental.waqarulhaq.com/assets/Double%20Frame%20Image-D2kIY-W-.png" 
                alt="Luxury Car" 
                className="w-full h-auto object-cover "
              />
            </div>

          </div>
        </div>
      </div>

      {/* Full Width Black Background Section with Car Image */}
      <div className="relative bg-black w-full py-10 overflow-hidden">
        {/* Background Car Image - Hidden on mobile */}
        <div className="hidden lg:block absolute left-[50px] top-1/2 -translate-y-1/2">
          <img 
            src="https://ojiscarrental.waqarulhaq.com/assets/Single%20car%20(1)-Be4DN9jW.png" 
            alt="Ferrari Sports Car" 
            className="w-[300px] xl:w-[450px] h-auto object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative w-full px-5 md:px-10">
          <div className="flex items-center justify-center">
            
            {/* Right Column - Content */}
            <div className="text-white max-w-[700px] lg:ml-auto ">
              <h2 className="text-[20px] font-bold mb-3">
                Quick and easy luxury — drive with Ojis Car Rental Oman
              </h2>
              
              <p className="text-[15px] leading-relaxed mb-3">
                At Ojis Car Rental Oman, we go beyond expectations by providing a luxury car rental experience that is smooth, flexible, and designed around your needs. Whether you're a local, a resident of Oman, or visiting from abroad, we make it effortless to drive your dream car — with transparent pricing, fast delivery, and multiple payment options, including cryptocurrency.
              </p>

              <h3 className="text-[18px] font-bold mb-3">
                What Makes Ojis Car Rental Oman Unique
              </h3>

              {/* Bullet Points with Lightning Icons */}
              <div className="space-y-3 ">
                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    Anytime roadside assistance—your safety is our priority.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    Fast, free delivery anywhere in Oman in just 30 minutes.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    Flexible payment methods — pay by cash, credit card, or cryptocurrency with ease.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                    <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    No security deposit required — reserve your dream car without any upfront costs.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    Enjoy up to 250 KM per day — more distance, more discovery.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                    <FaBolt className="text-yellow-400 text-[13px] flex-shrink-0 mt-1" />
                  <p className="text-[13px]">
                    Full insurance coverage included — drive with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Essential Paperwork Section */}
      <div className="bg-white py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Main Heading */}
          <h2 className="text-[18px] md:text-[20px] font-bold text-black text-center mb-3">
            Essential Paperwork for Renting a Car in Oman — A Full Guide
          </h2>

          {/* Description Paragraphs */}
          <p className="text-center text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-3 max-w-[1100px] mx-auto">
            Ready to explore Oman by car? Whether you're a local, a visitor, or a business traveler, renting a car in Oman has never been easier or more convenient — especially with Ojis Car Rental Oman's no-deposit rental options, making the process simpler and hassle-free.
          </p>

          <p className="text-center text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8 md:mb-12 max-w-[1100px] mx-auto">
            Before you start your journey, ensure you have the necessary documents ready. Use this simple checklist to guarantee a hassle-free rental experience:
          </p>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            
            {/* Card 1 - Documents for Oman Residents */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Red Header */}
              <div className="bg-[#b71c1c] text-white py-2 px-4">
                <h3 className="text-[15px] font-bold">Documents for Oman Residents:</h3>
              </div>

              {/* Card Content */}
              <div className="p-4 flex items-start justify-between">
                {/* Left - Bullet Points */}
                <div className="flex-1">
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-[14px] text-gray-800">Oman Driving License</li>
                    <li className="text-[14px] text-gray-800">Omani National ID (or Oman Digital ID may be accepted)</li>
                  </ul>
                </div>

                {/* Right - Car Image */}
                <div className="flex-shrink-0 ml-3">
                  <img 
                    src="	https://ojiscarrental.waqarulhaq.com/assets/docd-Z-R5YSPu.webp" 
                    alt="Man with SUV" 
                    className="w-[90px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Documents for Tourists */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Red Header */}
              <div className="bg-[#b71c1c] text-white py-2 px-4">
                <h3 className="text-[15px] font-bold">Documents for Tourists:</h3>
              </div>

              {/* Card Content */}
              <div className="p-4 flex items-start justify-between">
                {/* Left - Bullet Points */}
                <div className="flex-1">
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-[14px] text-gray-800">Passport</li>
                    <li className="text-[14px] text-gray-800">Home Country Driving License</li>
                    <li className="text-[14px] text-gray-800">International Driving Permit (IDP)</li>
                  </ul>
                </div>

                {/* Right - Car Image */}
                <div className="flex-shrink-0 ml-3">
                  <img 
                    src="	https://ojiscarrental.waqarulhaq.com/assets/docd-Z-R5YSPu.webp" 
                    alt="Man with SUV" 
                    className="w-[90px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Homesection;
