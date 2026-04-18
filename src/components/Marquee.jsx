export default function Marquee({ items }) {
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-ink/10 py-6 md:py-8 bg-cream-dark/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 mx-6 md:mx-12">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-ink/60 font-medium">
              {item}
            </span>
            <span className="mx-6 md:mx-12 text-champagne font-serif italic text-lg md:text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
