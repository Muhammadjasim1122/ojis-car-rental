import React from 'react'

function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col">
      {/* Heading */}
      <h3 className="text-white text-[18px] font-bold mb-4 text-center leading-tight">
        {title}
      </h3>
      
      {/* Content Box */}
      <div className="bg-white rounded-2xl p-6 flex-1">
        <p className="text-[13px] text-gray-800 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard

