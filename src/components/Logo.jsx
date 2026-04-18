export default function Logo({ className = '', showMark = true, light = true }) {
  const color = light ? 'text-cream' : 'text-ink'
  const accent = light ? 'border-cream/40' : 'border-ink/40'
  return (
    <div className={`flex items-center gap-2.5 md:gap-3 ${className}`}>
      {showMark && (
        <div className={`w-8 h-8 md:w-9 md:h-9 border ${accent} flex items-center justify-center shrink-0`}>
          <span className={`font-serif italic text-sm ${color} leading-none`}>M</span>
        </div>
      )}
      <div className="leading-tight">
        <div className={`text-[13px] sm:text-[15px] md:text-base font-serif italic ${color} tracking-wider whitespace-nowrap`}>
          Monte Carlo
        </div>
        <div className={`text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.35em] md:tracking-[0.4em] ${color} opacity-70`}>
          Estates
        </div>
      </div>
    </div>
  )
}
