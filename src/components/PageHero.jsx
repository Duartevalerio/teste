import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, image, number }) {
  return (
    <section className="relative pt-28 sm:pt-32 h-[70vh] sm:h-[60vh] min-h-[480px] md:min-h-[520px] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl pb-12 sm:pb-16 md:pb-20">
        {number && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-champagne/60 font-serif italic text-sm mb-6 tracking-wider"
          >
            — Chapter {number} —
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-12 h-px bg-champagne" />
          <span className="text-champagne text-[10px] uppercase tracking-[0.4em] font-semibold">
            {eyebrow}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-[1.02] md:leading-[0.95] tracking-tight mb-6 max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-cream/70 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
