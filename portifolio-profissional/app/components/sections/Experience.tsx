const experience = [
  { years: "2021 — NOW", role: "Independent Designer", company: "Freelance · Brooklyn, NY" },
  { years: "2018 — 2021", role: "Senior Brand Designer", company: "Independent creative studio · New York, NY" },
  { years: "2016 — 2018", role: "Visual Designer", company: "Design team · Portland, OR" },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience"><div className="section-topline"><span>03 — THE ROAD SO FAR</span><span>EXPERIENCE & EDUCATION</span></div><h2>A few good<br /><em>chapters.</em></h2><div className="experience-list">{experience.map((job) => <article className="experience-row" key={job.years}><span>{job.years}</span><div><h3>{job.role}</h3><p>{job.company}</p></div><span className="experience-arrow">↗</span></article>)}</div><div className="education-row"><span>2012 — 2016</span><div><h3>BFA, Communication Design</h3><p>Communication design studies</p></div><span className="education-note">PORTLAND, OR</span></div></section>
  );
}
