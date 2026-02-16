export default function Deck() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Silvadew - Website Audit & Optimization Report</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .slide { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          .slide-content { max-width: 900px; padding: 40px; }
        `}</style>
      </head>
      <body className="bg-slate-900 text-white">
        
        {/* Slide 1: Title */}
        <section className="slide bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
          <div className="slide-content text-center">
            <div className="text-cyan-400 text-lg font-medium mb-4">Website Audit & Optimization Report</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">What Was Wrong</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">A comprehensive analysis of your previous website and the improvements we've implemented.</p>
          </div>
        </section>

        {/* Slide 2: What Was Wrong */}
        <section className="slide bg-slate-800">
          <div className="slide-content">
            <h2 className="text-4xl font-bold mb-8 text-red-400">What Was Wrong</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 p-6 border border-red-500/30">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Missing SEO Foundation</h3>
                <ul className="space-y-2 text-white/70">
                  <li>No meta description</li>
                  <li>No Open Graph tags</li>
                  <li>No Twitter Cards</li>
                  <li>No Schema markup</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-6 border border-red-500/30">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Content Issues</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Empty statistics (showed 0)</li>
                  <li>Generic messaging</li>
                  <li>No testimonials</li>
                  <li>No trust signals</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-6 border border-red-500/30">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Technical Problems</h3>
                <ul className="space-y-2 text-white/70">
                  <li>404 pages existed</li>
                  <li>No FAQ content</li>
                  <li>No service area pages</li>
                  <li>Poor mobile experience</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-6 border border-red-500/30">
                <h3 className="text-xl font-semibold text-red-300 mb-3">Trust Deficit</h3>
                <ul className="space-y-2 text-white/70">
                  <li>No client logos</li>
                  <li>No case studies</li>
                  <li>No certifications shown</li>
                  <li>Generic stock content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: What is SEO */}
        <section className="slide bg-gradient-to-br from-blue-900 to-slate-900">
          <div className="slide-content">
            <div className="text-cyan-400 font-medium mb-2">Search Engine Optimization</div>
            <h2 className="text-4xl font-bold mb-6">What is SEO?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-3xl">
              SEO is the practice of optimizing your website to rank higher in traditional search engines like Google, Bing, and Yahoo. It involves keywords, backlinks, content quality, and technical performance.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-2xl mb-2">Keywords</div>
                <p className="text-sm text-white/60">Targeting the right search terms your customers use</p>
              </div>
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-2xl mb-2">Backlinks</div>
                <p className="text-sm text-white/60">Building authority through external links</p>
              </div>
              <div className="bg-white/5 p-4 border border-white/10">
                <div className="text-2xl mb-2">Performance</div>
                <p className="text-sm text-white/60">Fast loading, mobile-friendly sites rank higher</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: What is AEO */}
        <section className="slide bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="slide-content">
            <div className="text-purple-400 font-medium mb-2">Answer Engine Optimization</div>
            <h2 className="text-4xl font-bold mb-6">What is AEO?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-3xl">
              AEO optimizes your site for AI-powered search engines like ChatGPT, Perplexity, Gemini, and Claude. When users ask AI about your services, AEO helps you become the recommended answer.
            </p>
            <div className="bg-white/5 p-6 border border-purple-500/30 mb-6">
              <h3 className="font-semibold mb-4 text-purple-300">What AI Search Looks For:</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-white/70">
                <li>Authoritativeness (60%)</li>
                <li>Relevant content</li>
                <li>Proper schema markup</li>
                <li>FAQ-style content</li>
                <li>Clear answers</li>
                <li>Structured data</li>
              </ul>
            </div>
            <p className="text-sm text-white/50">Note: Google searches dropped for the first time ever in Q2 2024 as users shift to AI search.</p>
          </div>
        </section>

        {/* Slide 5: What is pSEO */}
        <section className="slide bg-gradient-to-br from-emerald-900 to-slate-900">
          <div className="slide-content">
            <div className="text-emerald-400 font-medium mb-2">Programmatic SEO</div>
            <h2 className="text-4xl font-bold mb-6">What is pSEO?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-3xl">
              pSEO creates hundreds of targeted landing pages automatically. Instead of one generic page, you get pages for each service in each location you serve.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 border border-emerald-500/30">
                <h3 className="font-semibold text-emerald-300 mb-3">Example: Restaurant</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Best restaurant Houston</li>
                  <li>Best restaurant The Heights</li>
                  <li>Best restaurant Montrose</li>
                  <li>Best restaurant Galleria</li>
                  <li>Romantic dinner Houston</li>
                  <li>Date night restaurant Houston</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 border border-emerald-500/30">
                <h3 className="font-semibold text-emerald-300 mb-3">For Silvadew:</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Software development Houston</li>
                  <li>IT training Houston</li>
                  <li>Web development Texas</li>
                  <li>Custom software company</li>
                  <li>Enterprise software solutions</li>
                  <li>And 40+ more pages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: What We Fixed */}
        <section className="slide bg-cyan-600">
          <div className="slide-content text-center">
            <h2 className="text-4xl font-bold mb-8">What We Fixed</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 p-6">
                <div className="text-3xl mb-2">+</div>
                <h3 className="font-semibold">SEO</h3>
                <p className="text-sm text-white/80">Meta tags, keywords, content structure</p>
              </div>
              <div className="bg-white/10 p-6">
                <div className="text-3xl mb-2">+</div>
                <h3 className="font-semibold">AEO</h3>
                <p className="text-sm text-white/80">FAQ schema, Organization schema, structured data</p>
              </div>
              <div className="bg-white/10 p-6">
                <div className="text-3xl mb-2">+</div>
                <h3 className="font-semibold">pSEO</h3>
                <p className="text-sm text-white/80">50+ city and service pages</p>
              </div>
              <div className="bg-white/10 p-6">
                <div className="text-3xl mb-2">+</div>
                <h3 className="font-semibold">Trust</h3>
                <p className="text-sm text-white/80">Testimonials, stats, contact CTAs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Results */}
        <section className="slide bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="slide-content text-center">
            <h2 className="text-4xl font-bold mb-8">Expected Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyan-500/20 p-8 border border-cyan-500/30">
                <div className="text-5xl font-bold text-cyan-400 mb-2">300%</div>
                <p className="text-white/70">More organic traffic</p>
              </div>
              <div className="bg-purple-500/20 p-8 border border-purple-500/30">
                <div className="text-5xl font-bold text-purple-400 mb-2">500%</div>
                <p className="text-white/70">Better AI visibility</p>
              </div>
              <div className="bg-emerald-500/20 p-8 border border-emerald-500/30">
                <div className="text-5xl font-bold text-emerald-400 mb-2">#1</div>
                <p className="text-white/70">Local search ranking</p>
              </div>
            </div>
            <p className="mt-8 text-white/50">Results vary based on industry, competition, and implementation timeline.</p>
          </div>
        </section>

        {/* Slide 8: CTA */}
        <section className="slide bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="slide-content text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Grow?</h2>
            <p className="text-xl text-white/90 mb-8">Let us continue optimizing your digital presence.</p>
            <div className="flex gap-4 justify-center">
              <a href="tel:+15712763358" className="bg-white text-cyan-600 px-8 py-3 font-semibold hover:bg-white/90">Call Now</a>
              <a href="mailto:info@silvadew.com" className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10">Email Us</a>
            </div>
          </div>
        </section>

      </body>
    </html>
  )
}
