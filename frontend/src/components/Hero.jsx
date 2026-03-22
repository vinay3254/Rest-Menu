export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-decor">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
      </div>
      <div className="hero-image-overlay"></div>
      <div className="hero-content">
        <div className="hero-glass-card">
          <p className="hero-eyebrow">Est. 2009 · Bengaluru, India</p>
          <h1 className="hero-title">Bella <em>Vista</em></h1>
          <p className="hero-tagline">Where every dish tells a story of passion, tradition & artistry</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">View Our Menu</a>
            <a href="#booking" className="btn-outline">Book a Table</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
