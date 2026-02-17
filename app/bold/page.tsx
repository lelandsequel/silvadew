import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Authentic BBQ Restaurant",
  description: "Mouth-watering authentic BBQ served with bold flavor. Visit Porky's Pig Fry for the best smoked meats in town!",
}

const services = [
  {
    title: "SMOKED BRISKET",
    description: "Low and slow for 14 hours over hickory wood. Tender, juicy, and packed with smoke flavor.",
    price: "$18.99",
  },
  {
    title: "PORKY'S RIBS",
    description: "Fall-off-the-bone baby back ribs dry-rubbed with our secret blend and glazed on the pit.",
    price: "$24.99",
  },
  {
    title: "SMOKED CHICKEN",
    description: "Whole chicken smoked to perfection with a crispy golden skin that'll make you weak in the knees.",
    price: "$14.99",
  },
  {
    title: "PULLED PORK",
    description: "Slow-smoked shoulder, hand-pulled and served with our award-winning vinegar sauce.",
    price: "$12.99",
  },
]

const menuHighlights = [
  "TRI-TIP SANDWICH",
  "BBQ PLATTERS",
  "SIDE OF MAC & CHEESE",
  "COLESLAW",
  "BAKED BEANS",
  "CORNBREAD MUFFINS",
]

export default function BoldPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FACC15] border-b-4 border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/bold" className="text-2xl font-black tracking-tighter uppercase text-black">
            PORKY'S PIG FRY
          </Link>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
            <Link href="/bold#menu" className="hidden md:block hover:underline decoration-4 underline-offset-4">Menu</Link>
            <Link href="/bold#services" className="hidden md:block hover:underline decoration-4 underline-offset-4">Order</Link>
            <Link href="/bold#contact" className="hidden md:block hover:underline decoration-4 underline-offset-4">Contact</Link>
            <Link href="/bold#about" className="hover:underline decoration-4 underline-offset-4">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FACC15]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FACC15] via-transparent to-[#FACC15]"></div>
        
        <div className="relative z-10 container mx-auto px-6 pt-24">
          <div className="max-w-4xl">
            <div className="inline-block bg-black text-[#FACC15] px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-black">
              🔥 EST. 1987 🔥
            </div>
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-black mb-8" style={{ textShadow: '4px 4px 0px #000' }}>
              PORKY'S<br />
              <span className="text-transparent stroke-text">PIG FRY</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase text-black max-w-xl mb-8 leading-tight">
              Authentic Southern BBQ.<br />
              Bold Flavor. No Compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/bold#menu" className="bg-black text-[#FACC15] px-10 py-5 text-lg font-black uppercase hover:bg-white hover:text-black transition-all border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
                View Menu
              </Link>
              <Link href="/bold#contact" className="bg-white text-black px-10 py-5 text-lg font-black uppercase hover:bg-black hover:text-[#FACC15] transition-all border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-8 bg-black"></div>

      {/* About Section */}
      <section id="about" className="py-24 bg-black text-[#FACC15]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                OUR STORY
              </h2>
              <div className="w-24 h-4 bg-[#FACC15] mb-8"></div>
              <p className="text-xl md:text-2xl font-bold uppercase leading-relaxed mb-6">
                It started with a pig. A big one. And a dream.
              </p>
              <p className="text-lg text-[#FACC15]/70 leading-relaxed mb-6">
                Back in 1987, Porky himself fired up his first smoker in a dusty parking lot. 
                People thought he was crazy. Nobody had heard of "craft BBQ" back then. 
                But Porky didn't care. He knew the truth: good BBQ takes time. 
                14 hours low and slow. Hickory wood. No shortcuts.
              </p>
              <p className="text-lg text-[#FACC15]/70 leading-relaxed">
                Today, we keep that same fire burning. Same recipes. Same dedication. 
                Same commitment to making the best damn BBQ you've ever tasted.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FACC15] border-4 border-black"></div>
              <div className="relative bg-black aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-black text-[#FACC15]">37</div>
                  <div className="text-2xl font-bold uppercase tracking-widest">Years of Smoke</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Bar */}
      <section className="bg-[#FACC15] py-8 border-y-4 border-black">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {menuHighlights.map((item, i) => (
              <div key={i} className="flex-shrink-0 text-2xl md:text-3xl font-black uppercase text-black tracking-tighter">
                {item} ✦ {item} ✦ {item} ✦ {item} ✦ 
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Order Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-black uppercase text-[#FACC15] leading-none mb-4">
              THE MENU
            </h2>
            <p className="text-xl font-bold uppercase text-[#FACC15]/70">
              Click to Order • Pickup & Delivery Available
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#FACC15] border-4 border-[#FACC15] p-8 hover:bg-white hover:border-black hover:shadow-[12px_12px_0px_0px_#FACC15] transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-black leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-2xl md:text-3xl font-black text-black bg-white px-3 py-1 border-2 border-black">
                    {item.price}
                  </div>
                </div>
                <p className="text-black/80 font-bold uppercase text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-black font-black uppercase tracking-wider text-sm">
                  <span className="group-hover:translate-x-2 transition-transform">→</span> 
                  Add to Order
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-[#FACC15] border-4 border-black px-12 py-6">
              <div className="text-3xl md:text-5xl font-black uppercase text-black mb-2">
                COMBO PLATTERS
              </div>
              <p className="font-bold uppercase text-black/70">
                Feed the whole family. Feed yourself. We don't judge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-8 bg-[#FACC15]"></div>

      {/* Hours & Location */}
      <section id="menu" className="py-24 bg-[#FACC15]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Hours */}
            <div className="bg-black border-4 border-black p-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase text-[#FACC15] leading-none mb-8">
                HOURS
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'MON - THU', time: '11AM - 9PM' },
                  { day: 'FRI - SAT', time: '11AM - 10PM' },
                  { day: 'SUN', time: '12PM - 8PM' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b-2 border-[#FACC15]/30 pb-4">
                    <span className="text-xl font-bold uppercase text-[#FACC15]">{item.day}</span>
                    <span className="text-xl font-black uppercase text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-black border-4 border-black p-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase text-[#FACC15] leading-none mb-8">
                LOCATION
              </h3>
              <div className="space-y-4">
                <div className="text-2xl font-bold uppercase text-white">
                  123 SMOKEHOUSE RD
                </div>
                <div className="text-xl font-bold uppercase text-[#FACC15]/70">
                  Downtown BBQ District<br />
                  Austin, TX 78701
                </div>
                <div className="pt-4">
                  <div className="text-lg font-bold text-[#FACC15]">
                    📞 (512) 555-SMOKE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-black uppercase text-[#FACC15] leading-none mb-4">
              CONTACT US
            </h2>
            <p className="text-xl font-bold uppercase text-[#FACC15]/70">
              Questions? Catering inquiries? Just want to say hi?
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase text-[#FACC15] mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#FACC15] border-4 border-[#FACC15] px-6 py-4 text-black font-bold uppercase placeholder:text-black/50 focus:outline-none focus:border-white"
                  placeholder="WHO ARE YOU?"
                />
              </div>
              <div>
                <label className="block text-sm font-black uppercase text-[#FACC15] mb-2">Email or Phone</label>
                <input 
                  type="text" 
                  className="w-full bg-[#FACC15] border-4 border-[#FACC15] px-6 py-4 text-black font-bold uppercase placeholder:text-black/50 focus:outline-none focus:border-white"
                  placeholder="HOW DO WE REACH YOU?"
                />
              </div>
              <div>
                <label className="block text-sm font-black uppercase text-[#FACC15] mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-[#FACC15] border-4 border-[#FACC15] px-6 py-4 text-black font-bold uppercase placeholder:text-black/50 focus:outline-none focus:border-white resize-none"
                  placeholder="WHAT'S ON YOUR MIND?"
                />
              </div>
              <button className="w-full bg-[#FACC15] text-black px-10 py-6 text-xl font-black uppercase hover:bg-white transition-all border-4 border-[#FACC15] hover:border-white">
                SEND IT 🔥
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Big Footer */}
      <footer className="bg-[#FACC15] py-16 border-t-4 border-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-black uppercase text-black mb-4">PORKY'S</div>
              <p className="font-bold uppercase text-black/70">
                Authentic BBQ since 1987.<br />
                Keep the fire burning.
              </p>
            </div>
            <div>
              <div className="text-sm font-black uppercase text-black mb-4 tracking-widest">Quick Links</div>
              <div className="space-y-2">
                <Link href="/bold#menu" className="block text-black font-bold uppercase hover:underline decoration-2">Menu</Link>
                <Link href="/bold#services" className="block text-black font-bold uppercase hover:underline decoration-2">Order Online</Link>
                <Link href="/bold#contact" className="block text-black font-bold uppercase hover:underline decoration-2">Contact</Link>
                <Link href="/bold#about" className="block text-black font-bold uppercase hover:underline decoration-2">About Us</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-black uppercase text-black mb-4 tracking-widest">Follow The Smoke</div>
              <div className="flex gap-4 text-2xl">
                <span className="cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-4 border-black text-center">
            <div className="text-3xl md:text-5xl font-black uppercase text-black tracking-tighter">
              PORKY'S PIG FRY 🔥
            </div>
            <p className="font-bold uppercase text-black/60 mt-2">
              © 2026 Porky's Pig Fry. All rights reserved. Made with smoke and soul.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
