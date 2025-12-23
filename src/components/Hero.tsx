import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Download, Mail, ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-secondary/10 blur-[80px] animate-float" style={{ animationDelay: "-5s" }} />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Available for Internship</span>
          </motion.div>
          
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-gold">Aditi</span>
          </motion.h1>
          
          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-8 h-12"
          >
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "DSA Enthusiast",
                  "MERN Aspirant",
                  "Full-Stack Intern Candidate",
                  "UI/UX Passionate",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
              }}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Third-year BCA student building responsive, accessible web experiences with 
            <span className="text-primary font-medium"> React</span>, 
            <span className="text-primary font-medium"> JavaScript</span>, and 
            <span className="text-primary font-medium"> Firebase</span>. 
            Strong DSA foundations & a passion for clean code.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="mailto:aditithakare02@gmail.com"
              className="btn-hero-primary group"
              aria-label="Send email to hire Aditi"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Hire Me
            </a>
            
            <button
              onClick={scrollToProjects}
              className="btn-hero-secondary group"
              aria-label="View projects section"
            >
              <span>View Projects</span>
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a
              href="/Aditi_Thakare_Resume.pdf"
              download="Aditi_Thakare_Resume.pdf"
              className="btn-hero-secondary group"
              aria-label="Download resume PDF"
            >
              <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>
          
          {/* Secondary CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            href="https://skillbuddy0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="View SkillBuddy live demo"
          >
            <span className="text-sm font-medium">Check out SkillBuddy Demo</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
