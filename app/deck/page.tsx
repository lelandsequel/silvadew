'use client'

import { useState } from 'react'

const slides = [
  // Slide 1: Title
  {
    title: "Strategy Deck",
    subtitle: "Website Audit & Optimization Report",
    content: (
      <div className="text-center">
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          A comprehensive analysis of your previous website and the improvements we've implemented.
        </p>
      </div>
    )
  },
  // Slide 2: What Was Wrong
  {
    title: "What Was Wrong",
    subtitle: "The Problems We Found",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">SEO Foundation</h3>
          <ul className="space-y-2 text-white/70">
            <li>No meta description</li>
            <li>No Open Graph tags</li>
            <li>No Twitter Cards</li>
            <li>No Schema markup</li>
            <li>Missing sitemap</li>
          </ul>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Content & Trust</h3>
          <ul className="space-y-2 text-white/70">
            <li>Empty statistics (showed 0)</li>
            <li>Generic messaging</li>
            <li>No testimonials</li>
            <li>No case studies</li>
            <li>No trust signals</li>
          </ul>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Technical</h3>
          <ul className="space-y-2 text-white/70">
            <li>404 pages existed</li>
            <li>No FAQ content</li>
            <li>Poor mobile experience</li>
            <li>Slow loading</li>
            <li>No internal linking</li>
          </ul>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Local SEO</h3>
          <ul className="space-y-2 text-white/70">
            <li>No Google Business Profile</li>
            <li>Missing NAP consistency</li>
            <li>No local schema</li>
            <li>No service area pages</li>
            <li>No reviews integration</li>
          </ul>
        </div>
      </div>
    )
  },
  // Slide 3: What is SEO
  {
    title: "What is SEO?",
    subtitle: "Search Engine Optimization",
    content: (
      <div>
        <p className="text-lg text-white/70 mb-8 max-w-3xl">
          SEO is the practice of optimizing your website to rank higher in traditional search engines like Google, Bing, and Yahoo. It involves keywords, backlinks, content quality, and technical performance.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 p-4 border border-white/10">
            <h3 className="font-semibold mb-2">Keywords</h3>
            <p className="text-sm text-white/60">Targeting the right search terms your customers use</p>
          </div>
          <div className="bg-white/5 p-4 border border-white/10">
            <h3 className="font-semibold mb-2">Backlinks</h3>
            <p className="text-sm text-white/60">Building authority through external links</p>
          </div>
          <div className="bg-white/5 p-4 border border-white/10">
            <h3 className="font-semibold mb-2">Technical</h3>
            <p className="text-sm text-white/60">Fast loading, mobile-friendly, clean code</p>
          </div>
        </div>
      </div>
    )
  },
  // Slide 4: How SEO Failed
  {
    title: "How SEO Failed",
    subtitle: "Your Site Before",
    content: (
      <div className="space-y-6">
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Keyword Gaps</h3>
          <p className="text-white/70">No targeting of "software development Houston" or related terms. Missing long-tail keywords for services.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Technical Issues</h3>
          <p className="text-white/70">Slow load times, no mobile optimization, missing meta tags, broken links.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No Authority Building</h3>
          <p className="text-white/70">No backlinks strategy, no content marketing, no industry presence.</p>
        </div>
      </div>
    )
  },
  // Slide 5: What is AEO
  {
    title: "What is AEO?",
    subtitle: "Answer Engine Optimization",
    content: (
      <div>
        <p className="text-lg text-white/70 mb-8 max-w-3xl">
          AEO optimizes your site for AI-powered search engines like ChatGPT, Perplexity, Gemini, and Claude. When users ask AI about your services, AEO helps you become the recommended answer.
        </p>
        <div className="bg-purple-900/20 p-6 border border-purple-500/30 mb-6">
          <h3 className="font-semibold mb-4 text-purple-400">What AI Search Looks For:</h3>
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
    )
  },
  // Slide 6: How AEO Failed
  {
    title: "How AEO Failed",
    subtitle: "Your Site Before",
    content: (
      <div className="space-y-6">
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No Structured Data</h3>
          <p className="text-white/70">Missing FAQ schema, Organization schema, Service schema. AI couldn't read or reference your business.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No FAQ Content</h3>
          <p className="text-white/70">No conversational content answering common questions. AI has nothing to cite.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No Authoritative Content</h3>
          <p className="text-white/70">Thin, generic content with no expertise demonstration. AI doesn't recommend unproven sources.</p>
        </div>
      </div>
    )
  },
  // Slide 7: What is pSEO
  {
    title: "What is pSEO?",
    subtitle: "Programmatic SEO",
    content: (
      <div>
        <p className="text-lg text-white/70 mb-8 max-w-3xl">
          pSEO creates hundreds of targeted landing pages automatically. Instead of one generic page, you get pages for each service in each location you serve.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 border border-white/10">
            <h3 className="font-semibold text-emerald-400 mb-3">Example: Restaurant</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Best restaurant Houston</li>
              <li>Best restaurant The Heights</li>
              <li>Best restaurant Montrose</li>
              <li>Romantic dinner Houston</li>
              <li>Date night Houston</li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 border border-white/10">
            <h3 className="font-semibold text-emerald-400 mb-3">For Silvadew:</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Software development Houston</li>
              <li>IT training Houston</li>
              <li>Web development Texas</li>
              <li>Custom software company USA</li>
              <li>And 40+ more pages</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  // Slide 8: How pSEO Failed
  {
    title: "How pSEO Failed",
    subtitle: "Your Site Before",
    content: (
      <div className="space-y-6">
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No City Pages</h3>
          <p className="text-white/70">Missing location-specific pages. You were invisible for "software company near me" searches.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">No Service Variations</h3>
          <p className="text-white/70">No pages for "mobile app development," "enterprise software," "AWS consulting," etc.</p>
        </div>
        <div className="bg-red-900/20 p-6 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Zero Local Visibility</h3>
          <p className="text-white/70">No presence in Houston, Texas, or regional searches. Competitors captured all local traffic.</p>
        </div>
      </div>
    )
  },
  // Slide 9: How We Fixed SEO
  {
    title: "How We Fixed SEO",
    subtitle: "Search Engine Optimization",
    content: (
      <div className="space-y-6">
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Technical SEO</h3>
          <ul className="space-y-2 text-white/70">
            <li>Optimized meta titles and descriptions</li>
            <li>Added Open Graph and Twitter Cards</li>
            <li>Created XML sitemap</li>
            <li>Implemented proper heading hierarchy</li>
            <li>Optimized images and loading speed</li>
          </ul>
        </div>
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Content Strategy</h3>
          <ul className="space-y-2 text-white/70">
            <li>Keyword-optimized service pages</li>
            <li>Regular blog content</li>
            <li>Industry-specific landing pages</li>
            <li>Backlink acquisition strategy</li>
          </ul>
        </div>
      </div>
    )
  },
  // Slide 10: How We Fixed AEO
  {
    title: "How We Fixed AEO",
    subtitle: "Answer Engine Optimization",
    content: (
      <div className="space-y-6">
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Schema Markup</h3>
          <ul className="space-y-2 text-white/70">
            <li>FAQPage schema on all service pages</li>
            <li>Organization schema with full details</li>
            <li>Service schema for each offering</li>
            <li>LocalBusiness schema for location</li>
          </ul>
        </div>
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">AI-Optimized Content</h3>
          <ul className="space-y-2 text-white/70">
            <li>Comprehensive FAQ sections</li>
            <li>Conversational Q&A format</li>
            <li>Expert-level answers to common questions</li>
            <li>Cited sources and statistics</li>
          </ul>
        </div>
      </div>
    )
  },
  // Slide 11: How We Fixed pSEO
  {
    title: "How We Fixed pSEO",
    subtitle: "Programmatic SEO",
    content: (
      <div className="space-y-6">
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">City Pages</h3>
          <p className="text-white/70 mb-4">Created dedicated pages for:</p>
          <ul className="space-y-2 text-white/70">
            <li>Software development Houston</li>
            <li>Software development Austin</li>
            <li>Software development Dallas</li>
            <li>IT training Texas</li>
            <li>Web development USA</li>
          </ul>
        </div>
        <div className="bg-green-900/20 p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Service Variations</h3>
          <ul className="space-y-2 text-white/70">
            <li>Custom software development</li>
            <li>Mobile app development</li>
            <li>Enterprise software solutions</li>
            <li>Cloud migration services</li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
    )
  },
  // Slide 12: Results
  {
    title: "Expected Results",
    subtitle: "What You'll See",
    content: (
      <div className="text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
        <p className="text-sm text-white/50">Results vary based on industry, competition, and implementation timeline.</p>
      </div>
    )
  },
  // Slide 13: CTA
  {
    title: "Ready to Grow?",
    subtitle: "Let's Build Together",
    content: (
      <div className="text-center">
        <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
          Ready to dominate search? Let's continue optimizing your digital presence.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+15712763358" className="bg-white text-black px-8 py-4 font-medium hover:bg-teal-400 transition-colors">
            Call +1 (571) 276-3358
          </a>
          <a href="mailto:info@silvadew.com" className="border-2 border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors">
            Email Us
          </a>
        </div>
      </div>
    )
  },
]

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">SILVADEW</a>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</a>
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <div className="pt-24 min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-6 py-12">
          <div className="mb-4">
            <span className="text-teal-400 text-sm tracking-widest uppercase">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {slides[currentSlide].title}
          </h1>
          <div className="w-16 h-0.5 bg-teal-400 mb-8"></div>
          
          <div className="text-lg text-white/50 mb-8">
            {slides[currentSlide].subtitle}
          </div>

          <div className="text-white">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Controls */}
        <div className="border-t border-white/10 bg-black py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button 
              type="button"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-6 py-3 border border-white/20 hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 ${i === currentSlide ? 'bg-teal-400' : 'bg-white/20'}`}
                />
              ))}
            </div>
            
            <button 
              type="button"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-3 bg-white text-black font-medium hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-xs text-white/30">
          © 2026 Silvadew Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
