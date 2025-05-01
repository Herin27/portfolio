
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full p-0 h-10 w-10 bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-foreground" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
