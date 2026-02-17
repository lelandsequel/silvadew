import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Contrast",
}

export default function Contrast() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Black */}
      <section className="bg-black text-white min-h-screen p-8 md:p-16">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-2xl font-bold tracking-widest">PORKY'S</span>
          <div className="flex gap-8 font-bold text-sm tracking-widest">
            <a href="#menu" className="hover:opacity-60">MENU</a>
            <a href="#about" className="hover:opacity-60">ABOUT</a>
            <a href="#contact" className="hover:opacity-60">CONTACT</a>
          </div>
        </nav>
        
        <div className="max-w-4xl">
          <p className="text-sm tracking-[0.5em] mb-6 text-white/60">CAJUN-STYLE BBQ SINCE 1987</p>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-8">
            PORKY'S<br/>PIG FRY
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-xl">
            From a trailer in Baton Rouge to the heart of Texas.
          </p>
        </div>
      </section>

      {/* Section 2: White */}
      <section id="menu" className="bg-white text-black p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">MENU</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {[
            { title: "SIGNATURE PLATE", desc: "Choice of pork, brisket, or catfish with two sides", price: "$16.99" },
            { title: "SMOKED RIBS", desc: "Full rack, St. Louis style, 14-hour smoke", price: "$24.99" },
            { title: "BRISKET", desc: "Prime cut, 16-hour smoke", price: "$21.99" },
            { title: "PULLED PORK", desc: "12-hour hand-pulled smoke", price: "$14.99" },
            { title: "CAJUN SAUSAGE", desc: "House-made in-house", price: "$12.99" },
            { title: "CATFISH", desc: "Gulf catfish, blackened or fried", price: "$18.99" },
          ].map((item, i) => (
            <div key={i} className="border-[3px] border-black p-6 hover:bg-black hover:text-white transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <span className="text-2xl font-black">{item.price}</span>
              </div>
              <p className="text-lg font-medium opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Black */}
      <section id="about" className="bg-black text-white p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">OUR STORY</h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Started in 1987 in a beat-up trailer in Baton Rouge. Three generations of smoke masters, and we still do it the old-fashioned way.
            </p>
          </div>
          <div className="border-l-4 border-white pl-8">
            <ul className="space-y-4 text-lg font-bold">
              <li>✓ 14-16 hour smoke</li>
              <li>✓ Hickory & oak</li>
              <li>✓ No shortcuts</li>
              <li>✓ Real BBQ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: White */}
      <section id="contact" className="bg-white text-black p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">FIND US</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div>
            <h3 className="text-3xl font-black mb-4">LOCATION</h3>
            <p className="text-xl font-medium">1234 Smokehouse Rd<br/>Houston, TX 77001</p>
          </div>
          <div>
            <h3 className="text-3xl font-black mb-4">HOURS</h3>
            <p className="text-xl font-medium">Mon-Sat: 11am - 9pm<br/>Closed Sunday</p>
            <p className="text-xl font-bold mt-4">(713) 555-7427</p>
          </div>
        </div>

        <div className="mt-16 flex gap-4">
          <button className="bg-black text-white px-8 py-4 text-xl font-bold hover:bg-black/80 transition-colors">
            ORDER ONLINE
          </button>
          <button className="border-[3px] border-black px-8 py-4 text-xl font-bold hover:bg-black hover:text-white transition-colors">
            CATERING
          </button>
        </div>
      </section>

      {/* Footer: Black */}
      <footer className="bg-black text-white py-8 px-8">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <span className="text-xl font-black tracking-widest">PORKY'S PIG FRY</span>
          <span className="font-bold tracking-widest">© 2026</span>
        </div>
      </footer>
    </div>
  )
}
