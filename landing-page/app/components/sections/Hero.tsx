import ArrowIcon from "../ArrowIcon";

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="A preview of a project workspace dashboard">
      <div className="preview-sidebar">
        <div className="preview-logo"><span>◈</span> workspace</div>
        <div className="preview-section-label">WORKSPACE</div>
        <div className="preview-nav-item preview-nav-active">◫ &nbsp; Overview</div>
        <div className="preview-nav-item">▦ &nbsp; My projects</div>
        <div className="preview-nav-item">◷ &nbsp; Activity</div>
        <div className="preview-nav-item">♙ &nbsp; Team</div>
        <div className="preview-profile"><span className="avatar" aria-hidden="true">•</span><span>Team member<small>Workspace admin</small></span><b>⌄</b></div>
      </div>
      <div className="preview-main">
        <div className="preview-topbar"><span>Monday, October 21, 2024</span><span className="preview-search">⌕ &nbsp; Search anything</span><span className="notification">♧</span></div>
        <div className="preview-heading"><div><p className="eyebrow">YOUR WORKSPACE</p><h3>Good morning <span>✳</span></h3><p>Here&apos;s what&apos;s happening with your projects today.</p></div><button type="button" className="preview-add">＋ New project</button></div>
        <div className="stat-grid">
          <div className="stat-card"><span>Active projects</span><strong>12</strong><small className="stat-up">↗ 2 this month</small></div>
          <div className="stat-card"><span>Tasks completed</span><strong>84<span>%</span></strong><small className="stat-up">↗ 12% this month</small></div>
          <div className="stat-card"><span>Team capacity</span><strong>76<span>%</span></strong><small>Looking good</small></div>
        </div>
        <div className="project-card">
          <div className="project-card-title"><strong>Project health</strong><span>View all projects ↗</span></div>
          <div className="project-line"><span className="project-dot dot-purple" /><span>Website redesign</span><div className="progress"><i style={{ width: "72%" }} /></div><small>72%</small><span className="project-status">On track</span></div>
          <div className="project-line"><span className="project-dot dot-orange" /><span>Q4 campaign launch</span><div className="progress"><i style={{ width: "48%" }} /></div><small>48%</small><span className="project-status status-review">In review</span></div>
          <div className="project-line"><span className="project-dot dot-green" /><span>Mobile app v2.0</span><div className="progress"><i style={{ width: "91%" }} /></div><small>91%</small><span className="project-status">On track</span></div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="announcement"><span>✦</span> A better way to bring work together <a href="#benefits">Discover why ↗</a></div>
        <h1>Make work<br />feel a little more <em>human.</em></h1>
        <p className="hero-description">A calmer, clearer way to plan projects, bring people together, and do your best work — all in one place.</p>
        <div className="hero-actions"><a className="button button-dark" href="#contact">Start your free trial <ArrowIcon /></a><a className="button button-light" href="#benefits"><span className="play-icon">▶</span> See how it works</a></div>
        <div className="social-proof"><div className="avatar-stack" aria-hidden="true"><span>A</span><span>M</span><span>J</span><span>S</span></div><div><div className="stars">★★★★★</div><small>Loved by 2,000+ thoughtful teams</small></div></div>
      </div>
      <div className="hero-visual"><div className="orb orb-one" /><div className="orb orb-two" /><ProductPreview /><div className="floating-note"><span className="note-check">✓</span><span><strong>Milestone reached!</strong><small>Website redesign is on track</small></span></div></div>
    </section>
  );
}
