import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmissionStatus('submitting');

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div ref={elementRef} className={`h-screen w-full flex flex-col bg-white dark:bg-black items-center justify-center relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-5xl font-bold mb-6 text-center text-black dark:text-white">CONTATO</h2>
      <form data-vercel-form onSubmit={handleSubmit}>
        <div className="mb-4 lg:w-[800px] md:w-[550px] w-[300px]">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-full transition-colors duration-500 bg-white focus:bg-black border border-black focus:text-white dark:bg-black dark:border-white dark:focus:bg-white focus:outline-none focus:border-blue-500 dark:focus:text-black"
          />
        </div>

        <div className="mb-4 lg:w-[800px] md:w-[550px] w-[300px]">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded-full transition-colors duration-500 bg-white focus:bg-black border border-black focus:text-white dark:bg-black dark:border-white dark:focus:bg-white focus:outline-none focus:border-blue-500 dark:focus:text-black"
          />
        </div>

        <div className="mb-6 lg:w-[800px] md:w-[550px] w-[300px]">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md transition-colors duration-500 bg-white focus:bg-black border border-black focus:text-white dark:bg-black dark:border-white dark:focus:bg-white focus:outline-none focus:border-blue-500 dark:focus:text-black resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-black dark:text-black dark:bg-white hover:bg-gray-600  font-bold py-3 px-4 rounded-md transition duration-200"
          disabled={submissionStatus === 'submitting'}
        >
          {submissionStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {submissionStatus === 'success' && (
          <p className="mt-4 text-green-400 text-center">Mensagem enviada com sucesso!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="mt-4 text-red-400 text-center">Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.</p>
        )}
      </form>
      <div className='flex flex-col mt-20 mb-0'>
        <p className='text-center text-gray-600'>© 2025 Gabriel Kazakevicius.</p>
        <p className='text-center text-gray-600'>Todos os Direitos Reservados</p>
      </div>
    </div>
  );
};

export default Contact;