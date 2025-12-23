import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aditi Thakare | Web Developer | Front-End & Full-Stack</title>
        <meta 
          name="description" 
          content="Third-year BCA student skilled in front-end and full-stack development. Building responsive, accessible web experiences with React, JavaScript, and Firebase. Looking for internship opportunities." 
        />
        <meta name="keywords" content="Aditi Thakare, Web Developer, Front-End Developer, React, JavaScript, Full-Stack, Pune, BCA Student, Internship" />
        <meta property="og:title" content="Aditi Thakare | Web Developer Portfolio" />
        <meta property="og:description" content="Third-year BCA student building responsive web experiences with React, JavaScript, and Firebase." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditi Thakare | Web Developer Portfolio" />
        <meta name="twitter:description" content="Third-year BCA student building responsive web experiences with React, JavaScript, and Firebase." />
        <link rel="canonical" href="https://aditithakare.netlify.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aditi Thakare",
            "url": "https://aditithakare.netlify.app/",
            "jobTitle": "Web Developer",
            "sameAs": [
              "https://github.com/Aditi960",
              "https://www.linkedin.com/in/aditi-thakare-9aa5831b0/"
            ],
            "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Firebase", "Data Structures"]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
