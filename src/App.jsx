import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './assets/Pages/Home'
import Studies from './assets/Pages/Studies'
import Experience from './assets/Pages/Experience'
import Projects from './assets/Pages/Projects'
import Contact from './assets/Pages/Contact'
import TechStack from './assets/Pages/TechStack'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
