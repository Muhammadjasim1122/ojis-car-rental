import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Luxury Cars in Oman",
      date: "November 6, 2025",
      image: "	https://adminclean.appicbizz.com/uploads/vehicles/article_banner_1762427783248.webp",
      excerpt: "The Ultimate Luxury Car Experience in Muscat, OmanMuscat, the stunning capital of Oman, is a city where tradition meets modern luxury. With its scenic coastal roads, majestic mountains, and a blend of...",
      category: "Luxury Cars"
    },
    {
      id: 2,
      title: "Best SUVs for Desert Adventures",
      date: "November 5, 2025",
      image: "https://ojiscarrental.waqarulhaq.com/assets/car1-mejmAAbl.png",
      excerpt: "Discover the perfect SUVs for exploring Oman's vast deserts. From powerful engines to luxurious interiors, these vehicles offer the ultimate off-road experience with comfort and style...",
      category: "SUV"
    },
 
   
  ]

  // Filter blog posts based on search
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
     

         {/* Blog Posts Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredPosts.map((post) => (
             <div 
               key={post.id} 
               className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
             >
               {/* Blog Image */}
               <div className="h-[180px] overflow-hidden">
                 <img
                   src={post.image}
                   alt={post.title}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 />
               </div>
 
               {/* Blog Content */}
               <div className="p-4">
                 {/* Date */}
                 <p className="text-gray-500 text-[13px] mb-2">{post.date}</p>
 
                 {/* Title */}
                 <h3 className="text-[18px] font-bold text-black mb-2 hover:text-[#b71c1c] transition-colors cursor-pointer">
                   {post.title}
                 </h3>
 
                 {/* Excerpt */}
                 <p className="text-gray-700 text-[13px] leading-relaxed mb-3">
                   {post.excerpt}
                 </p>
 
               
               </div>
             </div>
           ))}
         </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-[18px]">
              No blog posts found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>

    

    
    </div>
  )
}

export default Blog

