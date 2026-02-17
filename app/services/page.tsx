import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Silvadew',
  description: 'Custom software development, web & mobile apps, IT training, and digital marketing services.',
}

const services = [
  {
    title: 'Custom Software Development',
    description: 'Silvadew develops scalable, reliable custom software solutions for businesses of all sizes and industries, turning ideas into top-performing digital products customers truly value.',
    items: ['Web Applications', 'Enterprise Systems', 'API Development', 'Cloud Solutions', 'Database Design']
  },
  {
    title: 'Web & Mobile Development',
    description: 'In a world where every interaction counts, your brand deserves a website that not only showcases your mission and services but also actively engages your visitors. Our professional web design and development services ensure your website stands out.',
    items: ['Responsive Websites', 'Progressive Web Apps', 'iOS & Android Apps', 'E-commerce Platforms', 'CMS Integration']
  },
  {
    title: 'IT Training Programs',
    description: 'Silvadew is considered as one of the best interactive and live e-learning platforms transforming specialized online education. We provide top quality online courses reinforced by online assets. 100% virtual classroom with flexible scheduling.',
    items: ['AWS Certification', 'Azure Training', 'Cybersecurity', 'Cloud Computing', 'Career Coaching']
  },
  {
    title: 'Digital Marketing',
    description: 'Whether you are looking for a one-time creative spark or ongoing marketing support, our services are designed to meet you exactly where you are. We offer one-time campaign services and comprehensive ongoing marketing support.',
    items: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising', 'Analytics']
  }
]

const technologies = {
  frontend: ['HTML 5', 'JavaScript', 'React', 'Material UI', 'Tailwind CSS', 'CSS3', 'Next.js', 'Three.js', 'GSAP'],
  backend: ['WordPress', 'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Python', 'Spring'],
  design: ['Figma', 'Sketch', 'Adobe XD', 'InVision Studio', 'Axure RP', 'Balsamiq', 'Framer']
}

const industries = [
  'Travel', 'Real Estate', 'Digital Industry', 'Healthcare', 
  'Hospitals', 'Entertainment', 'E-commerce', 'Transportation', 
  'Agriculture', 'Fitness', 'Fashion', 'Non-profit Org', 'Grocery', 'Skincare'
]

export default function Services() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">SILVADEW</Link>
          <div className="flex gap-8 text-sm text-white/60">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 grid-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <div className="grid gap-px bg-white/10 mb-16">
            {services.map((service, i) => (
              <div key={i} className="bg-black p-8 md:p-12 hover:bg-white/5 transition-colors">
                <div className="max-w-3xl">
                  <div className="text-xs text-teal-400 font-medium tracking-widest uppercase mb-3">
                    0{i + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-white/40">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-teal-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Technologies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-teal-400 font-medium mb-4">Front-End</h3>
                <ul className="space-y-2 text-white/50">
                  {technologies.frontend.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-teal-400 font-medium mb-4">Back-End</h3>
                <ul className="space-y-2 text-white/50">
                  {technologies.backend.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-teal-400 font-medium mb-4">Design</h3>
                <ul className="space-y-2 text-white/50">
                  {technologies.design.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 text-white/60 text-sm">
                  {industry}
                </span>
              ))}
            </div>
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
