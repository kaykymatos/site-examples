import ArrowIcon from "../ArrowIcon";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Team workspace home">
        <span className="brand-mark" aria-hidden="true">◈</span>
        workspace
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#benefits">Why this workspace</a>
        <a href="#stories">Stories</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="header-actions">
        <a className="button button-dark button-small" href="#contact"> Get started <ArrowIcon />
        </a>
      </div>
    </header>
  );
}
