import React from 'react';
import Image from 'next/image';

const FurnitureCategories = () => {
  const categories = [
    { imgSrc: '/sixth.jpg', title: 'Living Room', items: '18,309 items', description: 'Explore our beautiful living room wallpapers.' },
    { imgSrc: '/third.jpg', title: 'Decor', items: '77,392 items', description: 'Discover decorative wallpapers for every room.' },
    { imgSrc: '/fourth.jpg', title: 'Bedroom', items: '22,094 items', description: 'Find soothing wallpapers for your bedroom.' },
    { imgSrc: '/ninth.jpg', title: 'Kids Room', items: '837 items', description: 'Fun and vibrant wallpapers for kids\' rooms.' },
  ];

  return (
    <div className="bg-[#F9F9F9] py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Browse All Wallpapers That We Designed For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-lg overflow-hidden shadow-md h-64"
          >
            <div className="relative w-full h-full group">
              <Image
                src={category.imgSrc}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-400 bg-opacity-40 text-white">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p>{category.items}</p>
                <p className="opacity-75">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCategories;
