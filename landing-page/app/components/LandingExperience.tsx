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

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
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
        <a className="login-link" href="#contact">Log in</a>
        <a className="button button-dark button-small" href="#contact">
          Get started <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

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

function Hero() {
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

function Benefits() {
  return (
    <section className="benefits-section section-wrap" id="benefits">
      <div className="section-heading"><span className="eyebrow">A BETTER WAY TO WORK</span><h2>Big ideas deserve<br /><em>better systems.</em></h2><p>Less juggling tabs. More room for the work that matters.</p></div>
      <div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.number}><span className="benefit-icon">{benefit.icon}</span><span className="benefit-number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div>
    </section>
  );
}

function StoryAndContact() {
  return (
    <>
      <section className="story-section" id="stories"><div className="story-inner"><span className="eyebrow">GOOD WORK, GOOD PEOPLE</span><blockquote>“A little more <em>space to think</em> and a lot more time to make things we&apos;re proud of.”</blockquote><div className="quote-author"><span className="quote-avatar" aria-hidden="true">✳</span><span><strong>A studio founder</strong><small>Small creative team</small></span></div></div><div className="story-stat"><strong>32<span>%</span></strong><p>less time spent in status meetings</p><span className="stat-caption">ACROSS OUR CUSTOMER COMMUNITY</span></div></section>
      <section className="cta-section section-wrap" id="pricing"><div><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Make room for<br /><em>your best work.</em></h2><p>Join teams who are finding a better rhythm together.</p></div><a className="button button-dark" href="mailto:hello@workspace.example" id="contact">Start your free trial <ArrowIcon /></a></section>
    </>
  );
}

export default function LandingExperience() {
  return <main className="landing-page"><Header /><Hero /><div className="logo-strip"><span>DESIGNED FOR TEAMS WHO VALUE</span><strong>Clarity</strong><strong className="serif-logo">Craft</strong><strong>Care</strong><strong className="wide-logo">COLLABORATION</strong><strong>Good work</strong></div><Benefits /><StoryAndContact /><footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">◈</span>workspace</a><span>© 2024 · A sample product landing page.</span><a href="mailto:hello@workspace.example">Say hello ↗</a></footer></main>;
}
