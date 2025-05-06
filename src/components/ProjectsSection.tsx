import { motion } from "framer-motion";
import { Link, Code } from "lucide-react";

const projects = [
  {
    title: "Vault-View",
    description:
      "VaultView empowers creators to share premium content exclusively with holders of specific NFTs or SPL tokens. It bridges the gap between Web3 ownership and creator monetization — no middlemen, no subscriptions, just access through ownership.",
    deployment: "https://vault-view.vercel.app/",
    code: "https://github.com/0xRajvardhan/VaultView",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Solana",
      "Web3",
      "Rust",
      "Anchor",
      "Metaplex",
      "PDAs",
      "Smart Contracts",
      "Token Programs",
      "Wallet Integration",
      "Arweave",
    ],
  },
  {
    title: "DePIN-Uptime",
    description:
      "Decentralized Physical Infrastructure Uptime Monitoring Tool — built to track and visualize the availability of distributed hardware nodes in real-time.",
    deployment: "https://github.com/0xRajvardhan/DePIN-Uptime",
    code: "https://github.com/0xRajvardhan/DePIN-Uptime",
    tags: [
      "TurboRepo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Web Sockets",
      "DePIN",
      "Web3",
      "Bun",
      "Next.js",
    ],
  },
  {
    title: "Elitespan",
    description:
      "Developed a full-stack doctor listing platform as a freelance project, completed within one week.",
    deployment: "https://elitespan-seven.vercel.app/",
    code: "https://github.com/0xRajvardhan/Elitespan",
    tags: [
      "JavaScript",
      "MERN",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "APIs",
      "Authentication",
      "Axios",
    ],
  },
  {
    title: "DaCircle",
    description:
      "Built a full-stack website for the Da Circle developer community — vibe coded it entirely under 30 minutes.",
    deployment:
      "https://www.loom.com/share/d9c91a0ac62844a8b24255bca663b846?sid=261b2f8d-563b-4830-8b0e-7e5ab08ceb59",
    code: "https://github.com/0xRajvardhan/DaCircle",
    tags: [
      "Next.js",
      "App Router",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "shadcn/ui",
      "Framer Motion",
      "React Hooks",
    ],
  },
  {
    title: "NeuroBotLabs",
    description:
      "Developed the official website for NeuroBot Labs, an AI and robotics startup. Designed to showcase their products, research, and mission with a modern, responsive UI.",
    deployment: "https://neuro-bot-labs.vercel.app/",
    code: "https://github.com/0xRajvardhan/NeuroBotLabs",
    tags: [
      "Vite",
      "TypeScript",
      "Tailwind",
      "React",
      "UI/UX",
      "Responsive Design",
    ],
  },
  {
    title: "Transaction-App",
    description:
      "A basic full-stack transactions application — a simplified version of PayTM with core features like user accounts, balance management, and money transfers.",
    deployment: "https://transaction-app-gules.vercel.app/signup",
    code: "https://github.com/0xRajvardhan/Transaction-App",
    tags: [
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Axios",
      "Authentication",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "React Router",
    ],
  },
  {
    title: "Untapped-Clone",
    description:
      "Pixel-perfect clone of the Untapped application, built during an internship to replicate UI/UX with precision and functionality.",
    deployment: "https://untapped-website.vercel.app/",
    code: "https://github.com/0xRajvardhan/Untapped-Clone",
    tags: ["Next.js", "Tailwind CSS", "Javscript", "Form-Validation"],
  },
  {
    title: "Topmate-Clone",
    description:
      "A functional clone of the Topmate application, built as part of an internship task.",
    deployment: "https://topmate-clone.vercel.app",
    code: "https://github.com/0xRajvardhan/Topmate-Clone",
    tags: ["JavaScript", "Tailwind CSS", "Vite", "React"],
  },
  {
    title: "Yootube",
    description:
      "Developed the Next.js frontend for a video streaming platform, focusing on responsive design, smooth user experience, and efficient video delivery.",
    deployment: "https://yoootube.vercel.app/",
    code: "https://github.com/0xRajvardhan/Yootube",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Cloudinary",
      "Axios",
      "MongoDB",
      "Mongoose",
      "Zod",
    ],
  },
  {
    title: "Authentication-with-Supabase",
    description: "A project demonstrating authentication using Supabase.",
    deployment: "https://supa-auth-sand.vercel.app/",
    code: "https://github.com/0xRajvardhan/Authentication-with-Supabase",
    tags: ["Supabase", "Authentication", "SolidJS", "JavaScript", "Tailwind"],
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
              <a
                href={project.deployment}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Link className="w-5 h-5" />
              </a>
              <a
                href={project.code}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
