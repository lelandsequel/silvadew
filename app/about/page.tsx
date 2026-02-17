import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Silvadew',
  description: 'Learn about Silvadew - custom software development and IT training company.',
}

export default function About() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">SILVADEW</Link>
          <div className="flex gap-8 text-sm text-white/60">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 grid-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">The Story of Silvadew</h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Silvadew is considered as one of the best interactive and live e-learning platforms transforming specialized online education. We provide our clients with top quality online courses that are reinforced by online assets. We offer to professionals the flexibility to learn at their own location and time, even from the comfort of their mobile gadgets.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Our online courses are creatively curated by professionals who monitor the IT industry and respond to requirements, changes and expectations from the IT industry, integrating them into our online courses.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Our Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-teal-400">14+</div>
                <div className="text-sm text-white/40 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400">550+</div>
                <div className="text-sm text-white/40 mt-1">Businesses Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400">2500+</div>
                <div className="text-sm text-white/40 mt-1">Courses Offered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400">25+</div>
                <div className="text-sm text-white/40 mt-1">Awards</div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-teal-400">Industry-Relevant Training</h3>
                <p className="text-white/50 text-sm">Our courses are continuously updated to reflect the latest IT industry trends and technologies.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-teal-400">Flexible Learning</h3>
                <p className="text-white/50 text-sm">Learn at your own pace, from anywhere, on any device - 100% virtual classroom.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-teal-400">Expert Instructors</h3>
                <p className="text-white/50 text-sm">Learn from industry professionals with real-world experience.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-teal-400">Career Support</h3>
                <p className="text-white/50 text-sm">Career coaching services designed to help you land your dream job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-semibold mb-2">SILVADEW</div>
              <div className="text-xs text-white/40">Custom software development & IT training</div>
            </div>
            <div className="text-xs text-white/30">© 2026 Silvadew Inc.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
