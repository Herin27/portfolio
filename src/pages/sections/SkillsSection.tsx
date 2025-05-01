
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Element } from "react-scroll";

interface Skill {
  name: string;
  level: number;
  delay: number;
}

const webSkills: Skill[] = [
  { name: "HTML & CSS", level: 90, delay: 0 },
  { name: "JavaScript", level: 85, delay: 0.1 },
  { name: "Node.js", level: 80, delay: 0.2 },
  { name: "Express", level: 78, delay: 0.3 },
  { name: "MySQL", level: 82, delay: 0.4 },
];

const androidSkills: Skill[] = [
  { name: "Java", level: 88, delay: 0 },
  { name: "Firebase", level: 80, delay: 0.1 },
  { name: "Android Studio", level: 85, delay: 0.2 },
  { name: "UI/UX Design", level: 75, delay: 0.3 },
  { name: "XML Layout", level: 82, delay: 0.4 },
];

const otherSkills: Skill[] = [
  { name: "GlassFish", level: 75, delay: 0 },
  { name: "JSP & Servlets", level: 80, delay: 0.1 },
  { name: "Git & GitHub", level: 82, delay: 0.2 },
  { name: "Python", level: 70, delay: 0.3 },
  { name: "C++", level: 78, delay: 0.4 },
];

const SkillBar = ({ name, level, delay }: Skill) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-foreground/70">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ 
            "--progress-value": `${level}%`,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string, skills: Skill[] }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            name={skill.name} 
            level={skill.level} 
            delay={skill.delay} 
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Element name="skills">
      <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SkillCategory title="Web Development" skills={webSkills} />
            <SkillCategory title="Android Development" skills={androidSkills} />
            <SkillCategory title="Other Technologies" skills={otherSkills} />
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "VS Code", "Git", "GitHub", "Android Studio", "Firebase", 
                "MySQL", "Node.js", "Express", "Java", "Python",
                "GlassFish", "JSP", "Servlets", "JDBC", "C++",
                "HTML", "CSS", "JavaScript", "React", "Bootstrap"
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Services I Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Web Development",
                  description: "Full-stack websites using Node.js, Express, MySQL and modern frontend technologies."
                },
                {
                  title: "Android Development",
                  description: "Native Android applications with Java, Firebase integration and responsive UI design."
                },
                {
                  title: "Java Applications",
                  description: "Custom Java applications using JDBC, JSP, and servlet technologies."
                },
                {
                  title: "AI & Chatbot Integration",
                  description: "Smart AI integration and chatbot development for websites and applications."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 glass rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-xl font-medium mb-3">{service.title}</h4>
                  <p className="text-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default SkillsSection;
