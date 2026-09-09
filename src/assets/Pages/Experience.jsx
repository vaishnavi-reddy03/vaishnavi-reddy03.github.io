import FloatingCircles from '../../Components/FloatingCircles'

const experiences = [
  {
    id: 'inosim',
    period: 'Aug 2024 – Present',
    role: 'Working Student',
    org: 'INOSIM GmbH',
    location: 'Dortmund, Germany',
    bullets: [
      'Developed frontend applications using Electron, Vite, React, and JavaScript to modernize internal tools and improve UI/UX performance.',
      'Built a documentation platform for internal technical content using React, JavaScript, Bootstrap, and Docker.',
      'Designed a data visualization dashboard as a modern alternative to table-heavy internal views.',
      'Developed a web-based proof-of-concept replicating core INOSIM software workflows using Electron + React.',
      'Integrated an LLM-based assistant into an Electron application using REST APIs, structured prompt templates, and secure IPC bridging.',
      'Integrated C# (.NET) REST APIs via the main process and exposed backend functionality to the React renderer through preload IPC.',
    ],
  },
  {
    id: 'hul',
    period: 'Jul 2022 – Aug 2023',
    role: 'Supply Chain',
    org: 'Hindustan Unilever India Pvt. Ltd.',
    subRoles: [
      {
        title: 'Supply Planning Executive',
        location: 'Kolkata, India',
        period: 'Jan 2023 – Aug 2023',
        detail: [
          'Oversaw stock planning from factories to depots across East India for ice-cream products.',
        ],
      },
      {
        title: 'Supply Chain Executive Trainee Program',
        location: 'Mumbai, India',
        period: 'Jul 2022 – Dec 2022',
        detail: [
          'Worked on automation feasibility for ice-cream manufacturing.',
          'Analyzed manufacturing best practices under ManEx initiatives.',
          'Calculated asset utilization and proposed improvement strategies for third-party supplement drink sites.',
        ],
      },
    ],
  },
  {
    id: 'mirhae',
    period: 'Jan 2022 – May 2022',
    role: 'Intern',
    org: 'MIRHAE Engineering India Pvt. Ltd.',
    location: 'Pune, India',
    bullets: [
      'Contributed to assembly and automation of AC condenser bending machines.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="theme-page position-relative overflow-hidden">
      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">PROFESSIONAL JOURNEY</p>
          <h1 className="theme-title">Experience</h1>
          <p className="theme-subtitle">
            Frontend engineering, AI integration, operations, and manufacturing exposure.
          </p>
        </div>

        <div className="timeline-grid">
          {experiences.map((item, index) => (
            <div
              id={item.id}
              className={`theme-card timeline-card ${item.placeholder ? 'placeholder-card' : ''}`}
              key={index}
            >
              <p className="meta-range">{item.period}</p>
              <h3>{item.role}</h3>

              <p className="meta-place">
                {item.org}
                {item.location ? ` • ${item.location}` : ''}
              </p>

              {item.subRoles && (
                <div className="subrole-list">
                  {item.subRoles.map((subRole, subIndex) => (
                    <div className="subrole-item" key={subIndex}>
                      {subRole.period && <p className="subrole-period">{subRole.period}</p>}
                      <h4>{subRole.title}</h4>
                      {subRole.location && (
                        <p className="subrole-location">{subRole.location}</p>
                      )}
                      <ul className="theme-list subrole-bullets">
                        {subRole.detail.map((line, lineIndex) => (
                          <li key={lineIndex}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {item.bullets && (
                <ul className="theme-list">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
