
// Update this page (the content is just a fallback if you fail to update the page)

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown } from "lucide-react";

import Navbar from "@/components/navbar";
import ParticlesBackground from "@/components/particles-background";
import AnimatedButton from "@/components/animated-button";

// Import sections
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Simulating loading
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    // Check if document is loaded to enable reveal animations
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("revealed");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    
    // Trigger once on load
    setTimeout(revealOnScroll, 200);
    
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative section-padding"
      >
        <motion.div
          className="container mx-auto flex flex-col gap-6 items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ocean-400 to-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Herin Patel
          </motion.h1>

          <motion.div
            className="h-12 md:h-16 text-2xl md:text-3xl font-medium text-foreground/90 mb-8"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Computer Engineering Student",
                  "Web Developer",
                  "Software Engineer",
                  "Java Specialist",
                  "Content Creator"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ScrollLink to="projects" smooth={true} duration={800} offset={-100}>
              <AnimatedButton size="lg">View My Work</AnimatedButton>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-100}>
              <AnimatedButton variant="outline" size="lg">Get In Touch</AnimatedButton>
            </ScrollLink>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity }}
        >
          <ScrollLink to="about" smooth={true} duration={800} offset={-100} className="cursor-pointer">
            <ArrowDown className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
          </ScrollLink>
        </motion.div>

        <motion.div 
          className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </section>

      {/* Other sections */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
