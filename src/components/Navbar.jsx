import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/areas', label: 'Areas' },
  { to: '/services', label: 'Services' },
  { to: '/concierge', label: 'Concierge' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const solid = scrolled || !isHome

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          solid
            ? 'bg-ink/95 backdrop-blur-xl border-b border-champagne/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="flex justify-between items-center gap-4 px-4 sm:px-6 md:px-10 lg:px-14 max-w-8xl mx-auto">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo light />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[10px] uppercase tracking-[0.3em] font-medium transition-colors group ${
                    isActive ? 'text-champagne' : 'text-cream/70 hover:text-cream'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-champagne/40 mr-2 text-[9px]">0{i + 1}</span>
                    {l.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-champagne transition-all duration-500 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="hidden md:inline-flex items-center gap-2 text-cream hover:text-champagne border border-cream/20 hover:border-champagne px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              Enquire
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-cream p-2 hover:text-champagne transition-colors"
            >
              <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ink lg:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full gap-8 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `text-3xl font-serif italic transition-colors ${
                        isActive ? 'text-champagne' : 'text-cream hover:text-champagne'
                      }`
                    }
                  >
                    <span className="text-champagne/40 text-sm not-italic mr-3">0{i + 1}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-ghost-light">
                  Enquire privately
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
