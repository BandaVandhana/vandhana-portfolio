
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Database,
  BrainCircuit,
  Server,
  Sparkles,
  Network,
  Activity,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'DISTRIBUTED SYSTEMS',
    title: 'Distributed File System Simulator',
    description:
      'Designed a distributed file system simulator exploring fault tolerance, replication and node failure detection.',
    highlights: [
      'Implemented dynamic tiered replication with a factor of 1–3.',
      'Explored Phi Accrual failure detection.',
      'Built a dashboard to monitor replication and system failures.',
    ],
    tech: ['Java', 'Distributed Systems', 'Replication'],
    icon: Server,
  },
  {
    number: '02',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'VacciFind',
    description:
      'Built a vaccine availability finder connecting users with government vaccination centres and vaccine information.',
    highlights: [
      'Covered 67 centres, 32 vaccines and 1,619 centre-vaccine pairs.',
      'Achieved 72.3% accuracy in availability classification.',
      'Optimised database queries, achieving substantial search speedups.',
    ],
    tech: ['Python', 'Flask', 'SQLite', 'PostgreSQL'],
    icon: Database,
  },
  {
    number: '03',
    category: 'MACHINE LEARNING · GENERATIVE AI',
    title: 'Text2Comic',
    description:
      'Developed a text-to-comic generation pipeline that transforms written prompts into visual comic narratives.',
    highlights: [
      'Used Stable Diffusion v1.5 for image generation.',
      'Explored multi-panel visual storytelling.',
      'Achieved an evaluation score of 83/100.',
    ],
    tech: ['Python', 'Stable Diffusion', 'Generative AI'],
    icon: Sparkles,
  },
  {
    number: '04',
    category: 'MACHINE LEARNING · PREDICTIVE ANALYTICS',
    title: 'NYC Event-Driven Rental Pricing',
    description:
      'Developed a data-driven pricing recommendation system for New York short-term rentals by analysing the influence of nearby events on rental demand.',
    highlights: [
      'Integrated Ticketmaster API data to capture local event activity.',
      'Performed feature engineering to identify demand and pricing signals.',
      'Used XGBoost to predict pricing opportunities and recommend when hosts could increase rental prices.',
    ],
    tech: [
      'Python',
      'XGBoost',
      'Ticketmaster API',
      'Feature Engineering',
      'Machine Learning',
    ],
    icon: Activity,
  },
  {
    number: '05',
    category: 'HEALTHCARE · MACHINE LEARNING',
    title: "Women's Alzheimer's Prediction",
    description:
      "Explored Alzheimer's disease prediction using a women-specific dataset, focusing on identifying patterns associated with the condition.",
    highlights: [
      'Worked with a dataset specifically focused on women.',
      'Applied machine learning for disease prediction.',
      'Achieved 87% accuracy using a Random Forest model.',
    ],
    tech: ['Python', 'Random Forest', 'Scikit-learn', 'Machine Learning'],
    icon: BrainCircuit,
  },
  {
    number: '06',
    category: 'AI · FULL-STACK DEVELOPMENT',
    title: 'PrepPilot AI',
    description:
      'Built an AI-powered interview preparation platform combining curated coding practice with intelligent assistance.',
    highlights: [
      'Integrated a collection of 150 LeetCode problems.',
      'Used Gemini API for AI-powered functionality.',
      'Built the application using React and Supabase.',
    ],
    tech: ['React', 'Vite', 'Supabase', 'Gemini API'],
    icon: Code2,
  },
]

const research = [
  {
    number: 'R01',
    title: 'Reliable Data Transfer over UDP',
    description:
      'Explored reliable communication over an unreliable UDP connection by implementing mechanisms to handle packet loss and improve delivery reliability.',
    highlights: [
      'Implemented acknowledgements and retransmission mechanisms.',
      'Tested behaviour under simulated packet loss.',
      'Achieved 100% delivery in simulated-loss tests.',
    ],
    tech: ['Python', 'UDP', 'Computer Networks'],
    icon: Network,
  },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      className="group flex h-full flex-col border border-[#47372F]/15 bg-[#F1E8D5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B18A58]/70 hover:shadow-xl hover:shadow-[#47372F]/5 sm:p-9"
    >
      <div className="mb-8 flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-[#B18A58]">
          {project.number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center border border-[#B18A58]/40 text-[#713B3B] transition-colors group-hover:bg-[#713B3B] group-hover:text-[#F1E8D5]">
          <Icon size={20} />
        </div>
      </div>

      <span className="font-mono text-[10px] tracking-[0.18em] text-[#713B3B]">
        {project.category}
      </span>

      <h3 className="mt-3 font-serif text-2xl leading-snug text-[#47372F] sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-5 text-sm leading-7 text-[#47372F]/75">
        {project.description}
      </p>

      <div className="mt-6 flex-1">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#B18A58]">
          What I worked on
        </p>

        <ul className="space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-[#47372F]/80"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#713B3B]" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-[#47372F]/15 pt-6">
        {project.tech.map((item) => (
          <span
            key={item}
            className="border border-[#B18A58]/40 px-3 py-1.5 font-mono text-[10px] text-[#47372F]/80"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F1E8D5] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#713B3B]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#713B3B]">
              Selected work
            </span>
          </div>

          <h2 className="font-serif text-5xl font-normal leading-tight text-[#47372F] sm:text-6xl">
            Things I've
            <span className="italic text-[#713B3B]"> built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#47372F]/75">
            A selection of projects where I've explored software
            engineering, distributed systems, machine learning
            and generative AI.
          </p>
        </motion.div>

        {/* Development projects */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Research section */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#713B3B]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#713B3B]">
                Experiments & exploration
              </span>
            </div>

            <h2 className="font-serif text-4xl font-normal text-[#47372F] sm:text-5xl">
              Research & 
              <span className="italic text-[#713B3B]"> technical work.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#47372F]/75">
              Technical explorations focused on understanding
              systems, protocols and engineering concepts.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {research.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={{
                  ...project,
                  category: 'NETWORKING · RESEARCH',
                }}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Editorial footer */}
        <div className="mt-20 flex items-center gap-4 border-t border-[#47372F]/20 pt-6">
          <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
            CHAPTER 03
          </span>

          <span className="h-px flex-1 bg-[#47372F]/20" />

          <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
            IDEAS INTO IMPLEMENTATION
          </span>
        </div>
      </div>
    </section>
  )
}

export default Projects
