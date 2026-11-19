
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
} from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F1E8D5] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#713B3B]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#713B3B]">
              The next chapter
            </span>
          </div>

          <h2 className="font-serif text-5xl font-normal leading-tight text-[#47372F] sm:text-7xl">
            Have something
            <br />
            <span className="italic text-[#713B3B]">in mind?</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#47372F]/75">
            I'm always open to meaningful conversations,
            exciting engineering opportunities and
            collaborations. If something here caught your
            attention, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid gap-10 border-y border-[#47372F]/20 py-12 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B18A58]">
              Get in touch
            </span>

            <h3 className="mt-4 font-serif text-3xl text-[#47372F]">
              Let's build something
              <span className="italic text-[#713B3B]"> worthwhile.</span>
            </h3>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:bandavandhana26@gmail.com"
              className="group flex items-center justify-between border-b border-[#47372F]/20 pb-4 text-[#47372F] transition-colors hover:text-[#713B3B]"
            >
              <span className="flex items-center gap-3 text-sm">
                <Mail size={18} />
                bandavandhana26@gmail.com
              </span>
              <ArrowUpRight size={18} />
            </a>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/BandaVandhana"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#47372F] transition-colors hover:text-[#713B3B]"
              >
                
            
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/banda-vandhana/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#47372F] transition-colors hover:text-[#713B3B]"
              >
                
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Availability note */}
        <div className="mt-12 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#354638]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#47372F]/70">
            Open to Software Engineering & AI Engineering Opportunities
          </span>
        </div>

        {/* Chapter marker */}
        <div className="mt-20 flex items-center gap-4 border-t border-[#47372F]/20 pt-6">
          <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
            CHAPTER 05
          </span>
          <span className="h-px flex-1 bg-[#47372F]/20" />
          <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
            UNTIL THE NEXT IDEA
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
