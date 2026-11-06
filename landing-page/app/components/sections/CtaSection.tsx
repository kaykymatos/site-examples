import ArrowIcon from "../ArrowIcon";

export default function CtaSection() {
  return (
    <section className="cta-section section-wrap" id="pricing">
      <div>
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>Make room for<br /><em>your best work.</em></h2>
        <p>Join teams who are finding a better rhythm together.</p>
      </div>
      <a className="button button-dark" href="mailto:hello@workspace.example" id="contact">
        Start your free trial <ArrowIcon />
      </a>
    </section>
  );
}
