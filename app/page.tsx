import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silvadew | Custom Software Development & IT Training',
  description: 'Silvadew develops scalable, reliable custom software solutions for businesses. Also offering IT training, web development, digital marketing, and career development programs.',
}

const services = [
  {
    title: 'Custom Software Development',
    description: 'Scalable, reliable software tailored to your business needs. From web applications to enterprise solutions.',
    icon: '🖥️',
  },
  {
    title: 'Web & Mobile Development',
    description: 'Modern websites and mobile apps built with React, Next.js, Node.js, and cutting-edge technologies.',
    icon: '🌐',
  },
  {
    title: 'IT Training Programs',
    description: 'Industry-leading IT certifications and career training. AWS, Azure, Cybersecurity, and more.',
    icon: '📚',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing services to grow your presence. SEO, social media, and content marketing.',
    icon: '📈',
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
      <section className="min-h-[80vh] flex items-center bg-base-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Start Something Great.
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-8">
              Revolutionizing technology with custom software solutions and world-class IT training.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn btn-primary btn-lg">
                Our Services
              </a>
              <a href="#contact" className="btn btn-outline btn-lg">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-base-content/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
            <p className="text-lg text-base-content/80">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="card-title text-2xl">{service.title}</h3>
                  <p className="text-base-content/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-base-content/80">
              Tailored solutions for diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry, i) => (
              <span key={i} className="badge badge-lg badge-outline p-4 text-base-content/80">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 550+ businesses trusting Silvadew for their technology needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+15712763358" className="btn btn-secondary btn-lg">
              Call +1 (571) 276-3358
            </a>
            <a href="mailto:info@silvadew.com" className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Silvadew</h3>
              <p className="text-base-content/70">
                Custom software development and IT training for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-base-content/70">
                <li>📞 +1 (571) 276-3358</li>
                <li>✉️ info@silvadew.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-base-content/70">
                <li><a href="#services" className="hover:text-primary">Services</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-base-content/20 mt-8 pt-8 text-center text-base-content/60">
            © 2026 Silvadew Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
