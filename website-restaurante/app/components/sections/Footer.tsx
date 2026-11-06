import Link from "next/link";

export default function Footer() {
  return <footer className="restaurant-footer"><Link className="restaurant-logo" href="/#home">KITCHEN<span>✳</span><small>NEIGHBORHOOD DINING</small></Link><span>Made with care in Brooklyn, New York</span><a href="mailto:hello@restaurant.example">GET IN TOUCH ↗</a><small>© 2024 · SAMPLE RESTAURANT WEBSITE</small></footer>;
}
