
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    subtitle: 'The foundations',
    icon: Code2,
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    number: '02',
    title: 'Core Computer Science',
    subtitle: 'Understanding the fundamentals',
    icon: BrainCircuit,
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    number: '03',
    title: 'Development & Tools',
    subtitle: 'Building and shipping',
    icon: Wrench,
    skills: [
      'React',
      'Flask',
      'FastAPI',
      'REST APIs',
      'Git & GitHub',
      'Postman',
      'Linux',
    ],
  },
  {
    number: '04',
    title: 'Data & AI',
    subtitle: 'Working with intelligent systems',
    icon: Database,
    skills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'MySQL',
      'Firebase',
      'Supabase',
      'Neon DB',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F1E8D5] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
              Tools of the trade
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-5xl font-normal leading-tight text-[#47372F] sm:text-6xl">
              My technical
              <span className="italic text-[#713B3B]"> toolkit.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#47372F]/70">
              A collection of languages, concepts and tools
              I use to explore ideas and build solutions.
            </p>
          </div>
        </motion.div>

        {/* Skill cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group border border-[#47372F]/15 bg-[#E8DDC8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#713B3B]/40 sm:p-9"
              >
                {/* Card header */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs tracking-widest text-[#713B3B]">
                      {group.number} / 04
                    </span>

                    <h3 className="mt-3 font-serif text-2xl text-[#47372F]">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#47372F]/60">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className="rounded-full border border-[#B18A58]/50 p-3 text-[#713B3B] transition-colors group-hover:bg-[#713B3B] group-hover:text-[#F1E8D5]">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#47372F]/20 px-3 py-2 text-xs text-[#47372F]/80 transition-colors duration-300 hover:border-[#713B3B] hover:text-[#713B3B]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-20 flex items-center gap-4 border-t border-[#47372F]/20 pt-6">
          <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
            CHAPTER 02
          </span>

          <span className="h-px flex-1 bg-[#47372F]/20" />

          <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
            CONSTANTLY EVOLVING
          </span>
        </div>

      </div>
    </section>
  )
}

export default Skills
