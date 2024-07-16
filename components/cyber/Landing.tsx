"use client";
import Image from "next/image";
import { MotionButton, MotionDiv, MotionH1, MotionLi, MotionP, MotionSection, MotionUl } from "../motion";

export default function Landing() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20 overflow-hidden">
      {/* left section */}
      <MotionSection
        className="flex-1 max-w-2xl mb-10 md:mb-0 md:mr-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      > 
        <MotionH1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Experience the Future of Digital Connectivity
        </MotionH1>
        <MotionP 
          className="text-lg md:text-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At [Company Name] Cyber Cafe, we offer:
        </MotionP>
        <MotionUl 
          className="list-none text-white mb-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            "High-speed internet access for seamless browsing",
            "State-of-the-art computer systems with latest software",
            "Comfortable workspaces designed for productivity",
            "Printing, scanning, and other business services",
            "Expert tech support to assist with any issues"
          ].map((item, index) => (
            <MotionLi 
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>{item}</span>
            </MotionLi>
          ))}
        </MotionUl>
        <MotionButton 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Us Today
        </MotionButton>
      </MotionSection>

      {/* right section */}
      <MotionSection
        className="flex-1 w-full max-w-2xl relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MotionDiv 
          className="absolute inset-0 bg-blue-300 rounded-2xl transform rotate-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        <MotionDiv 
          className="rounded-2xl overflow-hidden shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Image 
            src="/cyber_landing.png" 
            alt="Modern Cyber Cafe Interior" 
            className="w-full h-auto object-cover"
            width={600}
            height={400}
          />
        </MotionDiv>
      </MotionSection>
    </section>
  )
}