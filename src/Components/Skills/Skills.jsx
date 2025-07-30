import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {

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
        threshold: 0.5,
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
        className={`h-screen flex justify-center items-center bg-white dark:bg-black font-inter transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='flex flex-col items-center text-center'>
  <p className="font-extrabold lg:text-5xl text-3xl text-black dark:text-white text-center">COMPETÊNCIAS</p>

  {/* Linha 1 */}
  <div className='grid md:grid-cols-4 grid-cols-2 mt-5 gap-4'>
    <div className='flex items-center space-x-2'>
      <i className="devicon-html5-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>HTML</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-css3-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>CSS</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-bootstrap-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Bootstrap</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-tailwindcss-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Tailwind CSS</p>
    </div>
  </div>

  <div className='h-[0.5px] dark:bg-white bg-black w-96 my-5'></div>

  {/* Linha 2 */}
  <div className='grid md:grid-cols-4 grid-cols-2 gap-10 mt-5'>
    <div className='flex items-center space-x-2'>
      <i className="devicon-javascript-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>JavaScript</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-typescript-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>TypeScript</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-react-original text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>React</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-nodejs-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Node JS</p>
    </div>
  </div>

  <div className='h-[0.5px] dark:bg-white bg-black w-96 my-5'></div>

  {/* Linha 3 */}
  <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mt-5'>
    <div className='flex items-center space-x-2'>
      <i className="devicon-java-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Java</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-python-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Python</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-git-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Git & GitHub</p>
    </div>
    <div className='flex items-center space-x-2 ml-6'>
      <i className="devicon-docker-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Docker</p>
    </div>
  </div>

  <div className='h-[0.5px] dark:bg-white bg-black w-96 my-5'></div>

  {/* Linha 4 */}
  <div className='grid md:grid-cols-4 grid-cols-2 space-x-16 mt-5'>
    <div className='flex items-center space-x-2 pl-12'>
      <i className="devicon-mongodb-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>NoSQL</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-mysql-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>SQL</p>
    </div>
    <div className='flex items-center space-x-2 pr-16'>
      <i className="devicon-figma-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>Figma</p>
    </div>
    <div className='flex items-center space-x-2'>
      <i className="devicon-prisma-plain text-3xl filter dark:invert dark:brightness-200"></i>
      <p className='font-extralight text-2xl text-black dark:text-white'>ORM</p>
    </div>
  </div>

  <div className='h-[0.5px] dark:bg-white bg-black w-96 my-5'></div>  
</div>

        
      </div>
    )
}

export default Skills