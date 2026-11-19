
import { motion } from 'framer-motion'
import {
  Trophy,
  Presentation,
  Users,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react'

const milestones = [
  {
  year: '2026',
  category: 'PLATFORM DEVELOPMENT',
  title: 'Salesforce Development',
  subtitle: 'Hands-on Platform & Agentforce Exploration',
  description:
    'Worked hands-on with the Salesforce platform, exploring Apex triggers, asynchronous Apex, Visualforce, Aura and Lightning Web Components. Also worked with Platform Events, Salesforce DX and Agentforce setup.',
  icon: Presentation,
},
  {
  year: '2026',
  category: 'NATIONAL-LEVEL COMPETITION',
  title: 'Flipkart GRiD 8.0',
  subtitle: 'National Semi-Finalist',
  description:
    'Qualified as a National Semi-Finalist in Flipkart GRiD 8.0, a nationwide technology and engineering competition.',
  icon: Trophy,
},
    {
  year: '2026',
  category: 'TECHNICAL BOOTCAMP',
  title: 'Arista Networks',
  subtitle: 'Bootcamp Participant',
  description:
    'Participated in a technical bootcamp focused on exploring networking technologies and gaining practical technical exposure.',
  icon: Presentation,
},
  {
    year: '2025',
    category: 'COMMUNITY',
    title: 'Google Developer Student Clubs',
    subtitle: 'Technical Member',
    description:
      'Participated in the developer community and explored technology through collaborative learning.',
    icon: Users,
  },
  
]

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#E8DDC8] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
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
              The journey so far
            </span>
          </div>

          <h2 className="font-serif text-5xl font-normal leading-tight text-[#47372F] sm:text-6xl">
            Milestones &
            <span className="italic text-[#713B3B]"> recognition.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#47372F]/75">
            A collection of experiences, achievements and learning
            moments that have shaped my journey in technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-[#B18A58]/50 sm:left-[23px]" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="relative grid gap-5 pl-14 sm:grid-cols-[150px_1fr] sm:gap-10 sm:pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#B18A58]/60 bg-[#F1E8D5] text-[#713B3B] sm:h-12 sm:w-12">
                    <Icon size={19} />
                  </div>

                  {/* Year */}
                  <div className="pt-2">
                    <span className="font-mono text-xs tracking-widest text-[#713B3B]">
                      {item.year}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="border-b border-[#47372F]/15 pb-9">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#B18A58]">
                      {item.category}
                    </span>

                    <h3 className="mt-3 font-serif text-2xl text-[#47372F] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#713B3B]">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#47372F]/75">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 flex items-center gap-4 border-t border-[#47372F]/20 pt-6">
          <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
            CHAPTER 04
          </span>
          <span className="h-px flex-1 bg-[#47372F]/20" />
          <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
            EVERY STEP COUNTS
          </span>
        </div>
      </div>
    </section>
  )
}

export default Experience
