import "./App.css";
import { useEffect, useState } from "react"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
      
      <motion.footer className="footer" initial={{ opacity: 0}} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p>&copy; Portfolio Web 2025. All rights reserved </p>
      </motion.footer>
      
    </div>
  )
}

export default App