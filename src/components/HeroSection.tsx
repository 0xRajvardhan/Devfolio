import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    fill="currentColor"
    className="w-5 h-4"
  >
    <path d="M1036 0H1227L756 539L1227 1227H852L549 801L197 1227H0L492 648L49 0H435L708 387L1036 0ZM969 1122H1073L299 104H191L969 1122Z" />
  </svg>
);

export const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.h1 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Hey, I'm Rajvardhan
      </motion.h1>
      <motion.p
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6"
      >
        A passionate developer transforming concepts into code.
      </motion.p>

      {/* Social Links */}
      <div className="flex gap-4 mb-4">
        <a 
          href="https://github.com/0xRajvardhan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://twitter.com/rajvardhansd" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="X"
          className="rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <XIcon />
        </a>
      </div>

      {/* Download CV Button */}
      <a 
        href="/rajvardhan_singh.pdf"
        download
        className="border border-gray-300 dark:border-gray-700 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mb-12"
      >
        Download CV
      </a>

      {/* Down Arrow Animation */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, repeat: Infinity, duration: 2 }}
        className="animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </motion.section>
  );
};
