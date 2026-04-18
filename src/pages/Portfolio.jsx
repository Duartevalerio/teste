import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import PageHero from '../components/PageHero.jsx'
import { properties } from '../data/properties.js'

const filters = ['All', 'For Sale', 'For Lease', 'Off-Market']

export default function Portfolio() {
  const [params] = useSearchParams()
  const initialQ = params.get('q') || ''
  const initialType = params.get('type') || 'All'

  const [active, setActive] = useState(
    initialType === 'Purchase' ? 'For Sale' : initialType === 'Lease' ? 'For Lease' : 'All'
  )
  const [query, setQuery] = useState(initialQ)

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchFilter = active === 'All' || p.status === active
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q || p.name.toLowerCase().includes(q) || p.area_name.toLowerCase().includes(q)
      return matchFilter && matchQuery
    })
  }, [active, query])

  return (
    <PageTransition>
      <PageHero
        number="I"
        eyebrow="Full Collection"
        title="Our Portfolio"
        subtitle="A considered selection of on-market and off-market residences across the Principality — each inspected personally by our advisory team."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 pb-8 md:pb-10 border-b border-ink/10">
            <div className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1 sm:pb-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`shrink-0 text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-semibold px-4 sm:px-6 py-3 transition-all duration-300 ${
                    active === f
                      ? 'bg-ink text-cream'
                      : 'bg-transparent text-ink/60 hover:text-ink border border-ink/10 hover:border-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 text-[20px]">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or area"
                className="w-full pl-12 pr-4 py-3.5 bg-cream-dark/40 border border-transparent text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>
          </div>

          <div className="mb-10 flex items-center gap-4 text-ink/50 text-[10px] uppercase tracking-[0.3em]">
            <span className="font-serif italic text-champagne-dark text-sm">
              {String(filtered.length).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-ink/20" />
            <span>{filtered.length === 1 ? 'Residence' : 'Residences'}</span>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-ink/50 py-24 font-serif italic text-xl">
              No residences match your criteria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
