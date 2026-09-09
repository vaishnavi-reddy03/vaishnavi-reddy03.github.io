import { useEffect, useState } from 'react'
import FloatingCircles from '../../Components/FloatingCircles'

const slugify = (value) => {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const skillCategories = [
  {
    title: 'Languages',
    items: [
      {
        name: 'JavaScript',
        level: 'Advanced',
        proof:
          'Used extensively across frontend development, React, Vite, and Electron-based applications.',
        usedIn: ['Frontend development', 'Application architecture'],
      },
      {
        name: 'HTML',
        level: 'Proficient',
        proof:
          'Used across frontend interfaces for semantic page structuring and component markup.',
        usedIn: ['Frontend development', 'Responsive UI work'],
      },
      {
        name: 'CSS',
        level: 'Proficient',
        proof:
          'Used for custom styling, layout control, responsive design, and UI polish.',
        usedIn: ['Frontend styling', 'Portfolio UI', 'Internal tools'],
      },
    ],
  },
  {
    title: 'Packages / Frameworks',
    items: [
      {
        name: 'React',
        level: 'Proficient',
        proof:
          'Used to build frontend applications, internal tools, documentation platforms, and proof-of-concept interfaces.',
        usedIn: ['INOSIM frontend work', 'Documentation platform', 'Internal tools'],
      },
      {
        name: 'Bootstrap',
        level: 'Proficient',
        proof:
          'Used for responsive UI development, faster layout implementation, and consistent visual design.',
        usedIn: ['UI implementation', 'Documentation platform'],
      },
      {
        name: 'Vite',
        level: 'Proficient',
        proof:
          'Used as the frontend build tool for modern React and JavaScript application workflows.',
        usedIn: ['Frontend development setup'],
      },
    ],
  },
  {
    title: 'Software / Tools',
    items: [
      {
        name: 'Electron',
        level: 'Proficient',
        proof:
          'Used to develop desktop-style internal tools and integrate application logic with frontend interfaces.',
        usedIn: ['Desktop UI development', 'Internal tools'],
      },
      {
        name: 'Python',
        level: 'Advanced',
        proof:
          'Used for machine learning, data analysis, and backend scripting.',
        usedIn: ['Data science', 'Automation'],
      },
    ],
  },
]

export default function TechStack() {
  const [openSections, setOpenSections] = useState({
    'Languages': false,
    'Packages / Frameworks': false,
    'Software / Tools': false,
  })

  const [activeSkillByCategory, setActiveSkillByCategory] = useState({
    'Languages': 'JavaScript',
    'Packages / Frameworks': null,
    'Software / Tools': null,
  })

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const target = document.getElementById(hash.replace('#', ''))
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [])

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const openCategoryAndScrollToSkill = (categoryTitle, skillName) => {
    setOpenSections((prev) => ({
      ...prev,
      [categoryTitle]: false,
    }))

    setActiveSkillByCategory((prev) => ({
      ...prev,
      [categoryTitle]: skillName,
    }))

    setTimeout(() => {
      const target = document.getElementById(`skill-${slugify(skillName)}`)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 180)
  }

  return (
    <section className="theme-page position-relative overflow-hidden">
      <style>{`
        .tech-stack-summary {
          border-radius: 20px;
        }

        .summary-category-title {
          font-size: 0.95rem;
          font-weight: 700;
          opacity: 0.9;
        }

        .summary-count {
          opacity: 0.7;
          font-weight: 600;
        }

        .tech-pill-button {
          background: transparent;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;
        }

        .tech-pill-button:hover {
          transform: translateY(-1px);
          border-color: rgba(156, 236, 255, 0.35);
        }

        .tech-pill-button.active-skill-pill {
          border-color: rgba(156, 236, 255, 0.45);
          background: rgba(156, 236, 255, 0.12);
          color: #ffffff;
        }

        .tech-accordion-card {
          padding: 1.25rem;
        }

        .tech-accordion-header {
          width: 100%;
          background: transparent;
          border: 0;
          padding: 0;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .tech-accordion-header:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .tech-accordion-header-content {
          flex: 1;
        }

        .tech-accordion-helper {
          font-size: 0.92rem;
          opacity: 0.72;
          line-height: 1.5;
        }

        .tech-expand-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          opacity: 0.8;
          white-space: nowrap;
          color: rgba(255, 255, 255, 0.9);
        }

        .tech-accordion-icon {
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1;
          opacity: 0.9;
          min-width: fit-content;
          text-align: center;
          transition: opacity 0.25s ease;
          color: #9cecff;
          margin-top: 6px;
          white-space: nowrap;
        }

        .tech-pill-preview {
          opacity: 0.95;
        }

        .tech-accordion-body {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.25rem;
        }

        .theme-section-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .tech-skill-card {
          display: flex;
          flex-direction: column;
          scroll-margin-top: 110px;
        }

        .tech-skill-header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 10px;
        }

        .tech-skill-header h3 {
          flex: 1 1 160px;
          min-width: 0;
        }

        .skill-level-badge {
          font-size: 0.74rem;
          font-weight: 600;
          padding: 5px 9px;
          border-radius: 999px;
          white-space: nowrap;
          color: #ffffff;
          max-width: 100%;
        }

        .skill-advanced {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.28);
        }

        .skill-proficient {
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.28);
        }

        .skill-working-knowledge {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.28);
        }

        .tech-proof {
          line-height: 1.65;
          opacity: 0.92;
        }

        .tech-meta-title {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.75;
        }

        .tech-link-chip {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition: all 0.2s ease;
          color: #eefaff;
        }

        .tech-link-chip:hover {
          transform: translateY(-1px);
          opacity: 1;
          border-color: rgba(156, 236, 255, 0.35);
          color: #ffffff;
        }

        @media (max-width: 576px) {
          .tech-accordion-header {
            gap: 0.75rem;
          }

          .tech-expand-badge {
            display: none;
          }

          .tech-accordion-helper {
            font-size: 0.88rem;
          }

          .tech-accordion-icon {
            font-size: 0.76rem;
            margin-top: 4px;
          }

          .tech-skill-header {
            gap: 8px;
          }

          .skill-level-badge {
            font-size: 0.7rem;
            padding: 5px 8px;
          }
        }
      `}</style>

      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">TOOLS & TECHNOLOGIES</p>
          <h1 className="theme-title">Tech Stack</h1>
          <p className="theme-subtitle">
            Technical skills backed by projects and experience.
          </p>
        </div>

        <div className="tech-stack-summary theme-card mb-4">
          <p className="tech-meta-title mb-3">Quick Overview</p>

          <div className="d-flex flex-column gap-3">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="summary-category-title mb-2">
                  {category.title} <span className="summary-count">({category.items.length})</span>
                </p>

                <div className="tech-pill-group">
                  {category.items.map((skill) => (
                    <button
                      key={skill.name}
                      type="button"
                      className={`tech-pill tech-pill-button ${
                        activeSkillByCategory[category.title] === skill.name &&
                        !openSections[category.title]
                          ? 'active-skill-pill'
                          : ''
                      }`}
                      onClick={() => openCategoryAndScrollToSkill(category.title, skill.name)}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex flex-column gap-4">
          {skillCategories.map((category) => {
            const isOpen = !!openSections[category.title]
            const activeSkillName = activeSkillByCategory[category.title]

            const skillsToRender = isOpen
              ? category.items
              : category.items.filter((skill) => skill.name === activeSkillName)

            return (
              <div className="theme-card tech-accordion-card" key={category.title}>
                <button
                  type="button"
                  className="tech-accordion-header"
                  onClick={() => toggleSection(category.title)}
                  aria-expanded={isOpen}
                >
                  <div className="tech-accordion-header-content">
                    <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                      <h2 className="theme-section-title mb-0">{category.title}</h2>
                      <span className="tech-expand-badge">
                        {isOpen ? 'Hide details' : 'View details'}
                      </span>
                    </div>

                    <p className="tech-accordion-helper mb-3">
                      {isOpen
                        ? 'All skills in this category are visible.'
                        : 'Click a skill from Quick Overview to focus on one card, or view all details.'}
                    </p>

                    <div className="tech-pill-group">
                      {category.items.map((skill) => (
                        <span className="tech-pill tech-pill-preview" key={skill.name}>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="tech-accordion-icon">
                    {isOpen ? 'Hide details' : 'View details'}
                  </span>
                </button>

                {skillsToRender.length > 0 && (
                  <div className="tech-accordion-body mt-4">
                    <div className="row g-4">
                      {skillsToRender.map((skill) => (
                        <div className="col-md-6 col-xl-4" key={skill.name}>
                          <div
                            id={`skill-${slugify(skill.name)}`}
                            className="theme-card h-100 tech-skill-card"
                          >
                            <div className="tech-skill-header mb-2">
                              <h3 className="mb-0">{skill.name}</h3>
                              <span
                                className={`skill-level-badge skill-${skill.level
                                  .toLowerCase()
                                  .replace(/\s+/g, '-')}`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            <p className="tech-proof mt-3">{skill.proof}</p>

                            <div className="mt-3">
                              <p className="tech-meta-title mb-2">Used in</p>
                              <div className="tech-pill-group">
                                {skill.usedIn.map((item, itemIndex) => (
                                  <span className="tech-pill" key={itemIndex}>
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {(skill.experienceLinks?.length || skill.projectLinks?.length) && (
                              <div className="mt-4">
                                <p className="tech-meta-title mb-2">Explore evidence</p>

                                <div className="d-flex flex-column gap-2">
                                  {skill.experienceLinks?.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.href}
                                      className="tech-link-chip"
                                    >
                                      Experience: {link.label}
                                    </a>
                                  ))}

                                  {skill.projectLinks?.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.href}
                                      className="tech-link-chip"
                                    >
                                      Project: {link.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
