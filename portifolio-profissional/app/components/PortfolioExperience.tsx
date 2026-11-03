import Image from "next/image";

const projects = [
  { number: "01", name: "Wellbeing identity", category: "BRAND STRATEGY · 2024", image: "/images/wellbeing-identity.jpg", imageAlt: "A sunlit café table surrounded by plants", description: "A visual language for an everyday wellbeing concept." },
  { number: "02", name: "Independent journal", category: "ART DIRECTION · 2023", image: "/images/independent-journal.jpg", imageAlt: "Sculptural contemporary architecture beneath an open sky", description: "An editorial concept with a clear point of view." },
  { number: "03", name: "Thoughtful retail", category: "DIGITAL PRODUCT · 2023", image: "/images/thoughtful-retail.jpg", imageAlt: "A bright modern living room with natural materials", description: "A considered shopping experience for everyday goods." },
];

const experience = [
  { years: "2021 — NOW", role: "Independent Designer", company: "Freelance · Brooklyn, NY" },
  { years: "2018 — 2021", role: "Senior Brand Designer", company: "Independent creative studio · New York, NY" },
  { years: "2016 — 2018", role: "Visual Designer", company: "Design team · Portland, OR" },
];

function Header() {
  return (
    <header className="portfolio-header">
      <a className="portfolio-logo" href="#home" aria-label="Independent designer, home">ID<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a></nav>
      <a className="availability" href="mailto:hello@designer.example"><span /> AVAILABLE FOR SELECT PROJECTS <b>↗</b></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="portfolio-hero" id="home">
      <div className="hero-index"><span>INDEPENDENT DESIGNER</span><span>BASED IN NEW YORK CITY ↘</span></div>
      <div className="hero-layout"><div className="hero-title"><p>INDEPENDENT DESIGN PRACTICE</p><h1>Good<br /><em>design</em><span className="hero-period">.</span></h1><p className="hero-role">Brand design & creative partnership<br />for people building a better kind of thing.</p><a className="work-link" href="#work">EXPLORE SELECTED WORK <span>↓</span></a></div><div className="portrait-wrap"><div className="portrait" role="img" aria-label="Abstract geometric illustration" /><span className="portrait-caption">A STUDY IN COLOR AND FORM · 2024</span><div className="portrait-stamp">GOOD<br />THINGS<br /><em>TAKE</em><br />SHAPE<span>✳</span></div></div></div>
      <div className="hero-bottom"><span>IDENTITY / DIGITAL / ART DIRECTION</span><span>SCROLL A LITTLE ↓</span></div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="work-section" id="work"><div className="section-topline"><span>01 — SELECTED WORK</span><span>A FEW THINGS MADE WITH GOOD PEOPLE</span></div><div className="work-heading"><h2>Ideas into<br /><em>identities.</em></h2><p>A selection of sample projects, from first sketches to the finished thing.</p></div><div className="project-list">{projects.map((project) => <a className={`project-row project-${project.number}`} href="#contact" key={project.number}><div className="project-image"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1200px) 42vw, 530px" /><span>VIEW PROJECT ↗</span></div><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-number">{project.number}</span></div></a>)}</div></section>
  );
}

function About() {
  return (
    <section className="about-section" id="about"><div className="section-topline"><span>02 — A LITTLE ABOUT THE PRACTICE</span><span>DESIGN WITH A POINT OF VIEW</span></div><div className="about-grid"><h2>Good design<br />should <em>feel like</em><br />something.</h2><div className="about-copy"><p className="about-lead">A creative partner for people who believe in what they&apos;re building — and want the world to feel it, too.</p><p>This sample portfolio represents eight years of creative work, from finding the heart of a brand to bringing it to life with clarity and character.</p><p>Independent by choice. Collaborative by nature. Always up for a long walk and a short feedback loop.</p><div className="skill-tags"><span>BRAND IDENTITY</span><span>ART DIRECTION</span><span>DIGITAL DESIGN</span><span>STRATEGY</span></div><a className="about-link" href="mailto:hello@designer.example">GET IN TOUCH <span>↗</span></a></div></div></section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience"><div className="section-topline"><span>03 — THE ROAD SO FAR</span><span>EXPERIENCE & EDUCATION</span></div><h2>A few good<br /><em>chapters.</em></h2><div className="experience-list">{experience.map((job) => <article className="experience-row" key={job.years}><span>{job.years}</span><div><h3>{job.role}</h3><p>{job.company}</p></div><span className="experience-arrow">↗</span></article>)}</div><div className="education-row"><span>2012 — 2016</span><div><h3>BFA, Communication Design</h3><p>Communication design studies</p></div><span className="education-note">PORTLAND, OR</span></div></section>
  );
}

function Contact() {
  return <footer className="portfolio-footer" id="contact"><div className="section-topline"><span>04 — YOUR TURN</span><span>HAVE A GOOD ONE IN MIND?</span></div><div className="footer-main"><h2>Let&apos;s make<br /><em>something matter.</em></h2><a className="email-button" href="mailto:hello@designer.example">GET IN TOUCH <span>↗</span></a></div><div className="footer-bottom"><a className="portfolio-logo" href="#home">ID<span>.</span></a><span>© 2024 · Sample professional portfolio</span><div><a href="mailto:hello@designer.example">CONTACT ↗</a></div></div></footer>;
}

export default function PortfolioExperience() {
  return <main className="portfolio-page"><Header /><Hero /><SelectedWork /><About /><Experience /><Contact /></main>;
}
