import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { properties } from '../data/properties.js'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)
  const related = properties.filter((p) => p.id !== id).slice(0, 3)

  if (!property) {
    return (
      <PageTransition>
        <section className="pt-44 md:pt-56 pb-32 min-h-screen bg-cream text-center px-6">
          <h3 className="text-4xl font-serif text-ink mb-8">Residence not found</h3>
          <Link to="/portfolio" className="btn-outline">
            Back to Portfolio
          </Link>
        </section>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      {/* Hero image */}
      <section className="relative pt-28 sm:pt-32 h-[75vh] sm:h-[70vh] min-h-[520px] md:min-h-[560px] bg-ink overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          src={property.image}
          alt={property.alt || property.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl flex flex-col justify-end pb-12 sm:pb-16 md:pb-20">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-champagne text-[10px] uppercase tracking-[0.3em] font-semibold mb-10 transition-colors w-max"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-champagne text-ink text-[9px] uppercase tracking-[0.3em] px-4 py-2 font-semibold">
                {property.status}
              </span>
              <span className="text-cream/60 text-[10px] uppercase tracking-[0.3em]">
                {property.area_name}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.05] sm:leading-[0.95] tracking-tight max-w-4xl">
              {property.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">— Overview</div>
              <p className="text-ink/75 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8 md:mb-10 text-pretty">
                {property.description}
              </p>

              <div className="grid grid-cols-3 border border-ink/10 divide-x divide-ink/10 mb-16">
                {[
                  { l: 'Bedrooms', v: property.beds },
                  { l: 'Bathrooms', v: property.baths },
                  { l: 'Interior', v: `${property.area} m²` }
                ].map((s) => (
                  <div key={s.l} className="text-center py-6 sm:py-8 px-3 sm:px-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-ink">{s.v}</div>
                    <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-ink/50 mt-2 sm:mt-3">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="eyebrow mb-6">— Defining Features</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-ink/70">
                {[
                  'Private concierge services',
                  'Panoramic Mediterranean views',
                  'Dedicated parking',
                  'Secured access & CCTV',
                  '24/7 building staff',
                  'Climate control throughout'
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-champagne rotate-45" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5 lg:pl-8">
              <div className="lg:sticky lg:top-32 border border-ink/10 p-6 sm:p-8 md:p-10 bg-cream-dark/30">
                <div className="text-[9px] uppercase tracking-[0.3em] text-ink/50 mb-3">
                  Guide Price
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink mb-2 break-words">
                  {property.price}
                </div>
                <div className="h-px bg-champagne w-12 my-8" />
                <p className="text-ink/60 text-sm leading-relaxed mb-8 font-light">
                  Request a private viewing with a member of our advisory team. All enquiries are
                  handled with absolute discretion.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Private Viewing
                  <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                </Link>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="text-center py-3 text-[10px] uppercase tracking-[0.3em] font-semibold text-ink/60 hover:text-ink border border-ink/10 hover:border-ink transition-all"
                  >
                    Brochure
                  </a>
                  <a
                    href="#"
                    className="text-center py-3 text-[10px] uppercase tracking-[0.3em] font-semibold text-ink/60 hover:text-ink border border-ink/10 hover:border-ink transition-all"
                  >
                    Share
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream-dark/40 border-t border-ink/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-8xl">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-champagne" />
            <span className="text-champagne-dark text-[10px] uppercase tracking-[0.4em] font-semibold">
              Also Curated
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {related.map((p, i) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="group">
                <div className="relative overflow-hidden portrait-aspect bg-ink/10 mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-2">
                  {p.area_name}
                </div>
                <h4 className="font-serif text-xl text-ink group-hover:text-champagne-dark transition-colors">
                  {p.name}
                </h4>
                <div className="text-ink/60 text-sm mt-2">{p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
