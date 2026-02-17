import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Silvadew',
  description: 'Custom software development, web & mobile apps, IT training, and digital marketing services.',
}

const services = [
  {
    title: 'Custom Software Development',
    description: 'Scalable, reliable software tailored to your business needs. From web applications to enterprise solutions built with React, Node.js, Python, and cloud technologies.',
    items: ['Web Applications', 'Enterprise Systems', 'API Development', 'Cloud Solutions', 'Database Design']
  },
  {
    title: 'Web & Mobile Development',
    description: 'Modern websites and mobile apps built with cutting-edge technologies like React, Next.js, Node.js, and native mobile frameworks.',
    items: ['Responsive Websites', 'Progressive Web Apps', 'iOS & Android Apps', 'E-commerce Platforms', 'CMS Integration']
  },
  {
    title: 'IT Training Programs',
    description: 'Industry-leading IT certifications and career training. Over 2,500 courses including AWS, Azure, Cybersecurity, and cloud computing.',
    items: ['AWS Certification', 'Azure Training', 'Cybersecurity', 'Cloud Computing', 'Career Coaching']
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing services to grow your online presence. SEO, social media, content marketing, and paid advertising.',
    items: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Advertising', 'Analytics']
  }
]

export default function Services() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">SILVADEW</a>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/deck" className="hover:text-white transition-colors text-teal-400">Strategy Deck</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 grid-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <div className="w-16 h-0.5 bg-teal-400"></div>
          </div>

          <div className="grid gap-px bg-white/10">
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
