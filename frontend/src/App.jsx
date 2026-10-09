import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Crane rental',
    description:
      'The right crane for your site, schedule and lifting requirements, supported by a team that understands the work.',
    icon: 'crane',
  },
  {
    number: '02',
    title: 'Heavy lifting',
    description:
      'Carefully coordinated lifting support for heavy, oversized and critical loads across demanding environments.',
    icon: 'lift',
  },
  {
    number: '03',
    title: 'Erection & installation',
    description:
      'Practical lifting support to position, erect and install equipment and structures with care.',
    icon: 'structure',
  },
  {
    number: '04',
    title: 'Transportation',
    description:
      'Coordinated movement of equipment and loads, planned around access, route and site requirements.',
    icon: 'transport',
  },
  {
    number: '05',
    title: 'Project lifting solutions',
    description:
      'A considered approach to complex lifts, bringing equipment, people and planning together around your project.',
    icon: 'project',
  },
]

const equipment = [
  {
    number: '01',
    title: 'Mobile cranes',
    type: 'Versatile lifting',
    specs: [
      ['Capacity', 'Selected for the lift'],
      ['Configuration', 'Matched to site access'],
      ['Best suited to', 'Flexible, changing sites'],
    ],
  },
  {
    number: '02',
    title: 'Crawler cranes',
    type: 'Heavy-duty lifting',
    specs: [
      ['Capacity', 'Selected for the lift'],
      ['Configuration', 'Matched to ground conditions'],
      ['Best suited to', 'Longer-duration projects'],
    ],
  },
  {
    number: '03',
    title: 'Truck-mounted cranes',
    type: 'Road-ready mobility',
    specs: [
      ['Capacity', 'Selected for the lift'],
      ['Configuration', 'Matched to access needs'],
      ['Best suited to', 'Efficient site-to-site work'],
    ],
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ServiceIcon({ name }) {
  const paths = {
    crane: <><path d="M3 18h18M6 18V5h2v13M7 5h12M14 5v3l-2 2m2-2 2 2M18 5v4" /><path d="M17 9v4l1.5 1.5" /></>,
    lift: <><path d="M4 19h16M7 19V6h10v13M7 9h10M12 6V3m-2 0h4" /><path d="M12 10v6m-2-2 2 2 2-2" /></>,
    structure: <><path d="M4 19h16M6 19V5h12v14M6 9h12M10 5v14M14 5v14" /><path d="M4 5h16" /></>,
    transport: <><path d="M3 16V7h11v9M14 10h4l3 3v3h-7" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
    project: <><path d="M4 19V6h16v13M2 19h20M8 6V3h8v3M8 10h8M8 14h5" /></>,
  }

  return (
    <svg className="service-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Jumbo home" onClick={closeMenu}>
            <img src="/jumbo-logo.jpg" alt="Jumbo — Strength You Can Rely On" />
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav id="main-navigation" className={menuOpen ? 'main-navigation is-open' : 'main-navigation'} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#equipment" onClick={closeMenu}>Equipment</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-quote" href="#contact" onClick={closeMenu}>Get a Quote <ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Strength you can rely on</p>
            <h1 id="hero-title">Reliable lifting solutions. <span>Built for every challenge.</span></h1>
            <p className="hero-description">
              Dependable crane rental and lifting solutions for demanding projects. Jumbo brings the equipment, coordination and care your next lift calls for.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get a Quote <ArrowIcon /></a>
              <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <span className="hero-note-rule" />
              <p>Planned with purpose.<br /><strong>Delivered with confidence.</strong></p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1650630718105-497674381f3c?auto=format&fit=crop&w=2200&q=85"
              alt="A tall yellow construction crane rising against the sky"
              fetchPriority="high"
            />
            <div className="image-caption"><span className="caption-dot" /> Lifting solutions for work that matters</div>
          </div>
          <div className="hero-bottomline"><span>JUMBO LIFTING SOLUTIONS</span><span>01 / 05</span></div>
        </section>

        <section className="intro-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /> ABOUT JUMBO</div>
          <div className="intro-content">
            <h2 id="about-title">The strength behind <span>every lift.</span></h2>
            <div className="intro-copy">
              <p>Every project has its own demands. Jumbo provides reliable crane rental and lifting solutions that help teams move heavy loads with confidence.</p>
              <p>From equipment selection to on-site coordination, we work with your requirements in mind—so every lift starts with a clear plan.</p>
              <a className="text-link text-link-dark" href="#contact">Get to know Jumbo <ArrowIcon /></a>
            </div>
          </div>
          <div className="intro-ribbon"><span>Strength You Can Rely On</span><span className="ribbon-accent" /><span>Planning · Equipment · Execution</span></div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span>02</span><span className="kicker-line" /> WHAT WE DO</div>
                <h2 id="services-title">Lifting support, <span>made practical.</span></h2>
              </div>
              <p>From a single crane rental to coordinated project lifting, we help you find the right way forward.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span className="card-number">{service.number}</span><ServiceIcon name={service.icon} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Discuss ${service.title.toLowerCase()} with Jumbo`}><ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="equipment-section section-wrap" id="equipment" aria-labelledby="equipment-title">
          <div className="section-kicker"><span>03</span><span className="kicker-line" /> OUR EQUIPMENT</div>
          <div className="section-heading equipment-heading">
            <div><h2 id="equipment-title">The right machine <span>for the lift.</span></h2></div>
            <p>Equipment is selected around your load, access and site conditions. Final capacities and configurations are confirmed for each requirement.</p>
          </div>
          <div className="equipment-grid">
            {equipment.map((item) => (
              <article className="equipment-card" key={item.number}>
                <div className="equipment-card-head"><span>{item.number} / EQUIPMENT</span><span className="equipment-dot" /></div>
                <p className="equipment-type">{item.type}</p>
                <h3>{item.title}</h3>
                <dl>
                  {item.specs.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <p className="equipment-footnote"><span>+</span> Need a specific capacity or configuration? Tell us about the lift and we’ll help scope the requirement.</p>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="projects-inner section-wrap">
            <div className="section-kicker section-kicker-light"><span>04</span><span className="kicker-line" /> PROJECTS
            </div>
            <div className="projects-content">
              <p className="projects-label">Every site. Every scale.</p>
              <h2 id="projects-title">Ready for the <span>work ahead.</span></h2>
              <p>Jumbo supports construction, infrastructure, industrial and installation work with lifting solutions shaped around the project.</p>
              <a className="button button-light" href="#contact">Discuss your project <ArrowIcon /></a>
            </div>
            <div className="projects-side-note"><span className="projects-side-line" /><span>Clear planning<br />for complex work</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-title-block">
            <div className="section-kicker"><span>05</span><span className="kicker-line" /> START A CONVERSATION</div>
            <h2 id="contact-title">Let’s plan <span>your next lift.</span></h2>
            <p>Tell us a little about your project. We’ll help you explore the lifting solution that fits.</p>
          </div>
          <a className="button button-primary contact-cta" href="mailto:?subject=Jumbo%20lifting%20enquiry&body=Please%20share%20your%20contact%20details%20and%20lifting%20requirements%20here.">Get a Quote <ArrowIcon /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <a className="footer-brand" href="#home"><img src="/jumbo-logo.jpg" alt="Jumbo — Strength You Can Rely On" /></a>
          <p>Reliable lifting solutions.<br />Built for every challenge.</p>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#equipment">Equipment</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Jumbo Lifting Solutions</span><span>Strength You Can Rely On</span></div>
      </footer>
    </>
  )
}

export default App
