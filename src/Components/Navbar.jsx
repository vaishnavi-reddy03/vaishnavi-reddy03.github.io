import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg portfolio-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand portfolio-brand" to="/">
          Vaishnavi Reddy
        </Link>

        <button
          className="navbar-toggler portfolio-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <div className="navbar-nav ms-auto portfolio-nav-links">
            <NavLink className="nav-link" to="/techstack">Tech Stack</NavLink>
            <NavLink className="nav-link" to="/studies">Studies</NavLink>
            <NavLink className="nav-link" to="/experience">Experience</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
