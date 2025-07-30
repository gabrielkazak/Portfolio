import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
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
    className={`h-screen w-full flex flex-col bg-white dark:bg-black items-center justify-center relative transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <h2 className="text-5xl font-bold mb-6 text-center text-black dark:text-white">
      CONTATO
    </h2>

    <div className="flex items-center space-x-2 mb-2">
      <i className="devicon-google-plain text-[16px] sm:text-3xl filter dark:invert dark:brightness-200"></i>
      <p className="font-extralight text-[16px] sm:text-3xl text-black dark:text-white">
        gabriel.kazak@gmail.com
      </p>
    </div>

    <div className="flex items-center space-x-2 mb-2">
      <i className="devicon-linkedin-plain text-[16px] sm:text-3xl filter dark:invert dark:brightness-200"></i>
      <a href='https://www.linkedin.com/in/gabriel-kazakevicius' className="font-extralight text-[16px] sm:text-3xl text-black dark:text-white">
      linkedin.com/in/gabriel-kazakevicius
      </a>
    </div>

    <div className="flex items-center space-x-2 mb-2">
      <i className="devicon-github-original text-[16px] sm:text-3xl filter dark:invert dark:brightness-200"></i>
      <a href='https://github.com/gabrielkazak' className="font-extralight text-[16px] sm:text-3xl text-black dark:text-white">
      github.com/gabrielkazak
      </a>
    </div>

    <div className="flex flex-col fixed bottom-4 text-sm">
      <p className="text-center text-gray-600">© 2025 Gabriel Kazakevicius.</p>
      <p className="text-center text-gray-600">Todos os Direitos Reservados</p>
    </div>
  </div>
);

};

export default Contact;