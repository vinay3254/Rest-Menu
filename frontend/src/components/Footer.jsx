const exploreLinks = [
  { label: 'Our Menu', href: '#menu' },
  { label: 'Reservations', href: '#booking' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#' },
  { label: 'Wine Cellar', href: '#' },
]

const hours = [
  { label: 'Mon–Thu: 6–10 PM', href: '#' },
  { label: 'Fri–Sat: 6–11 PM', href: '#' },
  { label: 'Sunday: 5–10 PM', href: '#' },
  { label: 'Lunch: Fri–Sun only', href: '#' },
]

const contact = [
  { label: '+917975353938', href: 'tel:+917975353938' },
  { label: 'vinaygk219@gmail.com', href: 'mailto:vinaygk219@gmail.com' },
  { label: '18, 100 Feet Road, Indiranagar', href: '#' },
  { label: 'Bengaluru, Karnataka 560038', href: '#' },
]

const socials = [
  { emoji: '📸', label: 'Instagram' },
  { emoji: '📘', label: 'Facebook' },
  { emoji: '🐦', label: 'Twitter' },
  { emoji: '🌍', label: 'TripAdvisor' },
]

function FooterCol({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-logo" style={{ color: 'white' }}>Bella <span>Vista</span></span>
            <p>Where every evening becomes an unforgettable journey through the flavors of Italy.</p>
            <div className="footer-social">
              {socials.map(({ emoji, label }) => (
                <a key={label} href="#" className="social-icon" aria-label={label}>{emoji}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Explore" links={exploreLinks} />
          <FooterCol title="Hours" links={hours} />
          <FooterCol title="Contact" links={contact} />
        </div>
        <div className="footer-bottom">
          <p>© 2026 Bella Vista Restaurant. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
