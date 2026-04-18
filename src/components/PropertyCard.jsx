import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PropertyCard({ property, index = 0, variant = 'default' }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/portfolio/${property.id}`} className="block">
        <div className="relative overflow-hidden portrait-aspect bg-ink/10 mb-8">
          <img
            className="w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            src={property.image}
            alt={property.alt || property.name}
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-start">
            <span className="bg-cream/95 backdrop-blur-sm text-ink text-[9px] uppercase tracking-[0.25em] md:tracking-[0.3em] px-3 md:px-4 py-1.5 md:py-2 font-semibold">
              {property.status}
            </span>
            <span className="text-cream/80 font-serif text-sm">{num}</span>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end">
            <div className="flex items-center gap-2 md:gap-4 text-cream text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] font-medium md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
              <span>{property.beds} Bd</span>
              <span className="w-1 h-1 rounded-full bg-champagne" />
              <span>{property.baths} Ba</span>
              <span className="w-1 h-1 rounded-full bg-champagne" />
              <span>{property.area} m²</span>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 right-6 -translate-y-1/2 w-11 h-11 rounded-full bg-champagne items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <span className="material-symbols-outlined text-ink text-[18px]">arrow_outward</span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] text-champagne-dark mb-2 font-medium">
              {property.area_name}
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-ink leading-tight group-hover:text-champagne-dark transition-colors duration-500">
              {property.name}
            </h4>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[9px] uppercase tracking-[0.3em] text-ink/40 mb-1">Price</div>
            <div className="text-ink font-serif text-base sm:text-lg">{property.price}</div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
