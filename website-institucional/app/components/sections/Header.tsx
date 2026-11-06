export default function Header() {
  return (
    <header className="company-header">
      <a className="company-brand" href="#home"><span className="brand-symbol">✳</span><span>CREATIVE STUDIO<small>INDEPENDENT PRACTICE</small></span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#services">What we do</a><a href="#work">Selected work</a></nav>
      <a className="contact-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}
