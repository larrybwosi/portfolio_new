"use client";
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { MotionButton, MotionDiv } from '../motion';

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(/^\+1 \(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number'),
  message: z.string().min(1, 'Message is required'),
  agreeToPolicy: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MotionDiv 
      ref={ref}
      className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <MotionDiv 
        className="w-full lg:w-1/2 p-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">We'd love to help</h2>
        <p className="text-gray-600 mb-8">We're a full service agency with experts ready to help. We'll get in touch within 24 hours.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First name"
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input
                {...register('lastName')}
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last name"
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@company.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <input
              {...register('phoneNumber')}
              type="tel"
              id="phoneNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+254 700 000-0000"
            />
            {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Leave us a message..."
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
          </div>
          
          <div>
            <label className="flex items-center">
              <input
                {...register('agreeToPolicy')}
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">You agree to our friendly privacy policy.</span>
            </label>
            {errors.agreeToPolicy && <p className="mt-1 text-xs text-red-500">{errors.agreeToPolicy.message}</p>}
          </div>
          
          <MotionButton
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </MotionButton>
        </form>
      </MotionDiv>
      
      <MotionDiv 
        className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white flex flex-col justify-center"
        variants={itemVariants}
      >
        <div className="mb-8">
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              layout="fill"
              objectFit="cover"
              alt="Customer Service"
              className="rounded-lg h-[300px]"
            />
          </div>
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-sm mb-4 italic">"Untitled UI is the real deal. We've worked with a dozen agencies that simply don't deliver. Working with experienced and knowledgeable professionals at the helm is a breath of fresh air."</p>
          <p className="font-bold">Ellie Simpson</p>
          <p className="text-sm text-gray-300">Head of Design, Sisyphus Labs</p>
        </div>
        <div className="flex justify-between">
          <button className="text-white hover:text-gray-300 transition duration-300">&larr;</button>
          <button className="text-white hover:text-gray-300 transition duration-300">&rarr;</button>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ContactForm;