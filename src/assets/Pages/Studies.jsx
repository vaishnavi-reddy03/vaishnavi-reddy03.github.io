import FloatingCircles from '../../Components/FloatingCircles'

export default function Studies() {
  return (
    <section className="theme-page position-relative overflow-hidden">
      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">ACADEMIC BACKGROUND</p>
          <h1 className="theme-title">Studies</h1>
          <p className="theme-subtitle">
            Education, focus areas, and academic direction.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="theme-card h-100">
              <p className="meta-range">Oct 2023 – Jun 2026 (Expected)</p>
              <h3>M.Sc. in Automation and Robotics</h3>
              <p className="meta-place">TU Dortmund University</p>
              <p><strong>Focus:</strong> Cognitive Science</p>
              <p><strong>Master Thesis:</strong> Human-Guided ML Model for Vital Anomaly Detection</p>
              <p><strong>Electives Grade:</strong> 2.4</p>
              <p><strong>Thesis:</strong> To be decided</p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="theme-card h-100">
              <p className="meta-range">Jul 2018 – May 2022</p>
              <h3>B.Tech. in Mechatronics Engineering</h3>
              <p className="meta-place">SRMIST, Chennai</p>
              <p><strong>Focus:</strong> Mechatronics</p>
              <p><strong>Grade:</strong> 1.6</p>
            </div>
          </div>

          <div className="col-12">
            <div className="theme-card">
              <h3>Research Interests</h3>
              <p>
                My current work sits at the intersection of machine learning,
                reinforcement learning, anomaly detection, simulation systems,
                and application-layer productization. I'm especially interested
                in making technically strong systems usable through thoughtful
                interfaces and structured workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
