import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silvadew | Custom Software Development & IT Training',
  description: 'Silvadew develops scalable, reliable custom software solutions for businesses. Also offering IT training, web development, digital marketing, and career development programs.',
}

const services = [
  {
    title: 'Custom Software Development',
    description: 'Scalable, reliable software tailored to your business needs. From web applications to enterprise solutions.',
  },
  {
    title: 'Web & Mobile Development',
    description: 'Modern websites and mobile apps built with React, Next.js, Node.js, and cutting-edge technologies.',
  },
  {
    title: 'IT Training Programs',
    description: 'Industry-leading IT certifications and career training. AWS, Azure, Cybersecurity, and more.',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing services to grow your presence. SEO, social media, and content marketing.',
  },
]

const industries = [
  'Healthcare', 'Finance', 'E-commerce', 'Real Estate', 
  'Travel', 'Education', 'Manufacturing', 'Technology'
]

const stats = [
  { value: '14+', label: 'Experienced Developers' },
  { value: '2500+', label: 'Certified Courses' },
  { value: '25+', label: 'Awards of Distinction' },
  { value: '550+', label: 'Businesses Served' },
]

const testimonials = [
  {
    name: "Michael R.",
    role: "CEO, TechStart Inc.",
    text: "Silvadew transformed our online presence. Our leads increased 300% in 3 months.",
  },
  {
    name: "Sarah K.",
    role: "Director, Apex Solutions",
    text: "Professional, responsive, and delivered beyond our expectations. Highly recommend.",
  },
  {
    name: "David L.",
    role: "Founder, Innovate Labs",
    text: "The training programs helped our team upskill quickly. Excellent ROI.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Silvadew provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silvadew provides custom software development, web and mobile app development, IT training programs, and digital marketing services for businesses of all sizes."
      }
    },
    {
      "@type": "Question",
      "name": "What IT training courses do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 2500+ certified courses including AWS, Azure, Cloud Computing, Cybersecurity, Data Visualization, Microsoft Office, and web development certifications."
      }
    },
    {
      "@type": "Question",
      "name": "How long has Silvadew been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team has over 14 years of combined experience in software development and IT services. We've served over 550 businesses worldwide."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer career placement services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer career coaching, resume preparation, portfolio development, and job search services to help IT training graduates land their dream jobs."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve healthcare, finance, e-commerce, real estate, travel, education, manufacturing, technology, and many other industries with tailored software solutions."
      }
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Silvadew",
  "url": "https://silvadew.com",
  "logo": "https://silvadew.com/logo.png",
  "description": "Custom software development and IT training company serving businesses worldwide.",
  "telephone": "+1-571-276-3358",
  "email": "info@silvadew.com",
  "areaServed": "Worldwide",
  "serviceType": ["Software Development", "Web Development", "IT Training", "Digital Marketing"],
  "sameAs": [
    "https://www.instagram.com/silvadew",
    "https://www.youtube.com/silvadew",
    "https://www.facebook.com/silvadew"
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">SILVADEW</a>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/deck" className="hover:text-white transition-colors text-teal-400">View Report</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Brutalist Editorial */}
      <section className="min-h-screen flex items-center grid-bg pt-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-teal-400 text-xs font-medium tracking-widest uppercase mb-6">
              Custom Software & IT Training
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              We build software<br />
              that <span className="text-teal-400">works.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl mb-10 leading-relaxed">
              Scalable solutions for businesses ready to grow. From custom applications to enterprise systems—we deliver.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-teal-400 transition-colors">
                Get Started
              </a>
              <a href="#services" className="border border-white/20 px-8 py-4 text-sm font-medium hover:border-white/60 transition-colors">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-black">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Editorial Grid */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
            <div className="w-12 h-0.5 bg-teal-400"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {services.map((service, i) => (
              <div key={i} className="bg-black p-8 hover:bg-white/5 transition-colors group">
                <div className="text-xs text-teal-400 font-medium tracking-widest uppercase mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Industries We Serve</h2>
            <div className="w-12 h-0.5 bg-teal-400"></div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 border border-white/20 text-white/60 text-sm hover:border-teal-400 hover:text-teal-400 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">What Clients Say</h2>
            <div className="w-12 h-0.5 bg-teal-400"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-black p-8">
                <p className="text-white/70 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-xs text-white/40">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Brutalist */}
      <section id="contact" className="py-24 bg-teal-900/20 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            Let's discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+15712763358" className="bg-white text-black px-8 py-4 font-medium hover:bg-teal-400 transition-colors">
              +1 (571) 276-3358
            </a>
            <a href="mailto:info@silvadew.com" className="border border-white/30 px-8 py-4 font-medium hover:border-white/60 transition-colors">
              info@silvadew.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-semibold mb-2">SILVADEW</div>
              <div className="text-xs text-white/40">
                Custom software development & IT training
              </div>
            </div>
            <div className="text-xs text-white/30">
              © 2026 Silvadew Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
