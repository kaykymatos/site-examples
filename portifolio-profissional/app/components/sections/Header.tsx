export default function Header() {
  return (
    <header className="portfolio-header">
      <a className="portfolio-logo" href="#home" aria-label="Independent designer, home">ID<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a></nav>
      <a className="availability" href="mailto:hello@designer.example"><span /> AVAILABLE FOR SELECT PROJECTS <b>↗</b></a>
    </header>
  );
}
