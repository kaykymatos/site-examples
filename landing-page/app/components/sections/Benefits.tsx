const benefits = [
  {
    number: "01",
    title: "Everything in one place",
    description:
      "Bring your team, projects, and priorities together in a workspace that actually makes sense.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Less busywork, more impact",
    description:
      "Automate the repetitive stuff and give your best people more time to do their best work.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Make confident decisions",
    description:
      "See progress as it happens with clear reporting your whole team can understand.",
    icon: "⌁",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section section-wrap" id="benefits">
      <div className="section-heading"><span className="eyebrow">A BETTER WAY TO WORK</span><h2>Big ideas deserve<br /><em>better systems.</em></h2><p>Less juggling tabs. More room for the work that matters.</p></div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.number}>
            <span className="benefit-icon">{benefit.icon}</span>
            <span className="benefit-number">{benefit.number}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
