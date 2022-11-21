import React, { useState } from 'react';
import { services } from '../data';

const ServicesSlider = ({ slides }) => {
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
    <div id='gallery' className="w-full h-[60%] sm:h-auto">
      <div className='relative h-full flex justify-center items-center'>

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-500'
                : 'opacity-0'
            }
          >
              <img src="/images/icons/left-white.png"
                onClick={prevSlide}
                className="absolute rotate-90 sm:rotate-0 left-[45%] top-0 sm:top-[30%] sm:left-[30px] cursor-pointer select-none z-[2] h-[30px] sm:h-[50px]"
              />
              {index === current && (
                <div className='flex flex-col items-center text-white'>
                    <h1 className='serif uppercase text-3xl sm:text-4xl'>{slide.title}</h1>
                    <p className='serif italic text-xl sm:text-2xl text-center sm:w-[70%] w-[80%] pt-4'>{slide.desc}</p>
                </div>
              )}
               <img src="/images/icons/right-white.png"
                onClick={nextSlide}
                className="absolute rotate-90 sm:rotate-0 top-[90%] sm:top-[30%] right-[45%] sm:right-[30px] cursor-pointer select-none z-[2] h-[30px] sm:h-[50px]"
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default ServicesSlider;