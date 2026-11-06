import Link from "next/link";

export default function Header() {
  return <header className="restaurant-header"><Link className="restaurant-logo" href="/#home">KITCHEN<span>✳</span><small>NEIGHBORHOOD DINING</small></Link><nav aria-label="Main navigation"><Link href="/#story">Our story</Link><Link href="/#menu">Menu</Link><Link href="/#visit">Find us</Link></nav><a className="reserve-button" href="tel:+15551234567">Call to reserve <span>↗</span></a></header>;
}
