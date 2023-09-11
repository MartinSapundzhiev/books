import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1523689094115-65c863cf262d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHR5cGUlMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Lobster',
    },
    {
      url: 'https://images.unsplash.com/photo-1541523315198-a00415d424f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHR5cGUlMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Sushi',
    },
    {
      url: 'https://images.unsplash.com/photo-1605287875406-39d1b7861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHR5cGUlMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Pasta',
    },
    {
      url: 'https://images.unsplash.com/photo-1526824663004-1c37719e5686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHR5cGUlMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'Salmon',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={`max-w-[1400px] h-[280px] w-full m-auto mt-${window.innerHeight < 920 ? '4' : '[-150px]'} px-4 relative group  mt-[-100px]`}>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;