import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
  number
}) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls} mb-16 md:mb-24 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {number && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-[10px] uppercase tracking-[0.4em] ${light ? 'text-cream/40' : 'text-ink/40'} mb-6 font-serif italic`}
        >
          — {number} —
        </motion.div>
      )}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className={`h-px w-10 ${light ? 'bg-champagne' : 'bg-champagne'}`} />
          <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold ${light ? 'text-champagne-light' : 'text-champagne-dark'}`}>
            {eyebrow}
          </span>
          <span className={`h-px w-10 ${align === 'center' ? 'bg-champagne' : 'hidden'}`} />
        </motion.div>
      )}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] md:leading-[1.05] tracking-tight text-balance ${light ? 'text-cream' : 'text-ink'}`}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`mt-6 md:mt-8 text-sm sm:text-base md:text-lg font-light leading-relaxed text-pretty ${light ? 'text-cream/70' : 'text-ink/70'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
