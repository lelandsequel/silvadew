import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work | Silvadew',
  description: 'Explore our web design projects and portfolio of successful client work.',
}

const projects = [
  {
    title: 'Automotive E-commerce Platform',
    category: 'Web Development',
    description: 'Full-featured automotive e-commerce website with inventory management, payment processing, and responsive design.',
  },
  {
    title: 'Healthcare Management System',
    category: 'Custom Software',
    description: 'Comprehensive healthcare platform with patient management, appointment scheduling, and analytics dashboard.',
  },
  {
    title: 'Financial Services Portal',
    category: 'Web Application',
    description: 'Secure financial services web application with client portals, transaction tracking, and reporting tools.',
  },
  {
    title: 'E-learning Platform',
    category: 'IT Training',
    description: 'Interactive online learning management system with video courses, progress tracking, and certification.',
  },
  {
    title: 'Restaurant Management System',
    category: 'POS Integration',
    description: 'Complete restaurant solution with online ordering, table management, and inventory control.',
  },
  {
    title: 'Real Estate Marketplace',
    category: 'Web Development',
    description: 'Property listing platform with advanced search, map integration, and lead management.',
  },
]

export default function Work() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">SILVADEW</Link>
          <div className="flex gap-8 text-sm text-white/60">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 grid-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <p className="text-xl text-white/50 max-w-2xl mb-16">
            Explore our web design projects. Inspire, engage, and expand your influence by working with professionals who deliver results.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-teal-900/30 to-black mb-4 flex items-center justify-center">
                  <span className="text-4xl text-teal-400/30">Project {i + 1}</span>
                </div>
                <div className="text-xs text-teal-400 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/50 mb-6">Ready to start your project?</p>
            <Link href="/contact" className="bg-white text-black px-8 py-4 font-medium hover:bg-teal-400 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-semibold mb-2">SILVADEW</div>
              <div className="text-xs text-white/40">Custom software development & IT training</div>
            </div>
            <div className="text-xs text-white/30">© 2026 Silvadew Inc.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
