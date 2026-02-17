import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Silvadew',
  description: 'Learn about Silvadew - custom software development and IT training company.',
}

export default function About() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">SILVADEW</a>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 grid-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Silvadew is a technology company specializing in custom software development and IT training. 
                We help businesses of all sizes transform their operations through scalable, reliable digital solutions.
              </p>
              <p className="text-white/50 leading-relaxed">
                With over 14 years of combined experience and more than 550 businesses served worldwide, 
                we have the expertise to handle projects of any scale.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
              <ul className="space-y-4 text-white/50">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400 mt-2"></span>
                  <span>Custom software development for enterprise and SMB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400 mt-2"></span>
                  <span>Web and mobile application development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400 mt-2"></span>
                  <span>IT certification training (AWS, Azure, Cisco)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400 mt-2"></span>
                  <span>Digital marketing and SEO services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-400 mt-2"></span>
                  <span>Career coaching and job placement assistance</span>
                </li>
              </ul>
            </div>
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
