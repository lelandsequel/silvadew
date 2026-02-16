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
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center" style={{backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="badge badge-lg badge-outline text-white border-white/30 mb-6 px-4 py-3">
              Custom Software & IT Training
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Let's Start Something <span className="text-cyan-400">Great.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
              Revolutionizing technology with custom software solutions and world-class IT training. Join 550+ businesses who've transformed their digital presence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn btn-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 border-none">
                Our Services
              </a>
              <a href="#contact" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-slate-900">
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-white/70 mt-2 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What We Do</h2>
            <p className="text-lg text-slate-600">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                <div className="card-body p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="card-title text-2xl text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-lg text-slate-600">
              Tailored solutions across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, i) => (
              <button key={i} className="btn btn-outline btn-lg bg-slate-50 border-slate-200 text-slate-700 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all">
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-lg text-white/60">
              Trusted by businesses worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="card bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="card-body p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-white/80 mb-6 italic">{testimonial.text}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 550+ businesses trusting Silvadew for their technology needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+15712763358" className="btn btn-lg bg-white text-cyan-600 hover:bg-slate-100 border-none">
              Call +1 (571) 276-3358
            </a>
            <a href="mailto:info@silvadew.com" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-cyan-600">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl text-white mb-4">Silvadew</h3>
              <p className="text-white/60">
                Custom software development and IT training for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-white/60">
                <li>+1 (571) 276-3358</li>
                <li>info@silvadew.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
            © 2026 Silvadew Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
