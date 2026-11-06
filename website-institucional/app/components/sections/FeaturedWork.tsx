export default function FeaturedWork() {
  return (
    <section className="work-section" id="work">
      <div className="section-kicker"><span className="section-number">03 /</span><span>A FEW RECENT FAVORITES</span></div>
      <div className="work-heading"><h2>Made with<br /><em>good people.</em></h2><a className="text-arrow" href="mailto:hello@studio.example">Have a project in mind? <span>↗</span></a></div>
      <div className="work-grid"><article className="work-card work-one"><div className="work-image image-one" role="img" aria-label="A coffee shop table with cups, plants, and natural light" /><span>BRAND STRATEGY · PACKAGING</span><h3>Coffee packaging</h3></article><article className="work-card work-two"><div className="work-image image-two" role="img" aria-label="Contemporary geometric architecture against the sky" /><span>IDENTITY · DIGITAL</span><h3>Public space identity</h3></article></div>
    </section>
  );
}
