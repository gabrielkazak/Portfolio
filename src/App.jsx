import React, { useEffect, useState } from 'react'
import Welcome from './Components/Welcome/Welcome'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import './App.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-sm px-4 py-2 rounded shadow"
    >
      {isDark ? "🌙" : "☀️  "}
    </button>
  );
}

const App = () => {
  return (
    <>
      <ThemeToggle />
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
