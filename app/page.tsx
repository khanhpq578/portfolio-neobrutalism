"use client";

import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { Cursor } from "../components/ui/Cursor";
import { ScrollProgress } from "../components/ui/ScrollProgress";
import { Nav } from "../components/Nav";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Journey } from "../components/sections/Journey";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useReveal();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--white",
      darkMode ? "#1a1a1a" : "#f5f0e8",
    );
    document.documentElement.style.setProperty(
      "--black",
      darkMode ? "#f5f0e8" : "#0a0a0a",
    );
  }, [darkMode]);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
