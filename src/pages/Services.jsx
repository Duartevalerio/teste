import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'

const services = [
  {
    icon: 'real_estate_agent',
    title: 'Acquisition',
    text: 'Comprehensive assistance in identifying and acquiring the perfect residence — both on-market and in our private off-market register.'
  },
  {
    icon: 'sell',
    title: 'Sales',
    text: 'Discreet and effective marketing programmes tailored to premium real estate and private vendors seeking maximum confidentiality.'
  },
  {
    icon: 'home_repair_service',
    title: 'Management',
    text: 'Full-service property management, renovation oversight, and seasonal readiness for international owners residing abroad.'
  },
  {
    icon: 'gavel',
    title: 'Legal & Tax',
    text: 'Advisory coordination with leading Monégasque notaries, tax counsels, and compliance specialists for complex transactions.'
  },
  {
    icon: 'account_balance',
    title: 'Investment Strategy',
    text: 'Bespoke investment theses across principal residences, yield assets, and generational heritage portfolios.'
  },
  {
    icon: 'diamond',
    title: 'Private Clients',
    text: 'A dedicated account director for ultra-high-net-worth clients and single-family offices seeking absolute discretion.'
  }
]

export default function Services() {
  return (
    <PageTransition>
      <PageHero
        number="III"
        eyebrow="Expertise"
        title="Our Services"
        subtitle="An integrated advisory — every discipline required to acquire, own, and transact Monaco's most distinguished addresses, under one considered roof."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group p-8 sm:p-10 md:p-12 border-r border-b border-ink/10 bg-cream hover:bg-ink hover:text-cream transition-colors duration-700 cursor-default"
              >
                <div className="flex items-start justify-between mb-8 md:mb-10">
                  <span className="material-symbols-outlined text-champagne-dark group-hover:text-champagne text-4xl md:text-5xl transition-colors duration-500">
                    {s.icon}
                  </span>
                  <span className="font-serif italic text-sm text-ink/40 group-hover:text-cream/40 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-serif text-ink group-hover:text-cream mb-4 md:mb-6 leading-tight transition-colors">
                  {s.title}
                </h4>
                <p className="text-ink/70 group-hover:text-cream/70 text-sm leading-relaxed font-light transition-colors">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 md:py-32 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <div className="text-champagne font-serif italic text-sm mb-6">— The Process —</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-balance">
              Considered at every <span className="italic text-champagne-light">stage.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {[
              { n: '01', t: 'Brief', d: 'A private consultation to understand your lifestyle, timeline, and intention.' },
              { n: '02', t: 'Discovery', d: 'Access to on-market and off-market residences matched precisely to brief.' },
              { n: '03', t: 'Acquisition', d: 'Negotiation, due diligence, and transaction — handled with full discretion.' },
              { n: '04', t: 'Stewardship', d: 'Ongoing management, concierge, and lifestyle integration in the Principality.' }
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-0"
              >
                <div className="text-champagne font-serif italic text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
                  {step.n}
                </div>
                <div className="h-px w-12 bg-champagne mb-4 md:mb-6" />
                <h4 className="text-xl sm:text-2xl font-serif mb-3 md:mb-4">{step.t}</h4>
                <p className="text-cream/60 text-sm leading-relaxed font-light">{step.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 md:mt-24 text-center">
            <Link to="/contact" className="btn-ghost-light">
              Begin a conversation
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
