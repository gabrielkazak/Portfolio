import React, { useEffect, useRef, useState } from 'react'
import profile from '../../assets/profile.png'

const About = () => {
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
      className={`h-screen flex flex-col items-center justify-center dark:bg-black bg-white font-inter transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="font-bold lg:text-6xl text-4xl dark:text-white text-black text-center">
          SOBRE
        </p>
      <div className='grid md:grid-cols-2 grid-cols-1] items-center text-center mt-10'>
          <img className='ml-auto mr-auto size-80 md:size-96' src={profile} alt="" />
          <p className='dark:text-gray-300 text-gray-700 text-[18px] sm:text-[24px] font-light mt-4 md:px-10 px-20 text-left'>
            Desde julho de 2023 venho estudando Programação e construindo minha transição de carreira para a área de tecnologia. Foi no Desenvolvimento Web que encontrei uma área que realmente me empolga — adoro o desafio de transformar ideias em código! Aprendo principalmente com a documentação oficial, vídeo-aulas no YouTube e também concluí um curso técnico na área. Agora, meu foco é seguir evoluindo, aprender novas tecnologias e começar a me aventurar no mundo do machine learning.
          </p>
      </div>
    </div>
  )
}

export default About
