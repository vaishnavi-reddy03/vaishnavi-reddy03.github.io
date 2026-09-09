import FloatingCircles from '../../Components/FloatingCircles'

export default function Contact() {
  return (
    <section className="theme-page position-relative overflow-hidden">
      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">LET'S CONNECT</p>
          <h1 className="theme-title">Contact</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="theme-card text-center">
              <h3 className="mb-4">Get in Touch</h3>
              <p><strong>Email:</strong> vaishnavi.kuntawar0311@gmail.com</p>
              <p><strong>Phone:</strong> +49 1512 6135986</p>
              <p><strong>Phone:</strong> +91 8007305204</p>
              <p><strong>LinkedIn:</strong> Add your public LinkedIn URL here</p>
              <p><strong>GitHub:</strong> Add your GitHub profile URL here</p>

              <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
                <a
                  href="mailto:vaishnavi.kuntawar@gmail.com"
                  className="btn hero-primary-btn"
                >
                  Email Me
                </a>
                <a href="#" className="btn hero-secondary-btn">
                  LinkedIn
                </a>
                <a href="#" className="btn hero-secondary-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
