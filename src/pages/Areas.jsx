import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import { areas } from '../data/properties.js'

export default function Areas() {
  return (
    <PageTransition>
      <PageHero
        number="II"
        eyebrow="Discover Monaco"
        title="Exclusive Areas"
        subtitle="Each quarter of the Principality carries its own spirit — from the grand heritage of Monte Carlo to the contemporary calm of Fontvieille."
        image="https://images.unsplash.com/photo-1555990538-17392d8b4b1e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl">
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {areas.map((a, i) => {
              const reverse = i % 2 === 1
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    reverse ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="lg:col-span-7">
                    <div className="relative overflow-hidden landscape-aspect bg-ink/10 group">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-6 left-6 text-cream font-serif italic text-sm bg-ink/40 backdrop-blur-sm px-3 py-1">
                        0{i + 1}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:pl-4">
                    <div className="text-champagne-dark text-[10px] uppercase tracking-[0.4em] font-semibold mb-4 font-medium">
                      Principality · {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink mb-5 md:mb-6 leading-tight tracking-tight">
                      {a.name}
                    </h3>
                    <div className="h-px w-12 md:w-16 bg-champagne mb-6 md:mb-8" />
                    <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light mb-8 md:mb-10 text-pretty">
                      {a.blurb}
                    </p>
                    <Link
                      to={`/portfolio?q=${encodeURIComponent(a.name)}`}
                      className="inline-flex items-center gap-3 text-ink text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-champagne pb-2 hover:border-ink transition-colors group"
                    >
                      Residences in {a.name}
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_outward
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
