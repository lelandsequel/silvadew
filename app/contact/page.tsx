import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Silvadew',
  description: 'Contact Silvadew for custom software development and IT training services.',
}

export default function Contact() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">SILVADEW</a>
          <div className="flex gap-8 text-sm text-white/60">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Ready to start your project? Contact us today for a free consultation.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-teal-400 uppercase tracking-wider mb-2">Email</div>
                  <a href="mailto:info@silvadew.com" className="text-lg hover:text-teal-400 transition-colors">
                    info@silvadew.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-teal-400 uppercase tracking-wider mb-2">Phone</div>
                  <a href="tel:+15712763358" className="text-lg hover:text-teal-400 transition-colors">
                    +1 (571) 276-3358
                  </a>
                </div>
                <div>
                  <div className="text-xs text-teal-400 uppercase tracking-wider mb-2">Service Area</div>
                  <p className="text-white/50">Worldwide</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs text-teal-400 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-teal-400 outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-teal-400 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-teal-400 outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs text-teal-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-teal-400 outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="bg-white text-black px-8 py-4 font-medium hover:bg-teal-400 transition-colors">
                  Send Message
                </button>
              </form>
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
