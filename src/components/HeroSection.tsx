
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
      >
        A passionate developer transforming concepts into code.
      </motion.p>
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
