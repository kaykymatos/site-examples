const services = [
  { index: "01", title: "Brand strategy", detail: "Positioning, identity systems, and the story people remember.", mark: "↗" },
  { index: "02", title: "Digital experiences", detail: "Thoughtful websites and products made for real people.", mark: "⌘" },
  { index: "03", title: "Creative direction", detail: "A clear point of view, carried through every detail.", mark: "✳" },
];

function Header() {
  return (
    <header className="company-header">
      <a className="company-brand" href="#home"><span className="brand-symbol">✳</span><span>CREATIVE STUDIO<small>INDEPENDENT PRACTICE</small></span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#services">What we do</a><a href="#work">Selected work</a></nav>
      <a className="contact-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}

function Intro() {
  return (
    <section className="company-hero" id="home">
      <div className="hero-text">
        <p className="overline"><span /> INDEPENDENT BY NATURE. CREATIVE BY DESIGN.</p>
        <h1>We make<br />good things<br /><em>matter.</em></h1>
        <p className="hero-intro">This independent creative studio helps ambitious people build brands with a little more meaning.</p>
        <a className="text-arrow" href="#about">A bit about us <span>↘</span></a>
      </div>
      <div className="hero-photo" role="img" aria-label="A sunlit modern creative studio with glass walls and meeting rooms"><div className="photo-caption"><span>FIG. 01</span><span>GOOD IDEAS LIVE HERE</span></div></div>
      <div className="hero-note">EST. 2016<br />BROOKLYN, NY</div>
      <div className="hero-bottom-line"><span>STRATEGY / DESIGN / DIGITAL</span><a href="#services">SCROLL TO EXPLORE ↓</a></div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-label"><span className="section-number">01 /</span><span>THE STUDIO APPROACH</span></div>
      <div className="about-copy"><h2>Small enough to care.<br /><em>Experienced enough to know.</em></h2><p>We partner with people who believe their work can make a difference. Then we help them find the words, visuals, and experiences to prove it.</p><p>Our team brings together curious minds and considered craft, building brands with a clear point of view — and the staying power to match.</p><a className="text-arrow" href="#contact">Meet your new creative partners <span>↗</span></a></div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-kicker"><span className="section-number">02 /</span><span>GOOD WORK, DONE TOGETHER</span></div>
      <div className="services-heading"><h2>What we<br /><em>bring to the table.</em></h2><p>Big-picture thinking, sleeves-rolled-up making, and a shared belief that the details are the whole point.</p></div>
      <div className="service-list">{services.map((service) => <article className="service-row" key={service.index}><span className="service-index">{service.index}</span><span className="service-mark">{service.mark}</span><h3>{service.title}</h3><p>{service.detail}</p><a href="#contact" aria-label={`Learn about ${service.title}`}>↗</a></article>)}</div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="work-section" id="work">
      <div className="section-kicker"><span className="section-number">03 /</span><span>A FEW RECENT FAVORITES</span></div>
      <div className="work-heading"><h2>Made with<br /><em>good people.</em></h2><a className="text-arrow" href="mailto:hello@studio.example">Have a project in mind? <span>↗</span></a></div>
      <div className="work-grid"><article className="work-card work-one"><div className="work-image image-one" role="img" aria-label="A coffee shop table with cups, plants, and natural light" /><span>BRAND STRATEGY · PACKAGING</span><h3>Coffee packaging</h3></article><article className="work-card work-two"><div className="work-image image-two" role="img" aria-label="Contemporary geometric architecture against the sky" /><span>IDENTITY · DIGITAL</span><h3>Public space identity</h3></article></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="company-footer" id="contact"><div><p className="overline">A GOOD PLACE TO BEGIN</p><h2>Tell us what<br /><em>you&apos;re thinking.</em></h2><a className="footer-email" href="mailto:hello@studio.example">hello@studio.example <span>↗</span></a></div><div className="footer-bottom"><a className="company-brand" href="#home"><span className="brand-symbol">✳</span><span>CREATIVE STUDIO<small>INDEPENDENT PRACTICE</small></span></a><span>Brooklyn, NY · Working everywhere</span><span>© 2024 · Sample company website</span></div></footer>
  );
}

export default function CompanyExperience() {
  return <main className="company-page"><Header /><Intro /><About /><Services /><FeaturedWork /><Footer /></main>;
}
