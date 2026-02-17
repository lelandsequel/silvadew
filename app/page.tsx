import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Silvadew | Custom Software Development & IT Training',
  description: 'Silvadew develops scalable, reliable custom software solutions for businesses. Also offering IT training, web development, digital marketing, and career development programs.',
}

const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '550+', label: 'Businesses Served' },
  { value: '2500+', label: 'Courses' },
  { value: '25+', label: 'Awards' },
]

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">SILVADEW</Link>
          <div className="flex gap-8 text-sm text-white/60">
            <Link href="/services" className="hidden md:block hover:text-white transition-colors">Services</Link>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/about" className="hidden md:block hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hidden md:block hover:text-white transition-colors">Contact</Link>
            <Link href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Static image fallback */}
      <section className="relative min-h-screen flex items-center grid-bg">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-3xl">
            <div className="text-teal-400 text-xs font-medium tracking-widest uppercase mb-6">
              Custom Software & IT Training
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              Let's Start Something<br />
              <span className="text-teal-400">Great.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl mb-6 leading-relaxed">
              Silvadew develops scalable, reliable custom software solutions for businesses of all sizes and industries, turning ideas into top-performing digital products customers truly value.
            </p>
            <p className="text-lg text-white/40 mb-10 leading-relaxed">
              Join 550+ businesses trusting Silvadew to drive revenue through stellar web design solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-teal-400 transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border border-white/20 px-8 py-4 text-sm font-medium hover:border-white/60 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-black">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            <Link href="/services" className="bg-black p-8 hover:bg-white/5 transition-colors group">
              <div className="text-xs text-teal-400 font-medium tracking-widest uppercase mb-3">Services</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                What We Do
              </h3>
              <p className="text-white/50 leading-relaxed">
                Custom software, web development, IT training, and digital marketing.
              </p>
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/about" className="bg-black p-8 hover:bg-white/5 transition-colors group">
              <div className="text-xs text-teal-400 font-medium tracking-widest uppercase mb-3">About</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                Who We Are
              </h3>
              <p className="text-white/50 leading-relaxed">
                14+ years experience, 550+ businesses served worldwide.
              </p>
            </Link>
            <Link href="/contact" className="bg-black p-8 hover:bg-white/5 transition-colors group">
              <div className="text-xs text-teal-400 font-medium tracking-widest uppercase mb-3">Contact</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                Get in Touch
              </h3>
              <p className="text-white/50 leading-relaxed">
                Ready to start your project? Let us know how we can help.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-semibold mb-2">SILVADEW</div>
              <div className="text-xs text-white/40">
                Custom software development & IT training
              </div>
            </div>
            <div className="text-xs text-white/30">
              © 2026 Silvadew Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
