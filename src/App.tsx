import { useState, type FormEvent } from "react";
import brandBanner from "../kb_technologies_paris_linkedin_banner_graphite_platinum.png";
import brandIcon from "../kb-technologies-icon.png";
import founderPhoto from "../ChatGPT Image Sep 27, 2026, 01_10_55 PM.png";

const contactEmail = "contact@kbtechnologies.fr";
const contactPhone = "+33757143957";

const services = [
  {
    number: "01",
    title: "Custom software",
    description:
      "Purpose-built digital tools for the way your business actually operates, from a focused internal app to a complete web platform.",
    details: "React · TypeScript · Node.js",
  },
  {
    number: "02",
    title: "Websites that work",
    description:
      "A clear, considered website that explains what you do, earns trust, and gives the right people a simple next step.",
    details: "Strategy · Design · Development",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your goals, your people, and the friction you want to remove.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Together, we define the right scope and a practical direction before building.",
  },
  {
    number: "03",
    title: "Build & refine",
    description:
      "Your solution takes shape in clear steps, with room for feedback along the way.",
  },
];

function App() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const subject = `Project enquiry from ${values.get("name")}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Company: ${values.get("company") || "Not provided"}`,
      `Project type: ${values.get("projectType")}`,
      "",
      "Project details:",
      `${values.get("projectDetails")}`,
    ].join("\n");

    setFormStatus("Opening a new email with your project details.");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="KB Technologies Paris home">
          <img src={brandIcon} alt="" className="brand-icon" />
          <span className="brand-name">
            <span>KB Technologies</span>
            <span className="brand-city">Paris</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let's talk <span aria-hidden="true">-&gt;</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Independent digital studio · Paris</p>
            <h1 id="hero-title">Software that fits the way your business works.</h1>
            <p className="hero-summary">
              KB Technologies Paris builds custom software and thoughtful websites
              for SMEs ready to make their next move.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#contact">
                Tell us what you're building <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="text-link" href={`tel:${contactPhone}`}>
                Or call +33 7 57 14 39 57
              </a>
            </div>
            <p className="hero-footnote">Clear thinking. Carefully built technology.</p>
          </div>

          <div className="hero-visual" aria-label="Meet the founder of KB Technologies Paris">
            <div className="visual-index"><span>Meet your developer</span><span>Paris · SMEs</span></div>
            <img className="founder-photo" src={founderPhoto} alt="Founder of KB Technologies Paris" />
            <div className="visual-caption">
              <span>Direct collaboration</span>
              <span className="caption-rule" aria-hidden="true" />
              <span>From first idea to launch</span>
            </div>
          </div>
          <div className="hero-bottomline" aria-hidden="true">
            <span>Custom software</span><span>Websites</span><span>Built for SMEs</span>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">What we build</p>
              <h2 id="services-title">The right digital tools.<br />Nothing you don't need.</h2>
              <p className="section-intro">
                Your business is different. Your technology should be too.
              </p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <p className="service-details">{service.details}</p>
                </article>
              ))}
            </div>
            <div className="stack-line">
              <span className="stack-label">Technology, chosen for the job</span>
              <p>React <span>/</span> TypeScript <span>/</span> JavaScript <span>/</span> Node.js</p>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-shell">
            <div className="approach-heading">
              <p className="eyebrow">A straightforward process</p>
              <h2 id="approach-title">From business challenge<br />to useful technology.</h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-banner-section section-shell" aria-label="KB Technologies Paris custom software for SMEs">
          <img className="brand-banner" src={brandBanner} alt="KB Technologies Paris — custom software for SMEs" />
        </section>

        <section className="about-section section-shell" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">A human-sized studio</p>
            <h2 id="about-title">Good technology starts with a real conversation.</h2>
            <p>
              No jargon-filled hand-offs. No technology for its own sake. Just a
              thoughtful conversation about what your business needs, followed by
              a solution shaped around that brief.
            </p>
            <a className="text-link about-link" href="#contact">
              Meet us at the start of your project <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Your next step</p>
              <h2 id="contact-title">Let's make your next idea real.</h2>
              <p className="contact-intro">
                Tell us what is taking too much time, what needs to work better,
                or what you want to build. We will take it from there.
              </p>
              <div className="contact-details">
                <a href={`tel:${contactPhone}`}>
                  <span>Call</span>+33 7 57 14 39 57
                </a>
                <a href={`mailto:${contactEmail}`}>
                  <span>Email</span>{contactEmail}
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Your name
                  <input autoComplete="name" name="name" required />
                </label>
                <label>
                  Work email
                  <input autoComplete="email" name="email" type="email" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Company <span className="optional-label">Optional</span>
                  <input autoComplete="organization" name="company" />
                </label>
                <label>
                  What do you need?
                  <select name="projectType" defaultValue="" required>
                    <option value="" disabled>Select a project type</option>
                    <option>Custom software</option>
                    <option>Website</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <label>
                A little about your project
                <textarea name="projectDetails" rows={4} required />
              </label>
              <div className="form-submit-row">
                <button className="button button-dark" type="submit">
                  Send my project brief <span aria-hidden="true">-&gt;</span>
                </button>
                <span className="form-note">Opens a pre-filled email in your email app.</span>
              </div>
              <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="KB Technologies Paris home">
            <img src={brandIcon} alt="" className="brand-icon" />
            <span className="brand-name"><span>KB Technologies</span><span className="brand-city">Paris</span></span>
          </a>
          <p>Custom software & websites for SMEs.</p>
          <span className="footer-location">Paris, France</span>
          <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">^</span></a>
        </div>
      </footer>
    </>
  );
}

export default App;