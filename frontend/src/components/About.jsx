import { aboutImages, aboutStats } from '../content/restaurantData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text reveal">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Spice, Smoke, and Big Portions</h2>
            <p className="about-story">
              Meghana Foods started in Bengaluru in 2009 with a simple promise: serve biryani, curries, and grills that arrive hot, aromatic, and generous enough for the whole table.
              Our kitchen leans into Andhra spice, smoky tandoor heat, and the kind of comfort food that keeps regulars coming back after work and on weekends.
            </p>
            <p className="about-story" style={{ marginTop: 0 }}>
              From lunch rush trays to late-night family dinners, every order is finished close to service for the freshest flavour.
              We also support separate veg and non-veg service when guests request it.
            </p>
            <div className="chef-card">
              <div className="chef-avatar">MR</div>
              <div className="chef-info">
                <h4>Meghana Reddy</h4>
                <p>Founder & Menu Curator <span>House Speciality</span></p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>"Every biryani should reach the table full of aroma, heat, and comfort."</p>
              </div>
            </div>
          </div>

          <div className="about-images reveal reveal-delay-2">
            {aboutImages.map(({ img, label, style }) => (
              <div className="about-img-card" key={label}>
                <div className="about-photo-wrap" style={style}>
                  <img src={img} alt={label} loading="lazy" />
                  <span className="img-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-row reveal">
          {aboutStats.map(({ number, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
