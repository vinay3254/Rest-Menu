export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`} id="mobileMenu">
      <a href="#menu" onClick={onClose}>Menu</a>
      <a href="#booking" onClick={onClose}>Reservations</a>
      <a href="#about" onClick={onClose}>About</a>
      <a href="#footer" onClick={onClose}>Contact</a>
      <a href="#booking" className="nav-cta" onClick={onClose}>Reserve a Table</a>
    </div>
  )
}
