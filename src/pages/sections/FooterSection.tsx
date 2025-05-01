import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const FooterSection = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-ocean-300">
              Portfolio
            </h3>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Creative developer and designer passionate about crafting beautiful and functional digital experiences.
            </p>
            <a href="mailto:youremail@example.com" className="text-primary hover:text-primary/80 transition-colors">
              herin7151@gmail.com
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4 mb-6">
              {["LinkedIn", "Instagram", "Facebook", "GitHub", "Twitter"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-foreground/70">
              Available for freelance projects.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/70 text-center sm:text-left">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <motion.div 
            className="mt-4 sm:mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
