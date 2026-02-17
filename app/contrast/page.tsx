import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Premium BBQ",
  description: 'Authentic Texas-style BBQ. Smokehouse favorites, brisket, ribs, and more.',
}

const services = [
  {
    title: 'SMOKED BRISKET',
    description: '14-hour oak and pecan smoke. Zero shortcuts. Pure Texas tradition.',
    price: '$28/lb',
  },
  {
    title: 'PORK RIBS',
    description: 'St. Louis cut, dry-rubbed, slow-smoked until they fall off the bone.',
    price: '$24/rack',
  },
  {
    title: 'TEXAS HOT LINK',
    description: 'House-made sausage links, spiced just right, smoked fresh daily.',
    price: '$8/each',
  },
  {
    title: 'SMOKED CHICKEN',
    description: 'Whole hen, herb-brined, applewood smoked to perfect tenderness.',
    price: '$18/whole',
  },
]

export default function Contrast() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter">PORKY'S</Link>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <Link href="/services" className="hover:underline decoration-4 underline-offset-4">Services</Link>
            <Link href="/work" className="hover:underline decoration-4 underline-offset-4">Work</Link>
            <Link href="/about" className="hover:underline decoration-4 underline-offset-4">About</Link>
            <Link href="/contact" className="hover:underline decoration-4 underline-offset-4">Contact</Link>
            <Link href="/contrast" className="hover:underline decoration-4 underline-offset-4 text-black">Contrast</Link>
          </div>
        </div>
      </nav>

      {/* Hero - BLACK */}
      <section className="min-h-screen bg-black flex items-center justify-center border-b-4 border-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-[120px] md:text-[200px] leading-[0.8] font-black text-white tracking-tighter mb-8">
            PORKY'S<br />PIG FRY
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-white uppercase tracking-[0.3em] mb-12">
            Texas-Style Smokehouse
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="#menu" className="bg-white text-black px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-black hover:text-white border-4 border-white transition-all">
              View Menu
            </Link>
            <Link href="#contact" className="border-4 border-white text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* About - WHITE */}
      <section className="bg-white text-black py-32 border-b-4 border-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-8xl md:text-[140px] leading-[0.85] font-black tracking-tighter mb-8">
                NO<br />SHORT<br />CUTS
              </h2>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                We don't do microwave. We don't do shortcuts. We smoke everything the old-school way.
              </p>
              <p className="text-xl font-medium leading-relaxed">
                Since 1987, Porky's Pig Fry has been serving authentic Texas-style BBQ to the good people of this great state. Our pits run 24/7. Our brisket rests for 12 hours. That's just how we do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote - BLACK */}
      <section className="bg-black text-white py-40 border-b-4 border-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-4xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            "GOOD BBQ TAKES TIME. GREAT BBQ TAKES PATIENCE."
          </p>
          <p className="text-xl font-bold mt-8 tracking-widest uppercase">— The Porky's Philosophy</p>
        </div>
      </section>

      {/* Services - WHITE */}
      <section id="menu" className="bg-white text-black py-32 border-b-4 border-black">
        <div className="container mx-auto px-6">
          <h2 className="text-8xl md:text-[140px] leading-[0.85] font-black tracking-tighter mb-16">
            THE<br />MENU
          </h2>
          
          <div className="grid md:grid-cols-2 gap-0">
            {services.map((service, i) => (
              <div 
                key={i} 
                className={`
                  p-12 border-4 border-black
                  ${i % 2 === 0 ? 'md:border-r-0' : ''}
                  ${i < 2 ? 'md:border-b-0' : ''}
                  hover:bg-black hover:text-white transition-colors group
                `}
              >
                <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-lg font-medium mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-3xl font-black">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - BLACK */}
      <section className="bg-black text-white py-24 border-b-4 border-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl md:text-8xl font-black leading-none mb-2">37</div>
              <div className="text-lg font-bold uppercase tracking-widest">Years</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl md:text-8xl font-black leading-none mb-2">2M+</div>
              <div className="text-lg font-bold uppercase tracking-widest">Pounds Smoked</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl md:text-8xl font-black leading-none mb-2">5</div>
              <div className="text-lg font-bold uppercase tracking-widest">Locations</div>
            </div>
            <div className="text-center border-4 border-white p-8">
              <div className="text-6xl md:text-8xl font-black leading-none mb-2">1</div>
              <div className="text-lg font-bold uppercase tracking-widest">Recipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours - WHITE */}
      <section className="bg-white text-black py-32 border-b-4 border-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-8xl md:text-[140px] leading-[0.85] font-black tracking-tighter mb-8">
                HOURS
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-4 border-black p-8 mb-4">
                <h3 className="text-3xl font-black uppercase mb-4">Thursday - Monday</h3>
                <p className="text-4xl font-black">11AM — 8PM</p>
              </div>
              <div className="border-4 border-black p-8">
                <h3 className="text-3xl font-black uppercase mb-4">Tuesday - Wednesday</h3>
                <p className="text-4xl font-black">CLOSED</p>
                <p className="text-lg font-medium mt-2">We rest. The pits rest. Everyone rests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - BLACK */}
      <section id="contact" className="bg-black text-white py-40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-[120px] leading-[0.9] font-black tracking-tighter mb-8">
            GET<br />YOUR<br />MEAT
          </h2>
          <p className="text-2xl font-bold uppercase tracking-widest mb-12">
            Order online or walk in. Either way, bring cash.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-black hover:text-white border-4 border-white transition-all">
              Order Online
            </button>
            <button className="border-4 border-white text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Call Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer - WHITE */}
      <footer className="py-12 bg-white border-t-4 border-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-3xl font-black tracking-tighter mb-2">PORKY'S PIG FRY</div>
              <div className="text-sm font-bold uppercase tracking-widest">
                Texas-Style Smokehouse Est. 1987
              </div>
            </div>
            <div className="text-sm font-bold uppercase tracking-widest">
              © 2026 Porky's Pig Fry. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
