import Image from "next/image";

const projects = [
  { number: "01", name: "Wellbeing identity", category: "BRAND STRATEGY · 2024", image: "/images/wellbeing-identity.jpg", imageAlt: "A sunlit café table surrounded by plants", description: "A visual language for an everyday wellbeing concept." },
  { number: "02", name: "Independent journal", category: "ART DIRECTION · 2023", image: "/images/independent-journal.jpg", imageAlt: "Sculptural contemporary architecture beneath an open sky", description: "An editorial concept with a clear point of view." },
  { number: "03", name: "Thoughtful retail", category: "DIGITAL PRODUCT · 2023", image: "/images/thoughtful-retail.jpg", imageAlt: "A bright modern living room with natural materials", description: "A considered shopping experience for everyday goods." },
];

export default function SelectedWork() {
  return (
    <section className="work-section" id="work"><div className="section-topline"><span>01 — SELECTED WORK</span><span>A FEW THINGS MADE WITH GOOD PEOPLE</span></div><div className="work-heading"><h2>Ideas into<br /><em>identities.</em></h2><p>A selection of sample projects, from first sketches to the finished thing.</p></div><div className="project-list">{projects.map((project) => <a className={`project-row project-${project.number}`} href="#contact" key={project.number}><div className="project-image"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1200px) 42vw, 530px" /><span>VIEW PROJECT ↗</span></div><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-number">{project.number}</span></div></a>)}</div></section>
  );
}
