import Link from "next/link";

export default function Header() {
  return <header className="realty-header"><Link className="realty-logo" href="/#home"><span className="logo-mark">⌂</span><span>PROPERTY ADVISORS<small>BROOKLYN · NEW YORK</small></span></Link><nav aria-label="Main navigation"><Link href="/#homes">Find a home</Link><Link href="/#about">Our approach</Link><Link href="/#contact">Contact</Link></nav><a className="header-contact" href="mailto:hello@property.example">Get in touch</a></header>;
}
