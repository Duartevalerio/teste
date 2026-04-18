import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="pt-44 md:pt-56 pb-32 min-h-screen bg-cream text-center px-6 flex flex-col items-center justify-center">
        <div className="text-champagne font-serif italic text-lg mb-8 tracking-widest">— 404 —</div>
        <h1 className="text-6xl md:text-8xl font-serif text-ink mb-8 tracking-tight">
          A discreet silence.
        </h1>
        <p className="text-ink/60 max-w-md mx-auto mb-12 font-light text-lg">
          The page you seek has moved, or perhaps was never meant to be found.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
          <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
        </Link>
      </section>
    </PageTransition>
  )
}
