import { brand } from '../content/restaurantData'

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
          <p className="hero-eyebrow">{brand.heroEyebrow}</p>
          <h1 className="hero-title">{brand.logoMain} <em>{brand.logoAccent}</em></h1>
          <p className="hero-tagline">{brand.heroTagline}</p>
          <div className="hero-highlights">
            {brand.heroHighlights.map(highlight => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">Explore Menu</a>
            <a href="#booking" className="btn-outline">Reserve a Table</a>
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
