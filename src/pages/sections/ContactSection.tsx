
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Element } from "react-scroll";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedButton from "@/components/animated-button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thanks for contacting. I'll get back to you soon."
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Element name="contact">
      <section id="contact" className="section-padding" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Whether you have a project in mind or just want to say hello, I'd love to hear from you. Feel free to reach out using the contact form or through any of the provided contact methods.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Mail me at</p>
                    <p className="font-medium">herin7151@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Call me at</p>
                    <p className="font-medium">+91 90238 97448</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p className="font-medium">Visnager, Gujrat, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/herin-patel-5a6b3b30a/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div>
                    <AnimatedButton 
                      type="submit" 
                      className="w-full py-3"
                      isLoading={isSubmitting}
                    >
                      Send Message
                    </AnimatedButton>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactSection;
