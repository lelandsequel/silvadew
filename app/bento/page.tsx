import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Bento",
}

export default function Bento() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Porky's Pig Fry</h1>
          <p className="text-neutral-400">Cajun-Style BBQ since 1987</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-500 transition-colors">Order</button>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
        
        {/* Hero - spans 2x2 */}
        <div className="col-span-4 md:col-span-2 md:row-span-2 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Featured</div>
          <h2 className="text-4xl md:text-6xl font-black mb-2">SMOKED<br/>RIGHT</h2>
          <p className="text-red-100 text-lg">14-16 hour hickory smoke</p>
        </div>

        {/* Stats */}
        <div className="col-span-2 md:col-span-1 bg-neutral-800 rounded-2xl p-6 flex flex-col justify-center">
          <span className="text-4xl font-bold text-emerald-400">35+</span>
          <span className="text-neutral-400 text-sm">Years of Smoke</span>
        </div>

        <div className="col-span-2 md:col-span-1 bg-neutral-800 rounded-2xl p-6 flex flex-col justify-center">
          <span className="text-4xl font-bold text-orange-400">500+</span>
          <span className="text-neutral-400 text-sm">Daily Guests</span>
        </div>

        {/* Menu Item 1 */}
        <div className="col-span-2 md:col-span-1 bg-orange-600 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">Popular</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Ribs</h3>
            <p className="text-orange-100">St. Louis style</p>
          </div>
          <span className="text-2xl font-black mt-2">$24.99</span>
        </div>

        {/* Menu Item 2 */}
        <div className="col-span-2 md:col-span-1 bg-amber-600 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">Bestseller</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Brisket</h3>
            <p className="text-amber-100">Prime cut</p>
          </div>
          <span className="text-2xl font-black mt-2">$21.99</span>
        </div>

        {/* Menu Item 3 */}
        <div className="col-span-2 md:col-span-1 bg-neutral-700 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <h3 className="text-2xl font-bold">Plate</h3>
            <p className="text-neutral-300">Choice + 2 sides</p>
          </div>
          <span className="text-2xl font-black mt-2">$16.99</span>
        </div>

        {/* Sides */}
        <div className="col-span-4 md:col-span-2 bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-neutral-300">Sides</h3>
          <div className="grid grid-cols-2 gap-2">
            {["Red Beans & Rice", "Jambalaya", "Collard Greens", "Hush Puppies", "Mac & Cheese", "Baked Beans"].map((side, i) => (
              <div key={i} className="text-neutral-400 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                {side}
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="col-span-2 md:col-span-1 bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-2">Location</h3>
          <p className="text-neutral-400 text-sm">1234 Smokehouse Rd<br/>Houston, TX 77001</p>
          <p className="text-emerald-400 font-bold mt-2">(713) 555-7427</p>
        </div>

        {/* Hours */}
        <div className="col-span-2 md:col-span-1 bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-2">Hours</h3>
          <p className="text-neutral-400 text-sm">Mon-Sat: 11am - 9pm</p>
          <p className="text-neutral-400 text-sm">Closed Sunday</p>
        </div>

        {/* CTA */}
        <div className="col-span-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Order Online</h3>
          <p className="text-emerald-100 mb-4">Pickup or delivery</p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
            Start Order
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-neutral-500 text-sm">
        © 2026 Porky's Pig Fry — Baton Rouge to Houston
      </footer>
    </div>
  )
}
