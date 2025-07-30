import React, { useEffect, useRef, useState } from 'react'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Welcome = () => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.8,
      }
    );
  
    observer.observe(currentElement);
  
    return () => {
      observer.unobserve(currentElement);
    };
  }, []);


  return (
    <div
      ref={elementRef}
      className={`h-screen flex justify-center items-center dark:bg-black bg-white font-inter transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-col items-center text-center'>
       <p className="font-bold lg:text-6xl text-4xl dark:text-white text-black overflow-hidden whitespace-nowrap animate-typewriter">
          GABRIEL<br />KAZAKEVICIUS
        </p>
        <div className='relative'>
          <p className='dark:text-gray-300 text-gray-700 text-[18px] sm:text-[24px] font-light mt-4 overflow-hidden whitespace-nowrap animate-typewriter w-[24ch]'>
            DESENVOLVEDOR DE SOFTWARE
          </p>
        </div>
        <div className='flex space-x-4 mt-4'>
          <a href="https://github.com/gabrielkazak"><img className='size-12 bg-black rounded-full dark:bg-none' src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/gabriel-kazakevicius"><img className='size-12 bg-black rounded-full dark:bg-none' src={linkedin} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Welcome
