const services = [
  { index: "01", title: "Brand strategy", detail: "Positioning, identity systems, and the story people remember.", mark: "↗" },
  { index: "02", title: "Digital experiences", detail: "Thoughtful websites and products made for real people.", mark: "⌘" },
  { index: "03", title: "Creative direction", detail: "A clear point of view, carried through every detail.", mark: "✳" },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-kicker"><span className="section-number">02 /</span><span>GOOD WORK, DONE TOGETHER</span></div>
      <div className="services-heading"><h2>What we<br /><em>bring to the table.</em></h2><p>Big-picture thinking, sleeves-rolled-up making, and a shared belief that the details are the whole point.</p></div>
      <div className="service-list">{services.map((service) => <article className="service-row" key={service.index}><span className="service-index">{service.index}</span><span className="service-mark">{service.mark}</span><h3>{service.title}</h3><p>{service.detail}</p><a href="#contact" aria-label={`Learn about ${service.title}`}>↗</a></article>)}</div>
    </section>
  );
}
