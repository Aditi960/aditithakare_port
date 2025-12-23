import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Terminal, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "primary",
  },
  {
    title: "Backend (Learning)",
    icon: Server,
    skills: ["Node.js", "Express.js", "Firebase"],
    color: "accent",
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["C", "C++", "Java (DSA)", "Python", "SQL", "PHP", "R"],
    color: "secondary",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux Commands", "REST APIs", "Responsive Design"],
    color: "primary",
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    skills: ["Problem Solving", "Public Speaking", "Fast Learner", "Team Collaboration"],
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
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
            <h2 className="section-heading font-serif">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diverse skill set spanning front-end development, data structures, and emerging backend technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6 group hover:-translate-y-2 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    category.color === "primary" 
                      ? "bg-primary/10 group-hover:bg-primary/20" 
                      : category.color === "accent"
                      ? "bg-accent/10 group-hover:bg-accent/20"
                      : "bg-secondary/10 group-hover:bg-secondary/20"
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === "primary" 
                        ? "text-primary" 
                        : category.color === "accent"
                        ? "text-accent"
                        : "text-secondary"
                    }`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.3 
                      }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DSA + MERN Learning Path */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 glass-card p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Current Learning Path
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Actively strengthening my foundation in Data Structures & Algorithms while building towards full-stack MERN development
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* DSA */}
                <div className="md:text-right md:pr-8">
                  <div className="relative">
                    <div className="timeline-dot absolute right-0 md:-right-[calc(50%+0.5rem)] top-2 hidden md:block" />
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">Foundation</span>
                    <h4 className="text-xl font-serif font-bold mt-2 mb-3">Data Structures & Algorithms</h4>
                    <p className="text-muted-foreground text-sm">
                      Building strong problem-solving skills with Java. Practicing arrays, linked lists, trees, graphs, and dynamic programming.
                    </p>
                  </div>
                </div>
                
                {/* MERN */}
                <div className="md:pl-8">
                  <div className="relative">
                    <div className="timeline-dot absolute left-0 md:-left-[calc(50%+0.5rem)] top-2 hidden md:block" />
                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">In Progress</span>
                    <h4 className="text-xl font-serif font-bold mt-2 mb-3">MERN Stack</h4>
                    <p className="text-muted-foreground text-sm">
                      Learning MongoDB, Express.js, React, and Node.js to build full-stack applications with modern architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
