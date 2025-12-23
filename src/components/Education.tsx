import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const certifications = [
  {
    title: "AWS Cloud Certification",
    issuer: "GreatLearning",
    year: "2023",
  },
  {
    title: "Introduction to Golang",
    issuer: "SkillUp",
    year: "2023",
  },
  {
    title: "Project Management",
    issuer: "SkillUp",
    year: "2023",
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

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading font-serif">Education & Certifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic background and professional certifications demonstrating continuous learning
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div variants={itemVariants} className="glass-card p-8 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-primary font-medium">BCA</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Haribhai V. Desai College of Arts, Science and Commerce, Pune</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">April 2023 – April 2026</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Web Development", "Data Structures", "Cloud Computing", "Operating Systems", "AI"].map((course) => (
                    <span key={course} className="skill-badge text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="mt-8 glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">Languages</h3>
                <p className="text-muted-foreground text-sm">Multilingual communication abilities</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["English", "Hindi", "Marathi", "Japanese (Beginner)"].map((lang) => (
                  <span 
                    key={lang} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-muted-foreground border border-border/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
