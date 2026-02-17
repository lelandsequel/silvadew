import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Editorial",
}

export default function Editorial() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-neutral-900 font-serif">
      {/* Header Bar */}
      <div className="border-b-2 border-black py-3 px-6 flex justify-between items-center">
        <span className="font-bold tracking-wide">PORKY'S PIG FRY</span>
        <span className="text-xs uppercase tracking-[0.2em]">Cajun-Style BBQ since 1987</span>
      </div>

      {/* Nav */}
      <nav className="py-4 px-6 flex justify-center gap-8 border-b border-neutral-300">
        {['Story', 'Menu', 'Visit', 'Catering'].map(link => (
          <Link key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-neutral-600 transition-colors">
            {link}
          </Link>
        ))}
      </nav>

      {/* Hero */}
      <main className="max-w-3xl mx-auto p-8">
        <p className="text-lg text-neutral-500 mb-12 font-sans">From a humble trailer in Baton Rouge to the heart of Texas BBQ country</p>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Where Smoke<br/>Meets Soul
        </h1>
        
        <p className="text-xl leading-relaxed border-l-4 border-black pl-6 mb-12 italic">
          "Started in a small trailer in Baton Rouge, now serving the best Cajun-style BBQ in Texas. Our recipes have been passed down three generations, and we still smoke everything the old-fashioned way."
        </p>

        {/* Story Section */}
        <section id="story" className="mb-16">
          <h2 className="text-2xl font-bold border-b border-neutral-300 pb-2 mb-6 uppercase tracking-wider">Our Story</h2>
          <p className="text-lg leading-relaxed text-neutral-700 mb-4">
            Porky's Pig Fry began in 1987 when Uncle Earl loaded his custom smoker into a beat-up trailer and set up shop on a corner in Baton Rouge. Three decades later, the tradition continues in Houston, Texas.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700">
            We still use the same spice blend Earl perfected, and we still smoke our meats for 14-16 hours over hickory and oak. No shortcuts. No rush. Just real BBQ.
          </p>
        </section>

        {/* Menu Section */}
        <section id="menu" className="mb-16">
          <h2 className="text-2xl font-bold border-b border-neutral-300 pb-2 mb-6 uppercase tracking-wider">Menu</h2>
          
          <div className="space-y-6">
            {[
              { name: "Signature Plate", desc: "Your choice of pork, brisket, or catfish with two sides", price: "$16.99", tag: "Popular" },
              { name: "Smoked Ribs", desc: "Full rack of St. Louis style ribs, 14-hour smoke", price: "$24.99" },
              { name: "Brisket", desc: "Prime cut, 16-hour smoke, melt in your mouth", price: "$21.99" },
              { name: "Pulled Pork", desc: "Hand-pulled, 12-hour smoke", price: "$14.99" },
              { name: "Cajun Sausage", desc: "House-made and smoked in-house", price: "$12.99" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-start border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    {item.tag && <span className="text-xs bg-black text-white px-2 py-0.5">{item.tag}</span>}
                  </div>
                  <p className="text-neutral-600 mt-1">{item.desc}</p>
                </div>
                <span className="text-xl font-bold ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b border-neutral-300 pb-2 mb-6 uppercase tracking-wider">Sides</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Red Beans & Rice", "Jambalaya", "Collard Greens", "Hush Puppies", "Mac & Cheese", "Baked Beans"].map((side, i) => (
              <div key={i} className="text-lg text-neutral-700">{side}</div>
            ))}
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="mb-16">
          <h2 className="text-2xl font-bold border-b border-neutral-300 pb-2 mb-6 uppercase tracking-wider">Visit Us</h2>
          <div className="text-lg">
            <p className="mb-2"><strong>1234 Smokehouse Rd</strong>, Houston, TX 77001</p>
            <p className="mb-2">Mon-Sat: 11am - 9pm</p>
            <p className="mb-4">(713) 555-7427</p>
            <a href="#" className="underline hover:no-underline">Get Directions →</a>
          </div>
        </section>

        {/* Catering */}
        <section id="catering" className="mb-16 bg-neutral-900 text-[#F5F0E8] p-8">
          <h2 className="text-2xl font-bold mb-4">Catering</h2>
          <p className="text-lg mb-4">Bring the smoke to your event. Full-service catering available for weddings, corporate events, and parties.</p>
          <a href="#" className="inline-block bg-[#F5F0E8] text-neutral-900 px-6 py-3 font-bold hover:bg-white transition-colors">Request Quote</a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black py-6 px-6 text-center">
        <p className="text-sm tracking-widest uppercase">© 2026 Porky's Pig Fry — Baton Rouge to Houston</p>
      </footer>
    </div>
  )
}
