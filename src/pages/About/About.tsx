import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './About.css';

const values = [
  { icon: '📸', title: 'Authentic', desc: 'We believe in honest photography — real emotions, real moments, real stories.' },
  { icon: '🎨', title: 'Artistic', desc: 'Every photograph is crafted with a careful eye for light, composition and colour.' },
  { icon: '🤝', title: 'Personal', desc: 'We take time to understand your story before we lift the camera.' },
  { icon: '✨', title: 'Dedicated', desc: 'We bring the same passion and commitment to every shoot, large or small.' },
];

export default function About() {
  useDocumentHead({
    title: 'About | Mani Photography — Our Story & Approach',
    description: 'Learn about Mani Photography — our story, our approach to photography, and what makes us different. We capture authentic emotions at weddings, Tamil ceremonies, pre-wedding shoots and family celebrations.',
  });
  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <span className="label page-hero__label">Our Story</span>
          <h1 className="display-md page-hero__title">About Mani Photography</h1>
          <p className="body-lg page-hero__sub">
            A passion for stories. A commitment to authenticity.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section section--light about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image reveal-left">
              <div className="about-story__img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/about/about-01.jpg`}
                  alt="Mani Photography — behind the scenes at a wedding"
                  className="img-cover"
                  loading="lazy"
                  width="800"
                  height="1000"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '500px' }}>
                  <span className="label-light">Mani Photography</span>
                </div>
              </div>
            </div>

            <div className="about-story__content reveal-right">
              <SectionHeading
                label="Who We Are"
                title="Photography is our language."
                dark={false}
              />
              <p className="body-lg about-story__text">
                Mani Photography was born out of a love for stories. We believe every family, every couple and every celebration carries a story that deserves to be beautifully told.
              </p>
              <p className="body-md about-story__text">
                We work across weddings, pre-weddings, Tamil traditional ceremonies, temple shoots, baby showers, house warmings, engagements and other special occasions — bringing the same dedication and artistry to every project.
              </p>
              <p className="body-md about-story__text">
                What sets us apart is our genuine investment in understanding your story before we begin. We take the time to learn what matters to you, so that when the moment arrives, we are ready to capture it exactly as it was meant to be remembered.
              </p>

              {/* Service Area */}
              <div className="about-service-area">
                <span className="label about-service-area__label">Service Area</span>
                <p className="body-md" style={{ color: 'var(--clr-text-mid)' }}>
                  Based in <strong>{'{Chennai, Tamil Nadu}'}</strong> — we travel across Tamil Nadu and beyond for weddings and special occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section--dark about-philosophy">
        <div className="container">
          <SectionHeading
            label="Our Approach"
            title="The way we see the world."
            align="center"
            className="reveal"
          />
          <div className="about-philosophy__grid">
            {values.map((v, i) => (
              <div key={v.title} className={`about-value reveal reveal-delay-${i + 1}`}>
                <span className="about-value__icon">{v.icon}</span>
                <h3 className="about-value__title title-md">{v.title}</h3>
                <p className="about-value__desc body-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Style */}
      <section className="section section--light about-style">
        <div className="container">
          <div className="about-style__grid">
            <div className="reveal-left">
              <SectionHeading
                label="Our Style"
                title="What makes our photography different."
                dark={false}
              />
              <p className="body-lg about-style__text">
                Our photography style blends candid documentary storytelling with beautiful, timeless portraiture. We prefer natural light wherever possible, and our editing approach is warm, clean and designed to remain beautiful for decades.
              </p>
              <p className="body-md about-style__text">
                We are not looking for forced smiles or stiff poses. We are looking for the real moments — the grandmother's tears, the cousin's laughter, the bride's quiet smile before she walks in.
              </p>
              <p className="body-md about-style__text">
                We cover Tamil traditional ceremonies with particular sensitivity — understanding that each ritual has deep meaning, and that documenting it well is a responsibility we take seriously.
              </p>
            </div>
            <div className="about-style__images reveal-right">
              <div className="about-style__img about-style__img--tall">
                <img
                  src={`${import.meta.env.BASE_URL}images/weddings/wedding-01.jpg`}
                  alt="Candid wedding photography example"
                  className="img-cover"
                  loading="lazy"
                  width="500"
                  height="700"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '300px' }}>
                  <span className="label-light">Wedding Style</span>
                </div>
              </div>
              <div className="about-style__img about-style__img--short">
                <img
                  src={`${import.meta.env.BASE_URL}images/temple/temple-01.jpg`}
                  alt="Temple photography example"
                  className="img-cover"
                  loading="lazy"
                  width="500"
                  height="400"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', minHeight: '200px' }}>
                  <span className="label-light">Temple Style</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-sm reveal" style={{ marginBottom: 'var(--space-4)' }}>
            Let's Create Something Beautiful.
          </h2>
          <p className="body-lg reveal" style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-8)', maxWidth: '500px', marginInline: 'auto' }}>
            We'd love to hear about your event and how we can help preserve it beautifully.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/portfolio" className="btn btn-outline">View Our Portfolio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
