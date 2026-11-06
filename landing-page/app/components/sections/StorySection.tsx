export default function StorySection() {
  return (
    <section className="story-section" id="stories">
      <div className="story-inner">
        <span className="eyebrow">GOOD WORK, GOOD PEOPLE</span>
        <blockquote>“A little more <em>space to think</em> and a lot more time to make things we&apos;re proud of.”</blockquote>
        <div className="quote-author">
          <span className="quote-avatar" aria-hidden="true">✳</span>
          <span><strong>A studio founder</strong><small>Small creative team</small></span>
        </div>
      </div>
      <div className="story-stat">
        <strong>32<span>%</span></strong>
        <p>less time spent in status meetings</p>
        <span className="stat-caption">ACROSS OUR CUSTOMER COMMUNITY</span>
      </div>
    </section>
  );
}
