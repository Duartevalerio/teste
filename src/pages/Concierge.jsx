import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'

const offerings = [
  { icon: 'directions_boat', title: 'Yacht Charter', d: 'Private yacht provisioning across the Riviera.' },
  { icon: 'restaurant', title: 'Private Dining', d: 'Reservations at the Principality’s most coveted tables.' },
  { icon: 'local_taxi', title: 'Chauffeur', d: 'Luxury transport, escorted security, and aviation.' },
  { icon: 'spa', title: 'Wellness & Spa', d: 'Curated treatments with resident masseurs and practitioners.' },
  { icon: 'celebration', title: 'Private Events', d: 'Staging of private gatherings, weddings, and corporate retreats.' },
  { icon: 'flight', title: 'Aviation', d: 'Coordination with Nice Côte d’Azur executive terminal.' },
  { icon: 'shopping_bag', title: 'Personal Shopping', d: 'Dedicated ateliers, couture, and fine jewellery introductions.' },
  { icon: 'school', title: 'Education', d: 'School placements and tutoring for international families.' }
]

export default function Concierge() {
  return (
    <PageTransition>
      <PageHero
        number="IV"
        eyebrow="Lifestyle"
        title="Private Concierge"
        subtitle="Beyond the acquisition of your residence — a dedicated private office tending to the details of daily life in Monaco."
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
          {/* Intro split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center mb-20 sm:mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden portrait-aspect bg-ink/5">
                <img
                  src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Private Concierge"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-champagne" />
                <span className="text-champagne-dark text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold">
                  A Life, Attended
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-tight tracking-tight mb-6 md:mb-8 text-balance">
                Every detail of Monégasque life, held with <span className="italic text-champagne-dark">quiet care.</span>
              </h2>
              <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light mb-6 text-pretty">
                Our Private Concierge ensures that every moment of your time in the Principality is
                tailored to absolute perfection. From exclusive events and private transport to
                reservations at the Principality's most sought-after venues — every request is
                handled with the utmost discretion.
              </p>
              <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light mb-8 md:mb-10 text-pretty">
                A single call, a single contact — and a composed answer.
              </p>
              <Link to="/contact" className="btn-primary">
                Request Services
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </Link>
            </div>
          </div>

          {/* Offerings grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/10">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-6 sm:p-8 md:p-10 border-r border-b border-ink/10 bg-cream hover:bg-ink hover:text-cream transition-colors duration-700"
              >
                <span className="material-symbols-outlined text-champagne-dark group-hover:text-champagne text-3xl sm:text-4xl mb-4 sm:mb-6 inline-block transition-colors duration-500">
                  {o.icon}
                </span>
                <h4 className="font-serif text-base sm:text-lg md:text-xl text-ink group-hover:text-cream mb-2 sm:mb-3 transition-colors">
                  {o.title}
                </h4>
                <p className="text-xs md:text-sm text-ink/60 group-hover:text-cream/60 leading-relaxed font-light transition-colors">
                  {o.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
