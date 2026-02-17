import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Bold BBQ",
}

export default function Bold() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-sans">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-yellow-400 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/bold" className="text-2xl font-black tracking-tighter uppercase">Porky's Pig Fry</Link>
          <div className="flex gap-6 font-bold text-sm uppercase">
            <Link href="/bold" className="hover:underline underline-offset-4">Home</Link>
            <Link href="/bold#menu" className="hover:underline underline-offset-4">Menu</Link>
            <Link href="/bold#contact" className="hover:underline underline-offset-4">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[80vh] bg-black text-yellow-400 flex flex-col justify-between p-8">
        <div className="flex justify-between font-bold text-xl">
          <span>EST. 1987</span>
          <span>BATON ROUGE → TEXAS</span>
        </div>
        <div>
          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter uppercase">
            Porky's<br/>Pig Fry
          </h1>
          <p className="text-3xl font-bold mt-6 text-yellow-400">CAJUN-STYLE BBQ</p>
        </div>
        <div className="text-xl font-bold text-gray-500">
          ↓ SCROLL FOR MENU
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-yellow-400 p-8 md:p-16">
        <div className="border-4 border-black">
          <div className="bg-black text-yellow-400 p-4 md:p-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Menu</h2>
          </div>
          <div className="grid md:grid-cols-2">
            {[
              { title: "SIGNATURE PLATES", desc: "Your choice of pork, brisket, or catfish with two sides", price: "$16.99" },
              { title: "SMOKED RIBS", desc: "14-hour smoked St. Louis style ribs", price: "$24.99" },
              { title: "PULLED PORK", desc: "Slow-smoked for 12 hours, hand-pulled", price: "$14.99" },
              { title: "BRISKET", desc: "Prime cut, 16-hour smoke", price: "$21.99" },
              { title: "CAJUN SAUSAGE", desc: "House-made and smoked in-house", price: "$12.99" },
              { title: "CATFISH", desc: "Fresh Gulf catfish, blackened or fried", price: "$18.99" },
            ].map((item, i) => (
              <div key={i} className="border-b-4 border-r-4 border-black p-6 md:p-8 hover:bg-black hover:text-yellow-400 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl md:text-3xl font-black uppercase">{item.title}</h3>
                  <span className="text-2xl md:text-3xl font-black">{item.price}</span>
                </div>
                <p className="font-bold text-lg opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sides */}
      <section className="bg-black text-yellow-400 p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter">Sides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Red Beans & Rice", "Jambalaya", "Collard Greens", "Hush Puppies", "Mac & Cheese", "Baked Beans", "Corn on the Cob", "Sweet Potato"].map((side, i) => (
            <div key={i} className="border-4 border-yellow-400 p-4 text-center hover:bg-yellow-400 hover:text-black transition-colors">
              <span className="text-xl font-black uppercase">{side}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-yellow-400 p-8 md:p-16">
        <div className="border-4 border-black p-8 md:p-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter">Get Some</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-black mb-2">(713) 555-7427</p>
              <p className="text-xl font-bold">1234 Smokehouse Rd, Houston, TX</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link href="#" className="bg-black text-yellow-400 text-center py-4 text-xl font-black uppercase hover:bg-white hover:text-black transition-colors">
                Order Online
              </Link>
              <Link href="#" className="border-4 border-black text-center py-4 text-xl font-black uppercase hover:bg-black hover:text-yellow-400 transition-colors">
                Catering
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-8 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-black uppercase">© 2026 Porky's Pig Fry</span>
          <span className="font-bold">CAJUN-STYLE BBQ SINCE 1987</span>
        </div>
      </footer>
    </div>
  )
}
