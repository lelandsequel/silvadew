import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Porky's Pig Fry | Terminal",
}

export default function Terminal() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-emerald-400 font-mono">
      {/* Header */}
      <header className="border-b border-emerald-900/50 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">❯</span>
          <span className="text-emerald-300">porkys-pig-fry</span>
          <span className="text-emerald-600">git:(main)</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-emerald-600">v1.0.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="p-4 md:p-8 max-w-4xl mx-auto">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">cat ./hero.txt</span>
          </div>
          <div className="bg-emerald-900/20 border border-emerald-900/50 p-6 rounded mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              &gt;_ SMOKE_MASTER.exe
            </h1>
            <p className="text-emerald-300">
              Running since 1987... [OK]<br/>
              Cajun-style BBQ daemon active
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="animate-pulse text-emerald-400">❯</span>
            <span className="text-emerald-600">_</span>
          </div>
        </section>

        {/* About */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">cat ./about.md</span>
          </div>
          <div className="border border-emerald-900/50 p-6 rounded">
            <h2 className="text-xl font-bold text-white mb-4">## Origin Story</h2>
            <pre className="text-emerald-300 whitespace-pre-wrap">
Baton Rouge, 1987:
- Uncle Earl loaded smoker into trailer
- Set up on corner, no signs
- Line around the block
- Recipe count: 3 generations
- Smoke time: 14-16 hours
- Status: UNCHANGED</pre>
          </div>
        </section>

        {/* Menu - as terminal output */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">ls ./menu/</span>
          </div>
          <div className="border border-emerald-900/50 rounded overflow-hidden">
            <div className="bg-emerald-900/30 px-4 py-2 border-b border-emerald-900/50 flex justify-between">
              <span className="text-emerald-300">menu_items.log</span>
              <span className="text-emerald-600">2026-02-16</span>
            </div>
            <div className="p-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-white">SIGNATURE_PLATE</span>
                <span className="text-emerald-400">$16.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">SMOKED_RIBS</span>
                <span className="text-emerald-400">$24.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">BRISKET</span>
                <span className="text-emerald-400">$21.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">PULLED_PORK</span>
                <span className="text-emerald-400">$14.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">CAJUN_SAUSAGE</span>
                <span className="text-emerald-400">$12.99</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sides - as config */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">cat ./config/sides.yaml</span>
          </div>
          <div className="bg-emerald-900/20 border border-emerald-900/50 p-4 rounded font-mono text-sm">
            <span className="text-emerald-500">sides:</span>
            <ul className="ml-4 mt-2 space-y-1 text-emerald-300">
              <li>- <span className="text-white">red_beans</span>: enabled</li>
              <li>- <span className="text-white">jambalaya</span>: enabled</li>
              <li>- <span className="text-white">collard_greens</span>: enabled</li>
              <li>- <span className="text-white">hush_puppies</span>: enabled</li>
              <li>- <span className="text-white">mac_and_cheese</span>: enabled</li>
            </ul>
          </div>
        </section>

        {/* Location - as network info */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">netstat -l | grep location</span>
          </div>
          <div className="border border-emerald-900/50 p-6 rounded">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">// Address</h3>
                <p className="text-emerald-300">1234 Smokehouse Rd<br/>Houston, TX 77001</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">// Port</h3>
                <p className="text-emerald-300">(713) 555-7427</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">// Uptime</h3>
                <p className="text-emerald-300">Mon-Sat: 11:00 - 21:00</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">// Status</h3>
                <span className="text-emerald-400">● SMOKING</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - as command */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-500">❯</span>
            <span className="text-emerald-600">./order_now.sh --urgent</span>
          </div>
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-4 px-6 rounded transition-colors">
            ⟳ EXECUTE_ORDER()
          </button>
        </section>

        {/* Cursor blink */}
        <div className="flex items-center gap-2 pb-8">
          <span className="text-emerald-400">❯</span>
          <span className="animate-pulse text-emerald-600">_</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900/50 p-4 text-center text-emerald-600 text-sm">
        <span className="text-emerald-500">❯</span> tail -f /var/log/porkys.exit_code=0
      </footer>
    </div>
  )
}
