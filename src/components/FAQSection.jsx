import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openFAQIndex, setOpenFAQIndex] = useState(0) // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? -1 : index)
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-[800px] mx-auto px-5 ">
        {/* Heading */}
        <div className="flex justify-center items-center flex-col gap-4 mb-8">
          <h2 className="text-[30px] font-bold text-black text-center">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 ">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 rounded-lg flex items-center justify-between hover:scale-101 transition-all duration-300 transition-all duration-500 ${
                  openFAQIndex === index 
                    ? 'bg-[#b71c1c] text-white' 
                    : 'bg-[#2c2c2c] text-white hover:bg-[#3c3c3c]'
                }`}
              >
                <h3 className="text-[15px] font-semibold pr-4">
                  {faq.question}
                </h3>
                {openFAQIndex === index ? (
                  <FaChevronUp className="text-white flex-shrink-0 " />
                ) : (
                  <FaChevronDown className="text-white flex-shrink-0" />
                )}
              </button>

              {/* Answer Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white border-l-1 border-r-1 border-b-1 border-gray-300 px-6 py-3 rounded-b-lg">
                  <p className="text-[16px] text-gray-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection

