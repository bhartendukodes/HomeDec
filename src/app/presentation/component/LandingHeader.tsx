import React from 'react';
import Image from 'next/image';
import Logo from './HomeDec';

const LandingHeader = () => {
  return (
    <main className="flex flex-col items-center justify-between bg-white font-open-sans">
      <section className="flex flex-col md:flex-row w-full max-w-full items-stretch justify-between text-sm mt-0 bg-white flex-grow">
        <div className="flex-1 w-full md:w-1/2 p-8 flex flex-col items-center justify-start md:justify-center bg-white h-auto md:h-[600px]">
          <div className="w-full ">
            <Logo />
          </div>
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0 h-full">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">
              A Variety of Furniture Available Here A Variety of Furniture
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Here, you can find all the furniture that is perfect for you! Here, you can find all the furniture that is perfect for you! Here, you can find all the furniture that is perfect for you!
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white text-lg py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Explore Here
            </a>
          </div>
        </div>
        <div className="relative flex-1 w-full md:w-1/2 h-[300px] md:h-auto bg-white hidden md:block">
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <Image
              src="./banner.png"
              alt="Furniture"
              layout="fill"
              objectFit="contain"
              objectPosition="top right"
              className="rounded-none"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingHeader;
