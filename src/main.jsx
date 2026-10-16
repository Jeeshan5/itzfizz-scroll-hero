import React, { useLayoutEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

function CarArtwork() {
  return (
    <svg className="car-art" viewBox="0 0 1050 430" role="img" aria-label="Stylized silver sports car illustration" fill="none">
      <defs>
        <linearGradient id="body" x1="240" y1="110" x2="740" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fdfdfb"/><stop offset=".3" stopColor="#c9cbc7"/><stop offset=".55" stopColor="#f4f4ef"/><stop offset=".78" stopColor="#888d88"/><stop offset="1" stopColor="#d8dad4"/>
        </linearGradient>
        <linearGradient id="glass" x1="380" y1="110" x2="620" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#343a38"/><stop offset="1" stopColor="#111513"/>
        </linearGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f7f7f2"/><stop offset=".5" stopColor="#777d78"/><stop offset="1" stopColor="#dfe0dc"/>
        </linearGradient>
        <filter id="shadow" x="90" y="220" width="880" height="180" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="18"/>
        </filter>
      </defs>
      <ellipse cx="535" cy="330" rx="395" ry="40" fill="#161a16" opacity=".24" filter="url(#shadow)"/>
      <path d="M142 277c23-27 66-49 133-64l107-96c24-21 48-31 85-33l124-4c35 0 58 11 83 33l91 82 67 19c27 8 43 26 48 50l5 27-52 16H205l-67-12 4-18Z" fill="url(#body)" stroke="#777d78" strokeWidth="2"/>
      <path d="m396 126-96 87 173 1 5-132c-31 1-56 12-82 44Z" fill="url(#glass)" stroke="#aeb3ad" strokeWidth="3"/>
      <path d="m497 82 94-1c29 0 49 9 70 29l78 77-233 27-9-132Z" fill="url(#glass)" stroke="#aeb3ad" strokeWidth="3"/>
      <path d="m304 213 173 1 1 19-194 3 20-23Z" fill="#747b75"/>
      <path d="m500 214 239-27 25 26-264 24v-23Z" fill="#555c57"/>
      <path d="M155 277c39-13 93-17 142-15l105 8 221-1 158-7c56-2 85 4 103 22l-5 17-73 13H208l-60-13 7-24Z" fill="url(#body)" stroke="#777d78" strokeWidth="2"/>
      <path d="m172 276 76-13 47 2-16 13-106 9-1-11Z" fill="#f8f8f2"/>
      <path d="m797 260 68 5 30 16-89-4-9-17Z" fill="#f6f6ef"/>
      <path d="M340 272h190" stroke="#6e746e" strokeWidth="2" strokeLinecap="round"/>
      <path d="m614 270 103-5" stroke="#6e746e" strokeWidth="2" strokeLinecap="round"/>
      <path d="m210 310 28 3m551-5 35-2" stroke="#242a25" strokeWidth="4" strokeLinecap="round"/>
      <path d="M266 305c0-43 31-74 71-74s72 31 72 74-32 73-72 73-71-30-71-73Z" fill="#171b19"/>
      <circle cx="337" cy="305" r="49" fill="#303632" stroke="#707771" strokeWidth="3"/>
      <circle cx="337" cy="305" r="35" fill="url(#rim)" stroke="#aeb3ad" strokeWidth="2"/>
      <circle cx="337" cy="305" r="10" fill="#343a36"/>
      <path d="M337 272v66M304 305h66m-56-23 46 46m0-46-46 46" stroke="#747b75" strokeWidth="5"/>
      <path d="M683 305c0-43 31-74 71-74s72 31 72 74-32 73-72 73-71-30-71-73Z" fill="#171b19"/>
      <circle cx="754" cy="305" r="49" fill="#303632" stroke="#707771" strokeWidth="3"/>
      <circle cx="754" cy="305" r="35" fill="url(#rim)" stroke="#aeb3ad" strokeWidth="2"/>
      <circle cx="754" cy="305" r="10" fill="#343a36"/>
      <path d="M754 272v66m-33-33h66m-56-23 46 46m0-46-46 46" stroke="#747b75" strokeWidth="5"/>
      <path d="m855 280 30 4-1 9-32-2 3-11Z" fill="#f8f8f0"/>
      <path d="m158 289 37 5" stroke="#f8f8f0" strokeWidth="5" strokeLinecap="round"/>
      <path d="m473 237 3 37m30-40 1 40" stroke="#858b85" strokeWidth="2"/>
      <path d="m535 241 74-8" stroke="#fff" strokeOpacity=".8" strokeWidth="2"/>
      <path d="M232 250c30-13 66-19 93-21" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".75"/>
    </svg>
  )
}

function App() {
  const root = useRef(null)
  const car = useRef(null)
  const visual = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.eyebrow, .headline-line', {
        y: 32, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        delay: 0.15,
      })
      gsap.from('.stat-card', {
        y: 24, opacity: 0, duration: 0.75, stagger: 0.13, ease: 'power3.out',
        delay: 0.6,
      })
      gsap.from('.visual-label', { opacity: 0, y: 12, duration: 0.8, delay: 0.8 })
      gsap.to(car.current, {
        x: 150, y: -26, rotate: -4, scale: 1.08, ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
      gsap.to(visual.current, {
        yPercent: 18, ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })
      gsap.from('.manifesto-inner > *', {
        y: 40, opacity: 0, stagger: 0.16, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto', start: 'top 75%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className="overflow-hidden bg-paper text-ink">
      <nav className="site-nav relative z-20 mx-auto flex items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="brand" aria-label="Itzfizz home">itzfizz<span>®</span></a>
        <div className="hidden items-center gap-9 md:flex">
          <a className="nav-link" href="#approach">Our approach</a>
          <a className="nav-link" href="#impact">Our impact</a>
          <a className="nav-cta" href="mailto:hello@itzfizz.com">Let's talk <ArrowUpRight size={15}/></a>
        </div>
        <button className="rounded-full border border-black/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>
      {menuOpen && <div className="mobile-menu relative z-30 flex flex-col gap-4 px-6 pb-6 md:hidden"><a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#impact" onClick={() => setMenuOpen(false)}>Our impact</a><a href="mailto:hello@itzfizz.com">Let's talk ↗</a></div>}

      <section id="top" className="hero relative flex min-h-[calc(100svh-76px)] flex-col px-6 pt-10 md:px-12 md:pt-12">
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <div className="eyebrow mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-black/55 md:text-xs">
            <span className="h-2 w-2 rounded-full bg-lime-500" style={{background:'#b6dc3e'}}/> Independent digital studio <span className="hidden sm:inline">· India / Everywhere</span>
          </div>
          <h1 className="hero-title font-extrabold uppercase leading-[.91] tracking-[-.075em]">
            <span className="headline-line block">Welcome</span>
            <span className="headline-line block pl-[8vw] md:pl-[12vw]">to <span className="italic font-medium">Itzfizz.</span></span>
          </h1>
          <div className="mt-7 flex flex-col justify-between gap-7 md:mt-9 md:flex-row md:items-end">
            <p className="max-w-[330px] text-sm leading-6 text-black/60 md:ml-[12vw] md:text-base">We turn ambitious ideas into digital experiences that move people — and businesses — forward.</p>
            <div id="impact" className="stats-grid grid grid-cols-3 gap-3 md:gap-5">
              <div className="stat-card border-l border-black/15 pl-3 md:pl-5"><div className="stat-number">+42<span>%</span></div><p>More meaningful<br/>engagement</p></div>
              <div className="stat-card border-l border-black/15 pl-3 md:pl-5"><div className="stat-number">3.8<span>x</span></div><p>Faster digital<br/>experiences</p></div>
              <div className="stat-card border-l border-black/15 pl-3 md:pl-5"><div className="stat-number">98<span>%</span></div><p>Client-first<br/>mindset</p></div>
            </div>
          </div>
        </div>

        <div className="car-stage relative mx-auto mt-auto w-full max-w-[1440px]" ref={visual}>
          <div className="visual-label absolute left-0 top-3 z-10 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.22em] text-black/45 md:text-[10px]"><span className="h-px w-7 bg-black/35"/> Design in motion / 001</div>
          <div className="car-glow absolute left-1/2 top-[44%] h-36 w-[70%] -translate-x-1/2 rounded-[100%] bg-lime-300/30 blur-3xl"/>
          <div className="car-wrap absolute inset-x-[-16%] bottom-[-2%] md:inset-x-[0%]" ref={car}><CarArtwork /></div>
          <div className="absolute bottom-2 right-0 z-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-black/45 md:bottom-5"><span>Scroll to explore</span><ArrowDownRight size={16}/></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/15"/>
        </div>
      </section>

      <section id="approach" className="manifesto relative bg-ink px-6 py-24 text-paper md:px-12 md:py-36">
        <div className="manifesto-inner mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
          <div><p className="font-mono text-[10px] uppercase tracking-[.25em] text-lime">01 / Our approach</p><p className="mt-5 max-w-[250px] text-sm leading-6 text-white/55">Curiosity first. Craft always. Impact by design.</p></div>
          <div><h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.055em] md:text-6xl">Good digital should feel effortless. <span className="text-white/35">Getting there takes intention.</span></h2><div className="mt-10 flex flex-col justify-between gap-7 border-t border-white/15 pt-6 sm:flex-row sm:items-end"><p className="max-w-md text-sm leading-6 text-white/55">From the first sketch to the final interaction, we bring strategy, design, and technology together to make every detail count.</p><a href="mailto:hello@itzfizz.com" className="inline-flex w-fit items-center gap-3 rounded-full bg-lime px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:translate-y-[-2px]">Build something good <ArrowUpRight size={16}/></a></div></div>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-5 bg-paper px-6 py-7 text-xs text-black/50 md:flex-row md:items-center md:px-12"><a href="#top" className="brand text-2xl">itzfizz<span>®</span></a><p>Independent thinking. Digital that moves you.</p><p className="font-mono">© 2026 ITZFIZZ DIGITAL</p></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
