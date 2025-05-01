
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Element } from "react-scroll";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, user authentication, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    id: 2,
    title: "Travel App Design",
    category: "UI/UX Design",
    description: "A travel app design focused on user experience, with features for booking flights, hotels, and exploring destinations. Designed with Figma and Adobe XD.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    link: "#"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    category: "Web Development",
    description: "A financial dashboard for tracking investments, expenses, and financial goals. Built with React, TypeScript, and D3.js for data visualization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media App",
    category: "Mobile Development",
    description: "A social media application for connecting professionals in the tech industry. Built with React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Redux", "Mobile"],
    link: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Development",
    description: "A personal portfolio website showcasing projects and skills. Built with React, Framer Motion for animations, and Tailwind CSS for styling.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Portfolio"],
    link: "#"
  },
  {
    id: 6,
    title: "Restaurant Booking System",
    category: "Web Development",
    description: "A restaurant reservation system with real-time availability, table management, and customer notifications. Built with Next.js and Firebase.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    link: "#"
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Development"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Element name="projects">
      <section id="projects" className="section-padding" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          {/* Filter Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 flex items-end transition-opacity duration-300">
                      <div className="p-4 w-full">
                        <p className="text-sm font-medium text-primary">{project.category}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-background/20 backdrop-blur-sm rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 line-clamp-2">
                      {project.description}
                    </p>
                    <button 
                      className="mt-4 text-primary font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-72 sm:h-96">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                    <p className="text-foreground/80 mb-6 text-lg">
                      {selectedProject.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Element>
  );
};

export default ProjectsSection;
