import { Link } from 'react-router-dom'
import FloatingCircles from '../../Components/FloatingCircles'

export default function Home() {
  return (
    <section className="portfolio-hero">
      <FloatingCircles />

      <div className="container hero-content-wrap">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hero-copy">
              <p className="hero-kicker">AUTOMATION • AI • FRONTEND</p>
              <h1 className="hero-heading hero-animated-title">
                <span className="hero-line">
                  {['Hi,', ' ', 'I', "'m"].map((char, index) => (
                    <span
                      key={`intro-${index}`}
                      className="hero-letter"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>

                <span className="hero-line hero-name-line">
                  {'Vaishnavi Reddy'.split('').map((char, index) => (
                    <span
                      key={`name-${index}`}
                      className="hero-letter hero-name-letter"
                      style={{ animationDelay: `${0.4 + index * 0.06}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="hero-description">
                Project Assistant @ INOSIM. M.Sc. in Automation and Robotics at TU Dortmund University, with hands-on experience in
                machine learning, reinforcement learning, frontend development, and UI/UX-driven product prototyping.
              </p>
              <div className="hero-highlight-row">
                <span className="hero-chip">M.Sc. Automation and Robotics</span>
                <span className="hero-chip">INOSIM GmbH</span>
              </div>
              <div className="hero-actions">
                <Link to="/techstack" className="btn hero-primary-btn">Tech Stack</Link>
                <Link to="/studies" className="btn hero-primary-btn">Studies</Link>
                <Link to="/projects" className="btn hero-primary-btn">Projects</Link>
                <Link to="/experience" className="btn hero-primary-btn">Experience</Link>
                <Link to="/contact" className="btn hero-primary-btn">Contact</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-illustration-shell">
              <div className="hero-illustration-card personal-photo-card">
                <div className="photo-placeholder-wrap">
                  <img
                    src="src/assets/Profile1.jpg"
                    alt="Vaishnavi Reddy"
                    className="hero-illustration profile-photo-hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
