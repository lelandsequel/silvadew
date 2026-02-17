import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Premium BBQ",
  description: "Award-winning BBQ restaurant serving the finest smoked meats. Catering, events, and dine-in available.",
}

const menuItems = [
  { name: 'Smoked Brisket', price: '$18', desc: '12-hour oak smoked' },
  { name: 'Pulled Pork', price: '$14', desc: 'Classic Carolina style' },
  { name: 'Ribs', price: '$22', desc: 'Full rack, fall-off-bone' },
  { name: 'Chicken', price: '$12', desc: 'Applewood smoked' },
]

const services = [
  { icon: '🍖', title: 'Dine-In', desc: 'Family-friendly atmosphere' },
  { icon: '🚗', title: 'Takeout', desc: 'Quick & easy ordering' },
  { icon: '🎉', title: 'Catering', desc: 'Events of any size' },
  { icon: '🎁', title: 'Gift Cards', desc: 'Perfect for any occasion' },
]

const reviews = [
  { name: 'Mike T.', text: 'Best brisket in the state. Hands down.', rating: '★★★★★' },
  { name: 'Sarah L.', text: 'The pulled pork is absolutely incredible!', rating: '★★★★★' },
  { name: 'James R.', text: 'Catered my wedding. Guests are still talking about it.', rating: '★★★★★' },
]

export default function BentoPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/20 bg-[#111]/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-2xl">🐷</span>
            <span className="text-orange-500">PORKY'S</span>
            <span className="text-white/60">PIG FRY</span>
          </Link>
          <div className="flex gap-8 text-sm text-white/60">
            <Link href="/services" className="hidden md:block hover:text-orange-400 transition-colors">Services</Link>
            <Link href="/work" className="hover:text-orange-400 transition-colors">Work</Link>
            <Link href="/bento" className="hover:text-orange-400 transition-colors text-orange-500">Menu</Link>
            <Link href="/about" className="hidden md:block hover:text-orange-400 transition-colors">About</Link>
            <Link href="/contact" className="hidden md:block hover:text-orange-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#111] pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-orange-400 text-xs font-medium tracking-widest uppercase">Open Daily 11AM - 9PM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              SMOKED<br />
              <span className="text-orange-500">RIGHT</span>
            </h1>
            <p className="text-lg text-white/50 max-w-md mb-8 leading-relaxed">
              Award-winning BBQ since 1987. Oak-smoked brisket, Carolina pulled pork, and fall-off-the-bone ribs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#menu" className="bg-orange-500 text-black px-8 py-4 text-sm font-bold hover:bg-orange-400 transition-colors rounded-lg">
                View Menu
              </Link>
              <Link href="#order" className="border border-white/20 px-8 py-4 text-sm font-medium hover:border-orange-500/60 hover:text-orange-400 transition-colors rounded-lg">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-orange-500">37</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Years</div>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-orange-500">50K+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Customers</div>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-orange-500">12</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Awards</div>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-orange-500">4.9</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Rating</div>
            </div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            
            {/* Featured Item - Large */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-50"></div>
              <div className="relative z-10">
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">Chef's Special</div>
                <h3 className="text-3xl font-bold text-white mb-2">The Works Plate</h3>
                <p className="text-white/70">Brisket • Pulled Pork • Ribs • Two Sides</p>
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <div className="text-4xl font-bold text-white">$35</div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  Most Popular →
                </div>
              </div>
            </div>

            {/* Menu Items */}
            {menuItems.map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl hover:border-orange-500/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{item.name}</h4>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
                <p className="text-xs text-white/40">{item.desc}</p>
              </div>
            ))}

            {/* Services Grid */}
            <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-orange-500/10 transition-colors cursor-pointer">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{service.title}</div>
                      <div className="text-xs text-white/40">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Open Now
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>Mon - Thu</span>
                  <span>11AM - 8PM</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Fri - Sat</span>
                  <span>11AM - 9PM</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Sunday</span>
                  <span>12PM - 7PM</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">What People Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {reviews.map((review, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <div className="text-orange-500 text-sm mb-2">{review.rating}</div>
                    <p className="text-sm text-white/70 mb-2">"{review.text}"</p>
                    <div className="text-xs text-white/40">— {review.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="md:col-span-2 bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl p-8 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cater Your Event</h3>
                <p className="text-white/70 text-sm">From backyard BBQs to corporate events</p>
              </div>
              <Link href="/contact" className="bg-white text-red-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Location */}
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-semibold text-white mb-1">Find Us</h4>
              <p className="text-sm text-white/50">123 Smokehouse Lane<br />Austin, TX 78701</p>
            </div>

            {/* Contact */}
            <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <p className="text-sm text-white/50">(512) 555-BBQ1</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐷</span>
              <div>
                <div className="font-bold text-white">PORKY'S PIG FRY</div>
                <div className="text-xs text-white/40">Award-winning BBQ since 1987</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
            </div>
            <div className="text-xs text-white/30">
              © 2026 Porky's Pig Fry. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
