import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const discover = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/areas', label: 'Areas' },
  { to: '/services', label: 'Services' },
  { to: '/concierge', label: 'Concierge' }
]

const legal = [
  { to: '/contact', label: 'Contact' },
  { to: '#', label: 'Privacy' },
  { to: '#', label: 'Terms' },
  { to: '#', label: 'Cookies' }
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 md:gap-16 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-8 text-cream/60 text-sm leading-relaxed font-light max-w-md">
              A discreet advisory for acquiring, leasing, and stewarding the most distinguished
              residences of the Principality of Monaco.
            </p>
            <div className="mt-10 flex items-center gap-5">
              {['instagram', 'linkedin', 'mail'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-11 h-11 border border-cream/15 flex items-center justify-center text-cream/60 hover:text-champagne hover:border-champagne transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-[18px]">{s}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-6">Discover</div>
            <ul className="space-y-4">
              {discover.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-cream/70 text-sm hover:text-champagne transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-champagne transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-6">Private Office</div>
            <address className="not-italic text-cream/70 text-sm space-y-3 leading-relaxed">
              <div>7 Avenue de Monte-Carlo</div>
              <div>98000 Monaco</div>
              <div className="pt-2">
                <a href="tel:+37799000000" className="hover:text-champagne transition-colors block">
                  +377 99 00 00 00
                </a>
                <a
                  href="mailto:private@montecarloestates.mc"
                  className="hover:text-champagne transition-colors block"
                >
                  private@montecarloestates.mc
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-cream/40 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Monte Carlo Estates — Est. 1994
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {legal.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-cream/40 text-[10px] uppercase tracking-[0.25em] hover:text-champagne transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
