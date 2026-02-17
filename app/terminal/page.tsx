import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Terminal",
  description: "Welcome to Porky's Pig Fry - Where BBQ meets the command line",
}

const menuItems = [
  { name: 'smoked_brisket.ts', desc: 'Slow-smoked for 14 hours', price: '$18.99' },
  { name: 'pulled_pork.py', desc: 'House-smoked Carolina style', price: '$14.99' },
  { name: 'ribs.exe', desc: 'St. Louis cut, fall-off-bone', price: '$22.99' },
  { name: 'wings.sh', desc: 'Dry rub or saucy, your choice', price: '$12.99' },
  { name: 'burnt_ends.rb', desc: 'The prized cut, limited supply', price: '$24.99' },
  { name: 'mac_and_cheese.sql', desc: '3-cheese blend, creamy', price: '$6.99' },
  { name: 'coleslaw.json', desc: 'Fresh cut, tangy slaw', price: '$4.99' },
  { name: 'baked_beans.xml', desc: 'Smoky, sweet, perfected', price: '$5.99' },
]

const services = [
  { name: 'catering/', desc: 'Full-service catering for events', cmd: './catering.sh' },
  { name: 'bulk_orders/', desc: 'Pre-order for pickup', cmd: 'npm run bulk-order' },
  { name: 'events/', desc: 'Food trucks & private events', cmd: 'python events.py' },
  { name: 'merch/', desc: 'Porky\'s gear & sauces', cmd: 'cat merch.txt' },
]

export default function Terminal() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-green-500/30 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight text-green-400 font-mono">
            <span className="text-white">porkys@bbq:~$</span> cd /home
          </Link>
          <div className="flex gap-6 text-sm font-mono text-green-400/70">
            <Link href="/services" className="hover:text-green-400 transition-colors">services/</Link>
            <Link href="/terminal" className="hover:text-green-400 transition-colors text-green-400">[terminal]</Link>
            <Link href="/work" className="hover:text-green-400 transition-colors">work/</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">about/</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">contact</Link>
          </div>
        </div>
      </nav>

      {/* Terminal Hero */}
      <section className="min-h-screen pt-24 bg-[#0a0a0a] font-mono">
        <div className="container mx-auto px-4 pb-12">
          
          {/* ASCII Art Banner */}
          <pre className="text-green-500 text-xs md:text-sm leading-tight mb-8 overflow-x-auto">
{`
    ██████╗ ██╗  ██╗ ██████╗ ███████╗    ███████╗ █████╗  ██████╗██╗  ██╗
    ██╔══██╗██║  ██║██╔═══██╗██╔════╝    ██╔════╝██╔══██╗██╔════╝██║  ██║
    ██████╔╝███████║██║   ██║███████╗    █████╗  ███████║██║     ███████║
    ██╔═══╝ ██╔══██║██║   ██║╚════██║    ██╔══╝  ██╔══██║██║     ██╔══██║
    ██║     ██║  ██║╚██████╔╝███████║    ██║     ██║  ██║╚██████╗██║  ██║
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                         P I G   F R Y
`}
          </pre>

          {/* Command Prompt Section */}
          <div className="mb-8 p-4 border border-green-500/20 bg-green-500/5 rounded">
            <div className="text-green-400 text-sm mb-2">
              <span className="text-green-600">$</span> ./welcome_message.sh
            </div>
            <div className="text-green-300 text-lg md:text-xl leading-relaxed">
              Welcome to <span className="text-green-400 font-bold">Porky&apos;s Pig Fry</span> — 
              where real BBQ meets the command line.<br/>
              <span className="text-green-500/60">We smoke meat while you deploy. It&apos;s a beautiful thing.</span>
            </div>
            <div className="mt-2">
              <span className="text-green-400">_</span>
              <span className="animate-pulse text-green-400">█</span>
            </div>
          </div>

          {/* Menu Section - Terminal Style */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600">$</span>
              <span className="text-green-400">ls -la menu/</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {menuItems.map((item, i) => (
                <div 
                  key={i}
                  className="border border-green-500/20 bg-black p-3 hover:bg-green-500/10 hover:border-green-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-green-400 font-bold text-sm group-hover:underline">
                      {item.name}
                    </span>
                    <span className="text-green-500 text-xs">{item.price}</span>
                  </div>
                  <div className="text-green-600/60 text-xs">
                    // {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section - Terminal Style */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600">$</span>
              <span className="text-green-400">cat services.json</span>
            </div>
            
            <div className="border border-green-500/20 bg-black p-4 rounded">
              <div className="space-y-3">
                {services.map((service, i) => (
                  <div 
                    key={i}
                    className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 p-2 hover:bg-green-500/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-green-500"
                  >
                    <div>
                      <span className="text-green-400 font-bold">{service.name}</span>
                      <span className="text-green-600/60 ml-2">→ {service.desc}</span>
                    </div>
                    <div className="text-green-600 text-xs font-mono">
                      {service.cmd}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hours / Status - Terminal Style */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border border-green-500/20 bg-black p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-600">$</span>
                <span className="text-green-400">./hours.sh --status</span>
              </div>
              <div className="space-y-1 text-sm">
                <div><span className="text-green-500">Mon-Thu:</span> <span className="text-green-300">11:00 AM - 9:00 PM</span></div>
                <div><span className="text-green-500">Fri-Sat:</span> <span className="text-green-300">11:00 AM - 10:00 PM</span></div>
                <div><span className="text-green-500">Sunday:</span> <span className="text-green-300">12:00 PM - 8:00 PM</span></div>
              </div>
            </div>
            
            <div className="border border-green-500/20 bg-black p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-600">$</span>
                <span className="text-green-400">./location.gps</span>
              </div>
              <div className="space-y-1 text-sm">
                <div><span className="text-green-500">Address:</span> <span className="text-green-300">123 Smokehouse Lane</span></div>
                <div><span className="text-green-500">City:</span> <span className="text-green-300">Austin, TX 78701</span></div>
                <div><span className="text-green-500">Phone:</span> <span className="text-green-300">(512) 555-SMOKE</span></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-green-500/30 bg-green-500/5 p-6 rounded">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <div className="text-green-400 font-bold text-lg mb-1">
                  &gt; Ready to order?
                </div>
                <div className="text-green-600/60 text-sm">
                  Run <code className="text-green-500 bg-green-500/10 px-1">./order.sh</code> or call us at (512) 555-SMOKE
                </div>
              </div>
              <Link 
                href="/contact" 
                className="bg-green-600 text-black px-6 py-3 font-bold hover:bg-green-500 transition-colors font-mono"
              >
                ./start_order
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-green-500/20 text-center">
            <div className="text-green-600/40 text-xs font-mono">
              porkys@bbq:~$ echo $END_OF_LINE<br/>
              <span className="text-green-500">Keep smoking. Keep deploying.</span>
            </div>
            <div className="text-green-600/30 text-xs mt-2">
              © 2026 Porky&apos;s Pig Fry. All rights reserved. | <Link href="/" className="hover:text-green-500">← cd ..</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
