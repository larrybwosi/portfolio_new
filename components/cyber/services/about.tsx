import { tripguide } from '@/assets';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2 pr-8">
          <Image 
            src={tripguide}
            alt="Person overlooking misty mountains" 
            className="rounded-lg shadow-lg w-2/3 ml-10"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-blue-500 text-sm font-semibold mb-2">
            • About Us
          </h3>
          <h2 className="text-3xl font-bold mb-4">
            We Are Offering The Best Photography Services For You
          </h2>
          <p className="text-gray-600 mb-6">
          Our passion for capturing life's moments drives us to deliver exceptional photography 
            services. From breathtaking landscapes to intimate portraits, we blend technical 
            expertise with artistic vision. Our team of skilled photographers is dedicated to 
            preserving your memories with creativity and precision, ensuring each image tells 
            a unique story. Whether it's a wedding, corporate event, or personal project, we're 
            committed to exceeding your expectations with stunning visuals that last a lifetime.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;