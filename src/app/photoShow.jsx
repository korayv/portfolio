import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import mecoffee from "./images/mecoffee.jpg";
import me from "./images/meart.jpg";
import Image from 'next/image';
const sliderData = [
  {
    id: 1,
    image: mecoffee,
    alt: 'Image 1',
  },
  {
    id: 2,
    image: me,
    alt: 'Image 2',
  },
  {
    id: 3,
    image: mecoffee,
    alt: 'Image 3',
  },  
  {
    id: 4,
    image: me,
    alt: 'Image 4',
  },
  {
    id: 5,
    image: mecoffee,
    alt: 'Image 5',
  },
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex => (currentIndex - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className="relative mt-20 max-w-4xl mx-auto">
      <div className="flex justify-center items-center">
        {sliderData.map((slide, index) => (
          <div
            className={`absolute duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            key={slide.id}
          >
            {index === currentIndex && (
              <Image src={slide.image} alt={slide.alt} layout="fill" objectFit="cover" />
              )}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default AutoSlider;
