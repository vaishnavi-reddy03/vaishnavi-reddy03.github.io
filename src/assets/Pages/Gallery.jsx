import FloatingCircles from '../../Components/FloatingCircles'

export default function Gallery() {
  return (
    <section className="theme-page position-relative overflow-hidden">
      <FloatingCircles />

      <div className="container py-5 page-content-layer">
        <div className="page-head text-center mb-5">
          <p className="page-kicker">VISUAL HIGHLIGHTS</p>
          <h1 className="theme-title">Gallery</h1>
          <p className="theme-subtitle">
            Photos now, room for certificates, event snapshots, awards, and personal highlights later.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="gallery-card theme-card-soft">
              <img
                src="/images/gallery1.jpg"
                alt="Gallery item 1"
                className="gallery-image img-fluid"
              />
              <div className="gallery-caption">
                 professional portrait or event photo
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="gallery-card theme-card-soft">
              <img
                src="/images/gallery2.jpg"
                alt="Gallery item 2"
                className="gallery-image img-fluid"
              />
              <div className="gallery-caption">
                Use this for certificates, workshop highlights, or a conference image.
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="gallery-card theme-card-soft placeholder-card">
              <img
                src="/images/gallery3.jpg"
                alt="Gallery item 3"
                className="gallery-image img-fluid"
              />
              <div className="gallery-caption">
                Placeholder for another photo or achievement later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
