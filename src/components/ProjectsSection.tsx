
import { motion } from "framer-motion";
import { Link, Code } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    link: "#",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Full-stack application with real-time features",
    link: "#",
    tags: ["Next.js", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Project Three",
    description: "E-commerce platform with seamless checkout",
    link: "#",
    tags: ["React", "Node.js", "Stripe"],
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-accent/10 rounded-lg p-6 hover:bg-accent/20 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                <Link className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
