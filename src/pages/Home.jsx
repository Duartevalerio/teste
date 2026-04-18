import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Marquee from '../components/Marquee.jsx'
import { properties, areas } from '../data/properties.js'

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Kh_MkIIVLWI90p_T9RfSjJpSHyx6pnkE0twLHDF3_y63a8H_TTVtdvjU3WEu5kpW4c4Ik4z8GVge8S10KdidCW2Omk2oK6IbTA70qJldhvxldPvFkaqAKlSMWyrDXXZmJALTDG375r0TEim6G-JSFT80tRYdz8XicR7S2rKj7g2sAnEUP6_WzUXRlZOf1r30rrE0ZILkXa-L3zEjz9e1CqUonBNbQ4DvKFrrhxpWUQMAT9BgCSApWoxLIvCBQu1MmIvOSIoun6aP'

const philosophyImg =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80'

export default function Home() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [transaction, setTransaction] = useState('Purchase')
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSearch = (e) => {
    e.preventDefault()
    const q = new URLSearchParams()
    if (location) q.set('q', location)
    if (transaction) q.set('type', transaction)
    navigate(`/portfolio?${q.toString()}`)
  }

  const onJoin = (e) => {
    e.preventDefault()
    if (!email) return
    setJoined(true)
    setEmail('')
  }

  const featured = properties.slice(0, 3)

  return (
    <PageTransition>
      {/* ===================== HERO ===================== */}
      <section className="relative h-[100svh] min-h-[600px] md:min-h-[720px] flex items-end overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-overlay z-10" />
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
            src={heroImg}
            alt="Monaco harbor at dusk"
          />
        </div>

        {/* Top hero line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-24 md:top-32 left-0 right-0 z-20 px-4 sm:px-6 md:px-10 lg:px-14"
        >
          <div className="flex items-center justify-between max-w-8xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 text-cream/60 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
              <span className="w-6 md:w-8 h-px bg-champagne" />
              Est. 1994
            </div>
            <div className="hidden sm:flex items-center gap-3 md:gap-4 text-cream/60 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Monaco · Côte d'Azur
              <span className="w-6 md:w-8 h-px bg-champagne" />
            </div>
          </div>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 pb-16 sm:pb-20 md:pb-28">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10"
            >
              <span className="w-8 md:w-12 h-px bg-champagne" />
              <span className="text-champagne text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium">
                Monaco Private Residences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[44px] xs:text-[54px] sm:text-6xl md:text-[88px] lg:text-[120px] xl:text-[140px] font-serif text-cream tracking-[-0.03em] leading-[0.95] md:leading-[0.92] mb-8 md:mb-12"
            >
              The Art of
              <br />
              <span className="italic text-champagne-light">Noble Living</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="text-cream/70 text-sm sm:text-base md:text-lg font-light max-w-xl leading-relaxed mb-10 sm:mb-12 md:mb-16"
            >
              A discreet office for the acquisition and stewardship of the Principality's most
              distinguished residences — from Belle Époque palais to contemporary penthouses above
              the harbour.
            </motion.p>

            {/* Search */}
            <motion.form
              onSubmit={onSearch}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
              className="bg-cream/5 backdrop-blur-2xl border border-cream/15 flex flex-col md:flex-row items-stretch w-full max-w-4xl"
            >
              <div className="flex-1 flex items-center px-5 sm:px-6 md:px-8 py-4 sm:py-5 border-b md:border-b-0 md:border-r border-cream/10">
                <span className="material-symbols-outlined text-champagne mr-3 md:mr-4 text-[20px] md:text-[22px]">
                  location_on
                </span>
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-cream/40 mb-1">
                    Location
                  </span>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent border-none outline-none p-0 text-cream text-sm font-medium placeholder:text-cream/30 w-full"
                    placeholder="Monte Carlo, Fontvieille..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 flex items-center px-5 sm:px-6 md:px-8 py-4 sm:py-5 border-b md:border-b-0 md:border-r border-cream/10">
                <span className="material-symbols-outlined text-champagne mr-3 md:mr-4 text-[20px] md:text-[22px]">
                  home_work
                </span>
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-cream/40 mb-1">
                    Transaction
                  </span>
                  <select
                    value={transaction}
                    onChange={(e) => setTransaction(e.target.value)}
                    className="bg-transparent border-none outline-none p-0 text-cream text-sm font-medium appearance-none cursor-pointer w-full"
                  >
                    <option className="bg-ink">Purchase</option>
                    <option className="bg-ink">Lease</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-champagne text-ink px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-0 flex items-center justify-center gap-2 md:gap-3 font-semibold text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] transition-all hover:bg-champagne-light"
              >
                <span className="material-symbols-outlined text-[20px]">search</span>
                <span>Discover</span>
              </button>
            </motion.form>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden sm:flex absolute bottom-8 right-6 md:right-14 z-20 items-center gap-4 text-cream/50"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"
          />
        </motion.div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <Marquee
        items={[
          'Private Office Monaco',
          'Since 1994',
          'Off-Market Residences',
          'Discretion Assured',
          'Global Clientele',
          'Bespoke Advisory'
        ]}
      />

      {/* ===================== STATS ===================== */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
            {[
              { v: '€4.2B+', l: 'Managed Portfolio', s: '01' },
              { v: '150+', l: 'Exclusive Off-Market', s: '02' },
              { v: '30 yrs', l: 'Excellence Legacy', s: '03' }
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`text-center md:px-8 lg:px-10 ${i !== 2 ? 'md:border-r md:border-ink/10' : ''}`}
              >
                <div className="text-champagne-dark text-[10px] uppercase tracking-[0.4em] font-serif italic mb-4 md:mb-6">
                  {s.s}
                </div>
                <div className="text-ink text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 tracking-tight">
                  {s.v}
                </div>
                <div className="h-px w-8 bg-champagne mx-auto mb-4" />
                <p className="text-ink/60 font-medium tracking-[0.25em] uppercase text-[10px]">
                  {s.l}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="py-24 md:py-40 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden portrait-aspect">
                <img src={philosophyImg} alt="Monaco residence interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-champagne text-ink py-6 px-8 max-w-[200px]">
                <div className="font-serif italic text-xl mb-1">30</div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-semibold">
                  Years of quiet excellence
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-12 h-px bg-champagne" />
                <span className="text-champagne text-[10px] uppercase tracking-[0.4em] font-semibold">
                  Our Philosophy
                </span>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] md:leading-[1.15] text-balance mb-8 md:mb-10"
              >
                <span className="text-champagne text-5xl md:text-6xl font-serif italic leading-none align-top mr-2">
                  "
                </span>
                A residence is not acquired — it is composed.
                <span className="italic text-champagne-light"> Each address we curate
                is a dialogue between heritage, place, and the life you intend to live.</span>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-12 h-px bg-champagne" />
                <div>
                  <div className="font-serif text-cream">Alexandre Marchetti</div>
                  <div className="text-cream/50 text-[10px] uppercase tracking-[0.3em] mt-1">
                    Founding Director
                  </div>
                </div>
              </motion.div>

              <Link to="/services" className="btn-ghost-light">
                Our Approach
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED ===================== */}
      <section className="py-24 md:py-40 bg-cream">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-8xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="w-12 h-px bg-champagne" />
                <span className="text-champagne-dark text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold">
                  Curated Collection
                </span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.08] md:leading-[1.05] tracking-tight"
              >
                Featured <span className="italic text-champagne-dark">Residences</span>
              </motion.h3>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-ink text-[10px] uppercase tracking-[0.3em] font-semibold border-b-2 border-champagne pb-2 hover:border-ink transition-colors"
            >
              View Full Portfolio
              <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AREAS ===================== */}
      <section className="py-24 md:py-32 bg-cream-dark/40 border-y border-ink/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-8xl">
          <SectionHeading
            number="III"
            eyebrow="Neighbourhoods"
            title="The Principality, Curated by Address"
            subtitle="From the discretion of the Carré d'Or to the seafront terraces of Larvotto, each quarter carries its own cadence of life."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {areas.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Link
                  to={`/portfolio?q=${encodeURIComponent(a.name)}`}
                  className="group block relative overflow-hidden portrait-aspect bg-ink"
                >
                  <img
                    src={a.image}
                    alt={a.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="text-champagne text-[9px] uppercase tracking-[0.4em] mb-2 font-serif italic">
                      0{i + 1}
                    </div>
                    <h4 className="text-cream text-xl md:text-2xl font-serif mb-3 group-hover:text-champagne-light transition-colors">
                      {a.name}
                    </h4>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500">
                      <p className="text-cream/70 text-sm font-light leading-relaxed pt-2">
                        {a.blurb}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA / REGISTRY ===================== */}
      <section className="py-24 md:py-40 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(201,167,107,0.3), transparent 40%), radial-gradient(circle at 80% 70%, rgba(201,167,107,0.2), transparent 50%)'
          }}
        />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-champagne font-serif italic text-sm mb-8 tracking-wider"
            >
              — Private Registry —
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 md:mb-10 leading-[1.08] md:leading-[1.05] tracking-tight text-balance"
            >
              The finest addresses are <span className="italic text-champagne-light">never advertised.</span>
            </motion.h3>
            <p className="text-cream/60 text-base md:text-lg mb-14 font-light max-w-2xl mx-auto leading-relaxed">
              Our off-market collection is shared privately with clients on our registry.
              Correspondence is individual, considered, and entirely confidential.
            </p>

            <form
              onSubmit={onJoin}
              className="flex flex-col md:flex-row max-w-2xl mx-auto border border-cream/20 bg-cream/5 backdrop-blur-sm"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-cream px-6 md:px-8 py-5 focus:outline-none focus:bg-cream/5 placeholder:text-cream/30 text-sm"
                placeholder="Your private email"
                type="email"
                required
              />
              <button
                type="submit"
                className="bg-champagne text-ink px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all hover:bg-champagne-light"
              >
                {joined ? 'Welcome' : 'Join Registry'}
              </button>
            </form>

            {joined && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-champagne text-xs uppercase tracking-[0.3em] mt-8"
              >
                Thank you — we will be in touch discreetly.
              </motion.p>
            )}

            <div className="mt-12 flex items-center justify-center gap-6 text-cream/30 text-[9px] uppercase tracking-[0.4em]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                Discretion assured
              </span>
              <span className="w-px h-3 bg-cream/20" />
              <span>No third parties</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
