import { useState, useEffect } from 'react'

export default function Navbar({ mobileOpen, onToggleMobile }) {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const current = window.scrollY
      setHidden(current > lastScroll && current > 80)
      setScrolled(current > 40)
      lastScroll = current
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = ['', hidden ? 'hidden' : '', scrolled ? 'scrolled' : ''].join(' ').trim()

  return (
    <nav id="navbar" className={navClass}>
      <a href="#hero" className="nav-logo">Bella <span>Vista</span></a>
      <ul className="nav-links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#booking">Reservations</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
      <a href="#booking" className="nav-cta nav-links">Book a Table</a>
      <div
        className={`hamburger${mobileOpen ? ' open' : ''}`}
        id="hamburger"
        onClick={onToggleMobile}
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}
