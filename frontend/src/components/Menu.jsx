import { useState } from 'react'
import { formatPrice } from '../utils/formatPrice'
import { menuItems } from '../content/restaurantData'

const filters = ['all', 'veg', 'non-veg']

function MenuCard({ item, onAddToCart }) {
  const [added, setAdded] = useState(false)

  function handleAdd() {
    onAddToCart(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="menu-card show" data-category={item.category}>
      <div className="menu-card-image">
        <img src={item.img} alt={item.name} loading="lazy" />
        {item.popular && <span className="badge-popular">Best Seller</span>}
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{item.name}</h3>
        <div className="menu-card-meta">
          <span className={`menu-diet-badge ${item.category}`}>{item.category === 'veg' ? 'Veg' : 'Non-Veg'}</span>
        </div>
        <p className="menu-card-desc">{item.desc}</p>
        <div className="menu-card-footer">
          <span className="menu-price">{formatPrice(item.price)}</span>
          <button
            className={`btn-add-cart${added ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Menu({ onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible = activeFilter === 'all'
    ? menuItems
    : menuItems.filter(i => i.category === activeFilter)

  return (
    <section id="menu">
      <div className="container">
        <div className="menu-header reveal">
          <span className="section-tag">Bengaluru Favourite</span>
          <h2 className="section-title">Veg and Non-Veg Specials</h2>
          <p className="section-subtitle">From dum biryanis and handi curries to homestyle dals and tandoor plates, the menu is built for comfort and big appetites.</p>
        </div>
        <div className="menu-filters reveal reveal-delay-1">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-pill${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'veg' ? 'Veg' : 'Non-Veg'}
            </button>
          ))}
        </div>
        <div className="menu-grid" id="menuGrid">
          {visible.map(item => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
