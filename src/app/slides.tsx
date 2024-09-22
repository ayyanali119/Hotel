"use client"; // Ensures it's a client-side component

import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/path/to/your/image1.jpg', // Replace with actual image paths
    text: 'Slide 1 Text',
  },
  {
    image: '/path/to/your/image2.jpg',
    text: 'Slide 2 Text',
  },
  {
    image: '/path/to/your/image3.jpg',
    text: 'Slide 3 Text',
  },
];

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-4xl md:text-6xl">{slide.text}</h2>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
