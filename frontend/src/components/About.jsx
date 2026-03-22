const stats = [
  { number: '200+', label: 'Signature Dishes' },
  { number: '15', label: 'Years of Excellence' },
  { number: '50k+', label: 'Happy Guests' },
]

const images = [
  { cls: 'img-placeholder-1', emoji: '🍽️', label: 'Fine Dining', style: { minHeight: '320px' } },
  { cls: 'img-placeholder-2', emoji: '🫕', label: 'Kitchen', style: { minHeight: '152px' } },
  { cls: 'img-placeholder-3', emoji: '🌿', label: 'Ingredients', style: { minHeight: '152px' } },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text reveal">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Passion on Every Plate</h2>
            <p className="about-story">
              Founded in 2009 by Chef Marco Conti, Bella Vista was born from a single belief: that extraordinary food is an act of love.
              Nestled in the heart of the city, our kitchen draws on generations of Italian culinary wisdom.
            </p>
            <p className="about-story" style={{ marginTop: 0 }}>
              Every ingredient is sourced with intention — from the rolling hills of Tuscany to the sparkling waters of the Amalfi Coast.
              We don't just cook meals; we craft memories.
            </p>
            <div className="chef-card">
              <div className="chef-avatar">👨‍🍳</div>
              <div className="chef-info">
                <h4>Marco Conti</h4>
                <p>Head Chef & Founder <span>⭐ Michelin</span></p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>"Cooking is the art of giving."</p>
              </div>
            </div>
          </div>

          <div className="about-images reveal reveal-delay-2">
            {images.map(({ cls, emoji, label, style }) => (
              <div className="about-img-card" key={label}>
                <div className={`img-placeholder ${cls}`} style={style}>
                  <span>{emoji}</span>
                  <span className="img-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-row reveal">
          {stats.map(({ number, label }) => (
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
