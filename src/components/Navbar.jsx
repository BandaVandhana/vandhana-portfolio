
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#47372F]/15 bg-[#F1E8D5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          {/* <span className="font-serif text-3xl font-semibold text-[#713B3B]">
            BV.
          </span> */}

          <span className="hidden border-l border-[#47372F]/30 pl-3 text-xs tracking-[0.18em] text-[#47372F] sm:block">
            BANDA VANDHANA
            <span className="mt-1 block font-mono text-[9px] tracking-widest text-[#713B3B]">
              DEVELOPER PORTFOLIO
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm text-[#47372F] transition-colors duration-300 hover:text-[#713B3B]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#713B3B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-sm bg-[#713B3B] px-5 py-3 text-sm text-[#F1E8D5] transition-all duration-300 hover:bg-[#47372F]"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#47372F] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#47372F]/10 md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[#47372F] hover:text-[#713B3B]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-[#713B3B]"
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
