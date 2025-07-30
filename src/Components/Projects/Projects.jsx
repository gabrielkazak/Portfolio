import React, { useState, useEffect, useRef } from 'react';
import pacman from '../../assets/pacman.png';
import controller from '../../assets/controle.png';
import github from '../../assets/github-3d.png';

const Projects = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
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
    <div ref={elementRef} className={`transition-opacity duration-1000 h-screen flex flex-col bg-white dark:bg-black md:items-center justify-center relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <p className="font-extrabold lg:text-5xl text-3xl dark:text-white text-black text-center">PROJETOS</p>

      <div className={`fixed inset-0 z-40 dark:bg-black bg-white transition-opacity duration-300 pointer-events-none ${hoveredCardIndex !== null ? 'opacity-60' : 'opacity-0'}`}></div>

      <div className='mt-10 relative md:grid md:grid-cols-3 md:space-x-4 flex overflow-x-auto lg:overflow-visible flex-nowrap gap-4 px-4'>
        <div
          className='group hover:scale-150 hover:z-40 transition cursor-pointer duration-1000 ease-in-out relative min-w-[240px] h-80 p-4 dark:bg-white bg-black flex flex-col justify-between overflow-hidden'
          onMouseEnter={() => setHoveredCardIndex(0)}
          onMouseLeave={() => setHoveredCardIndex(null)}
          onClick={() => window.location.href = 'https://pacscript.vercel.app'}
        >
          <div>
            <p className='font-bold text-gray-500'>Jogo Educacional</p>
            <p className='font-bold text-3xl text-white dark:text-black'>Pac-Script</p>
          </div>
          <img
            className='group-hover:hidden absolute bottom-5 left-1/2 -translate-x-1/2 w-8/12 z-0'
            src={pacman}
            alt=""
          />
          <div className='hidden md:group-hover:flex justify-center space-x-5'>
            <p className='text-[8px] rounded-sm dark:bg-black dark:text-white p-1 bg-white text-black'>JavaScript</p>
            <p className='text-[8px] rounded-sm dark:bg-black dark:text-white p-1 bg-white text-black'>Inteligência Artificial</p>
          </div>
          <p className='hidden md:group-hover:block w-[200px] pl-3 text-white dark:text-black'>Ferramenta educacional interativa para auxiliar no aprendizado de lógica de programação integrando desafios visuais e práticos inspirados no Pac-Man.</p>
        </div>

        <div
          className='group hover:scale-150 hover:z-40 transition cursor-pointer duration-1000 ease-in-out relative min-w-[240px] h-80 p-4 dark:bg-white bg-black flex flex-col justify-between overflow-hidden'
          onMouseEnter={() => setHoveredCardIndex(1)}
          onMouseLeave={() => setHoveredCardIndex(null)}
          onClick={() => window.location.href = 'https://gameboxd-frontend.vercel.app'}
        >
          <div>
            <p className='font-bold text-gray-500'>Catálogo de Jogos</p>
            <p className='font-bold text-3xl text-white dark:text-black'>Gameboxd</p>
          </div>
          <img
            className='group-hover:hidden absolute top-24 left-1/2 -translate-x-1/2 w-75 z-0'
            src={controller}
            alt=""
          />
          <div className='hidden md:group-hover:flex justify-center space-x-5'>
            <p className='text-[8px] rounded-sm dark:bg-black dark:text-white p-1 bg-white text-black'>NodeJS</p>
            <p className='text-[8px] rounded-sm dark:bg-black dark:text-white p-1 bg-white text-black'>React</p>
            <p className='text-[8px] rounded-sm dark:bg-black dark:text-white p-1 bg-white text-black'>PostgreSQL</p>
          </div>
          <p className='hidden md:group-hover:block w-[200px] pl-3 text-white dark:text-black'>Catálogo de jogos digitais, utilizando API externa, onde o usuário pode fazer registros sobre seus jogos favoritos e planejar as próximas jogatinas.</p>
        </div>

        <div
          className='group hover:scale-150 hover:z-40 transition cursor-pointer duration-1000 ease-in-out relative min-w-[240px] h-80 p-4 dark:bg-white bg-black flex flex-col justify-between overflow-hidden'
          onMouseEnter={() => setHoveredCardIndex(2)}
          onMouseLeave={() => setHoveredCardIndex(null)}
          onClick={() => window.location.href = 'https://github.com/gabrielkazak'}
        >
          
          <div>
            <p className='font-bold text-gray-500'>E muito mais</p>
            <p className='font-bold text-3xl text-white dark:text-black'>Github</p>
          </div>
          <img
            className='group-hover:hidden absolute top-24 left-1/2 -translate-x-1/2 w-75 z-0'
            src={github}
            alt=""
          />
          <p className='hidden md:group-hover:block w-[200px] pl-3 text-white dark:text-black'>Mais de 20 repositórios com os mais variados conteúdos. Jogos digitais, sites responsivos com consumo de APIs, servidores Backend, entre outros.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;