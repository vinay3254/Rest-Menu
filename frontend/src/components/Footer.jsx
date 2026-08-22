import { brand, footerLinks } from '../content/restaurantData'

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
            <span className="nav-logo" style={{ color: 'white' }}>{brand.logoMain} <span>{brand.logoAccent}</span></span>
            <p>Bengaluru-style biryani house serving rich gravies, smoky grills, and weekend-ready family spreads.</p>
            <div className="footer-social">
              {footerLinks.socials.map(({ label, name }) => (
                <a key={name} href="#" className="social-icon" aria-label={name}>{label}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Explore" links={footerLinks.explore} />
          <FooterCol title="Hours" links={footerLinks.hours} />
          <FooterCol title="Contact" links={footerLinks.contact} />
        </div>
        <div className="footer-bottom">
          <p>© 2026 Meghana Foods. All rights reserved.</p>
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
