import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NewArrivals = () => {
  const items = [
    { imgSrc: '/first.jpg', title: 'Floral Pattern', price: 'IDR 1,200,000' },
    { imgSrc: '/second.jpg', title: 'Geometric Design', price: 'IDR 1,500,000' },
    { imgSrc: '/third.jpg', title: 'Modern Abstract', price: 'IDR 1,100,000' },
    { imgSrc: '/fourth.jpg', title: 'Vintage Classic', price: 'IDR 1,300,000' },
    { imgSrc: '/fifth.jpg', title: 'Minimalist Style', price: 'IDR 1,400,000' },
    { imgSrc: '/first.jpg', title: 'Floral Pattern', price: 'IDR 1,200,000' },
    { imgSrc: '/second.jpg', title: 'Geometric Design', price: 'IDR 1,500,000' },
    { imgSrc: '/third.jpg', title: 'Modern Abstract', price: 'IDR 1,100,000' },
    { imgSrc: '/fourth.jpg', title: 'Vintage Classic', price: 'IDR 1,300,000' },
    { imgSrc: '/fifth.jpg', title: 'Minimalist Style', price: 'IDR 1,400,000' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage));
  };

  return (
    <div className="bg-white py-12 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Various New Wallpapers Just Arrived at Home Decor
      </h2>
      <div className="relative flex items-center justify-center">
        <button 
          onClick={handlePrev}
          className="absolute left-0 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none z-10"
        >
          <FaArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex overflow-x-hidden space-x-4 px-8 py-4">
          {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center bg-white overflow-hidden w-60 rounded-lg shadow-md">
              <div className="relative w-full h-64 group">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="absolute right-0 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none z-10"
        >
          <FaArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
