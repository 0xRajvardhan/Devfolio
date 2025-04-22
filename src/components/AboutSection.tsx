
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-muted-foreground">
          From curiosity to code — I'm a web developer driven by a love for clean design and seamless user experiences. I turn ideas into elegant, functional websites and applications.
          </p>
          <p className="text-muted-foreground">
          I build fast, scalable applications using modern web stacks and the Solana blockchain. My focus is on clean architecture, performance, and shipping what’s products in both Web2 and Web3.
          </p>
        </div>
        <div className="bg-accent/10 pl-6 rounded-lg space-y-4">
          <h3 className="font-semibold text-xl">Skills</h3>
          <div className="grid grid-cols-3 gap-y-2 gap-x-7">
            <span className="text-muted-foreground">Next.js</span>
            <span className="text-muted-foreground">React</span>
            <span className="text-muted-foreground">TypeScript</span>
            <span className="text-muted-foreground">JavaScript</span>
            <span className="text-muted-foreground">Node.js</span>
            <span className="text-muted-foreground">Express.js</span>
            <span className="text-muted-foreground">Prisma</span>
            <span className="text-muted-foreground">Tailwind CSS</span>
            <span className="text-muted-foreground">MongoDB</span>
            <span className="text-muted-foreground">Zod</span>
            <span className="text-muted-foreground">PostgreSQL</span>
            <span className="text-muted-foreground">GraphQL</span>
            <span className="text-muted-foreground">Solana</span>
            <span className="text-muted-foreground">@solana/web3.js</span>
            <span className="text-muted-foreground">Anchor</span>
            <span className="text-muted-foreground">Rust</span>
            <span className="text-muted-foreground">Smart Contracts</span>
            <span className="text-muted-foreground">Program Derived Addresses (PDAs)</span>
            <span className="text-muted-foreground">Wallet Integration</span>
            <span className="text-muted-foreground">Token Programs</span>
            <span className="text-muted-foreground">Metaplex</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
