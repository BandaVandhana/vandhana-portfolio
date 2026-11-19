
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from 'lucide-react'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import profileImg from './assets/vandhana_portfolio.jpeg'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F1E8D5]">
      <Navbar />

      <main id="home">
        {/* Hero Section */}
        <section className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-12">

          {/* Decorative circles */}
          {/* Profile Photo */}
{/* Profile Photo */}
<div className="pointer-events-none absolute right-16 top-28 hidden h-64 w-64 overflow-hidden rounded-full border-2 border-[#B18A58] lg:block">
  <img
    src={profileImg}
    alt="Banda Vandhana"
    className="h-full w-full rounded-full object-cover object-[105%_20%] scale-130"
  />
</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-4xl"
          >
            {/* Intro label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#713B3B]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#713B3B]">
                A little introduction
              </span>
            </div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-serif text-6xl font-normal leading-[1.12] tracking-tight text-[#47372F] sm:text-7xl lg:text-8xl"
            >
              Hello, I'm
              <br />
              <span className="italic text-[#713B3B]">
                Banda Vandhana.
              </span>
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#47372F]/80 sm:text-lg"
            >
              A Computer Science student with a curiosity for
              building meaningful technology, solving complex
              problems, and turning ideas into practical solutions.
            </motion.p>

            {/* Professional interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <span className="flex items-center gap-2 text-sm text-[#354638]">
                <Code2 size={17} />
                Software Development
              </span>

              <span className="flex items-center gap-2 text-sm text-[#354638]">
                <Sparkles size={17} />
                Always Learning
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 bg-[#713B3B] px-7 py-4 text-sm text-[#F1E8D5] transition-all duration-300 hover:bg-[#47372F]"
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="border border-[#47372F]/40 px-7 py-4 text-sm text-[#47372F] transition-all duration-300 hover:border-[#713B3B] hover:text-[#713B3B]"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Location */}
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#47372F]/30" />

              <span className="font-mono text-[10px] uppercase tracking-widest text-[#47372F]/60">
                Bengaluru, India
              </span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 right-8 hidden items-center gap-3 text-[#713B3B] md:flex"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
            <ArrowDown size={16} />
          </motion.div>
        </section>

        {/* Editorial divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-4 border-t border-[#47372F]/20 py-6">
            <span className="font-mono text-[10px] tracking-widest text-[#713B3B]">
              VOL. 01
            </span>

            <span className="h-px flex-1 bg-[#47372F]/20" />

            <span className="font-mono text-[10px] tracking-widest text-[#47372F]/60">
              THE BEGINNING
            </span>
          </div>
        </div>

        {/* Portfolio Sections */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </main>
    </div>
  )
}

export default App
