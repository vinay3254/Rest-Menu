import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Booking from './components/Booking'
import About from './components/About'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toast, setToast] = useState({ message: '', show: false })
  const toastTimer = useRef(null)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function showToast(msg) {
    clearTimeout(toastTimer.current)
    setToast({ message: msg, show: true })
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2600)
  }

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name: item.name, price: item.price, category: item.category, qty: 1 }]
    })
    showToast(`${item.name} added to your order`)
  }

  function changeQty(name, delta) {
    setCart(prev => {
      const updated = prev.map(i => i.name === name ? { ...i, qty: i.qty + delta } : i)
      return updated.filter(i => i.qty > 0)
    })
  }

  async function placeOrder() {
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      })
    } catch {
      // fire-and-forget; order still clears locally
    }
    setCart([])
    setCartOpen(false)
    showToast('Order placed. Fresh dishes coming up.')
  }

  function toggleCart() {
    setCartOpen(o => !o)
  }

  function toggleMobile() {
    setMobileOpen(o => !o)
  }

  // Lock body scroll when cart or mobile menu is open
  useEffect(() => {
    document.body.style.overflow = (cartOpen || mobileOpen) ? 'hidden' : ''
  }, [cartOpen, mobileOpen])

  return (
    <>
      <Navbar mobileOpen={mobileOpen} onToggleMobile={toggleMobile} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <Cart
        cart={cart}
        isOpen={cartOpen}
        onToggle={toggleCart}
        onChangeQty={changeQty}
        onPlaceOrder={placeOrder}
      />
      <Booking />
      <About />
      <Footer />
      <Toast message={toast.message} show={toast.show} />
    </>
  )
}
