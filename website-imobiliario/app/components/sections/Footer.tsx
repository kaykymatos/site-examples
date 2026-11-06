import Link from "next/link";

export default function Footer() {
  return <footer className="realty-footer" id="contact"><div className="footer-main"><div><span className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Let&apos;s find<br /><em>your somewhere.</em></h2></div><div className="footer-contact"><p>Tell us what you&apos;re looking for.<br />We&apos;ll take it from there.</p><a href="mailto:hello@property.example">hello@property.example ↗</a></div></div><div className="footer-bottom"><Link className="realty-logo" href="/#home"><span className="logo-mark">⌂</span><span>PROPERTY ADVISORS<small>BROOKLYN · NEW YORK</small></span></Link><span>Brooklyn, NY · Here when you need us.</span><span>© 2024 · Sample property website</span></div></footer>;
}
