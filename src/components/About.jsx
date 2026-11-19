
import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
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
              A little about me
            </span>
          </div>

          <h2 className="font-serif text-5xl font-normal leading-tight text-[#47372F] sm:text-6xl">
            Beyond the
            <span className="italic text-[#713B3B]"> code.</span>
          </h2>
        </motion.div>

        {/* About content */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 font-serif text-2xl leading-relaxed text-[#47372F] sm:text-3xl">
              I enjoy understanding how things work, solving problems,
              and building technology that makes a difference.
            </p>

            <div className="space-y-5 text-base leading-8 text-[#47372F]/80">
              <p>
                I'm Banda Vandhana, a final year Computer Science and Engineering
                undergraduate at Amrita Vishwa Vidyapeetham, Bengaluru,
                graduating in 2027.
              </p>

              <p>
                My interests lie in software development, particularly
                Java, backend engineering and distributed systems.
                I'm equally curious about artificial intelligence and
                building full-stack applications.
              </p>

              <p>
                Through projects, competitions and continuous learning,
                I enjoy exploring ideas beyond the classroom and
                turning concepts into working solutions.
              </p>

              <p>
                I like asking why things work the way they do, not just figuring out how to make them work.
              </p>
            </div>
          </motion.div>

          {/* Academic snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border-l border-[#B18A58]/50 pl-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#713B3B]">
              At a glance
            </span>

            <div className="mt-8 space-y-9">

              <div>
                <p className="font-serif text-4xl text-[#713B3B]">
                  8.57
                </p>
                <p className="mt-2 text-sm text-[#47372F]/70">
                  Current CGPA / 10
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#47372F]">
                  2027
                </p>
                <p className="mt-2 text-sm text-[#47372F]/70">
                  Graduation year
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#47372F]">
                  B.Tech
                </p>
                <p className="mt-2 text-sm text-[#47372F]/70">
                  Computer Science & Engineering
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#47372F]">
                  Bengaluru, India
                </p>
                <p className="mt-2 text-sm text-[#47372F]/70">
                  Based in
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom editorial note */}
        <div className="mt-20 flex items-center gap-4 border-t border-[#47372F]/20 pt-6">
          <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
            CHAPTER 01
          </span>

          <span className="h-px flex-1 bg-[#47372F]/20" />

          <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
            THE PERSON BEHIND THE PROJECTS
          </span>
        </div>

      </div>
    </section>
  )
}

export default About
