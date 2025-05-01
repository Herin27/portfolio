
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Element } from "react-scroll";
import { Code, Database, Smartphone, Youtube, Coffee, Cpu } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Element name="about">
      <section id="about" className="section-padding bg-secondary/30" ref={ref}>
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/uploads/3c86f177-da12-445f-a01e-f3547d9aea7a.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ocean-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold mb-4">Computer Engineering Student & Developer</h3>
              <p className="text-lg mb-6 text-foreground/80">
                I'm Herin Patel, a passionate and driven Computer Engineering student currently in my 5th semester at Ganpat University. I specialize in Web Development, Android App Development, and Advanced Java.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Beyond code, I'm also a creative mind. I run two YouTube channels—Story World (sharing Hindi stories) and Astroadvancher, where I blend humor with space facts to make learning fun. I'm deeply fascinated by space and love using tech to bring complex concepts to life for everyone.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-medium text-lg mb-1">Name:</p>
                  <p className="text-foreground/80">Herin Patel</p>
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Email:</p>
                  <p className="text-foreground/80">herin7151@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">University:</p>
                  <p className="text-foreground/80">Ganpat University</p>
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Availability:</p>
                  <p className="text-foreground/80">Available for projects</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expertise Areas */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="h-8 w-8 text-primary" />,
                  title: "Web Development",
                  description: "Building responsive websites using HTML, CSS, JavaScript, Node.js, Express, and MySQL."
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-primary" />,
                  title: "Android Development",
                  description: "Creating intuitive mobile apps with Java, Firebase, and strong UI/UX design principles."
                },
                {
                  icon: <Coffee className="h-8 w-8 text-primary" />,
                  title: "Java Programming",
                  description: "Developing applications using JDBC, JSP, Servlets, and GlassFish server."
                },
                {
                  icon: <Database className="h-8 w-8 text-primary" />,
                  title: "Database Management",
                  description: "Working with MySQL and Firebase for efficient data storage and retrieval."
                },
                {
                  icon: <Youtube className="h-8 w-8 text-primary" />,
                  title: "Content Creation",
                  description: "Running two YouTube channels - Story World and Astroadvancher, making space concepts accessible."
                },
                {
                  icon: <Cpu className="h-8 w-8 text-primary" />,
                  title: "Software Engineering",
                  description: "Designing and developing robust software applications with focus on clean code and performance."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 glass rounded-xl hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="mt-20 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">Experience & Education</h3>
            
            <div className="relative border-l-2 border-primary pl-8 ml-4">
              {[
                {
                  year: "2022 - Present",
                  title: "Computer Engineering",
                  company: "Ganpat University",
                  description: "Currently in 5th semester, focusing on software development, database management, and mobile application development."
                },
                {
                  year: "2024",
                  title: "Smart India Hackathon Participant",
                  company: "SIH 2024",
                  description: "Developed smart agriculture and police inventory applications as part of national-level hackathon."
                },
                {
                  year: "2023 - Present",
                  title: "Web Developer & Software Engineer",
                  company: "Freelance",
                  description: "Developing websites, applications, and software solutions for various clients and personal projects."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                >
                  <div className="absolute -left-[40px] w-5 h-5 bg-primary rounded-full border-4 border-background"></div>
                  <span className="text-sm font-medium text-primary/90 mb-1 block">{item.year}</span>
                  <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                  <p className="text-foreground/70 font-medium mb-2">{item.company}</p>
                  <p className="text-foreground/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
