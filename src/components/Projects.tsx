import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "SkillBuddy",
    subtitle: "Personalized Career Course Companion",
    description: "TYBCA Final Year Project featuring Firebase authentication, Firestore backend for user profiles, and responsive UI with clean form validation. Foundation for a full dashboard with course search, notes, study plans, and AI-based recommendations.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore"],
    github: "https://github.com/Aditi960/SkillBuddy",
    live: "https://skillbuddy0.netlify.app/",
    isLive: true,
    featured: true,
  },
  {
    title: "Restaurant Management System",
    subtitle: "C Programming Project",
    description: "Clean menu-driven billing system supporting Breakfast, Lunch, and Dinner ordering with quantity-based bill calculation. Features personalized greetings using customer name and gender. Simple CLI interface compiled using MinGW.",
    tech: ["C", "MinGW", "CLI"],
    github: "https://github.com/Aditi960/restaurant-management-system",
    live: null,
    isLive: false,
    featured: false,
  },
  {
    title: "Movie Data Analysis",
    subtitle: "Python EDA Project",
    description: "Cleaned, analyzed, and visualized movie dataset using pandas, NumPy, matplotlib, and seaborn. Identified trends like top genres, top-rated movies, and variable correlations. Features heatmaps, bar charts, and trend plots.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Aditi960/Movie-Data-Analysis",
    live: null,
    isLive: false,
    featured: false,
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "Responsive personal portfolio using HTML, CSS, and JavaScript. Implements interactive UI components and smooth animations. Highlights skills, certifications, and projects with a clean, accessible layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aditi960/Portfolio",
    live: "https://aditithakare.netlify.app/",
    isLive: true,
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading font-serif">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my journey from C programming to full-stack web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className={`project-card group ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className={`p-8 ${project.featured ? "md:flex md:gap-8 md:items-start" : ""}`}>
                  {/* Icon */}
                  <div className={`mb-6 ${project.featured ? "md:mb-0" : ""}`}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Folder className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.isLive && (
                            <span className="live-badge">
                              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-primary/80 font-medium text-sm">{project.subtitle}</p>
                      </div>
                      
                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
