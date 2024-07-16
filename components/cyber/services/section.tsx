import React from 'react';
import Image from 'next/image';

interface ServicesProps {
  sectionName: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  reverse?: boolean;
  imagePosition?: 'left' | 'right'; // New prop for image position
}

const Services = ({
  sectionName,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  reverse = false,
  imagePosition = 'left', // Set default position
}: ServicesProps) => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div
        className={`container mx-auto px-4 flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center`}
      >
        <div
          className={`w-full md:w-1/2 mb-8 md:mb-0 ${
            imagePosition === 'left' ? '' : 'md:order-2'
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-pink-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 mt-10 ml-10"/>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="relative rounded-lg shadow-lg w-full md:w-5/6 mx-auto transform transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className={`w-full md:w-1/2 ${reverse ? 'md:pr-8' : 'md:pl-8'}`}>
          <h3 className="text-blue-500 text-sm font-semibold mb-2 transform transition duration-500 hover:translate-x-2">
            • {sectionName}
          </h3>
          <h2 className="text-3xl font-bold mb-4 transform transition duration-500 hover:translate-x-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-6 transform transition duration-500 hover:translate-y-1">
            {description}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
