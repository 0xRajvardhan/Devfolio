
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        I'm always interested in hearing about new projects and opportunities.
        Whether you have a question or just want to say hi, I'll try my best
        to get back to you!
      </p>
      <motion.a
        href="mailto:singhrajvardhan2003@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Mail className="w-5 h-5" />
        Say Hello
      </motion.a>
    </motion.section>
  );
};
