import Image from 'next/image';
import React, { useState } from 'react';
import { properties } from '../data';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className="w-[100vw] h-auto">
      <div className='relative flex justify-center'>

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-100'
                : 'opacity-0'
            }
          >
              <img src="/images/icons/left-white.png"
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] cursor-pointer select-none z-[2] h-[30px] sm:h-[60px] box-shadow-xl"
              />
              {index === current && (
                <img
                  src={slide.img}
                  alt='/'
                  className='w-[100vw] h-[60vh] sm:h-[100vh] object-cover overflow-hidden'
                />
              )}
               <img src="/images/icons/right-white.png"
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] cursor-pointer select-none z-[2] h-[30px] sm:h-[60px] box-shadow-xl"
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;