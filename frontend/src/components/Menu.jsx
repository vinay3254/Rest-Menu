import { useState } from 'react'
import { formatPrice } from '../utils/formatPrice'

const menuItems = [
  // Starters
  {
    id: 1, category: 'starters', name: 'Prawn Carpaccio',
    desc: 'Delicate tiger prawns with citrus oil, micro herbs & sea salt flakes.',
    price: 395, emoji: '🦐', popular: true,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 2, category: 'starters', name: 'Burrata & Tomato',
    desc: 'Creamy burrata, heritage tomatoes, basil oil & aged balsamic reduction.',
    price: 345, emoji: '🥗', popular: false,
    img: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 3, category: 'starters', name: 'Wild Mushroom Crostini',
    desc: 'Truffle-scented forest mushrooms on toasted sourdough with aged parmesan.',
    price: 325, emoji: '🍄', popular: false,
    img: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&h=440&fit=crop&auto=format',
  },
  // Mains
  {
    id: 4, category: 'mains', name: 'Bistecca Fiorentina',
    desc: '28-day dry-aged T-bone, rosemary butter, roasted garlic & truffle jus.',
    price: 1195, emoji: '🥩', popular: true,
    img: 'https://images.unsplash.com/photo-1544025162-d76538f40ae4?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 5, category: 'mains', name: 'Sea Bass al Limone',
    desc: 'Pan-seared Mediterranean sea bass, saffron risotto & lemon beurre blanc.',
    price: 845, emoji: '🐟', popular: false,
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 6, category: 'mains', name: 'Tagliatelle al Tartufo',
    desc: 'Hand-rolled egg pasta, black truffle, aged parmesan & brown butter.',
    price: 745, emoji: '🍝', popular: true,
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 7, category: 'mains', name: 'Risotto ai Funghi',
    desc: 'Carnaroli rice, porcini mushrooms, white wine, aged Parmigiano-Reggiano.',
    price: 695, emoji: '🫘', popular: false,
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=440&fit=crop&auto=format',
  },
  // Desserts
  {
    id: 8, category: 'desserts', name: 'Panna Cotta al Miele',
    desc: 'Silky vanilla panna cotta, wildflower honey, seasonal berry compote.',
    price: 295, emoji: '🍮', popular: true,
    img: 'https://images.unsplash.com/photo-1488477181228-c84def45f0f8?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 9, category: 'desserts', name: 'Tortino al Cioccolato',
    desc: 'Warm dark chocolate fondant, salted caramel core, vanilla gelato.',
    price: 325, emoji: '🍫', popular: false,
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 10, category: 'desserts', name: 'Tiramisù Classico',
    desc: 'Classic mascarpone cream, espresso-soaked savoiardi, fine cocoa dusting.',
    price: 310, emoji: '🧁', popular: false,
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=440&fit=crop&auto=format',
  },
  // Drinks
  {
    id: 11, category: 'drinks', name: 'Barolo DOCG 2018',
    desc: 'Nebbiolo from Piedmont. Deep ruby, notes of rose, tar & dried cherry.',
    price: 525, emoji: '🍷', popular: true,
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=440&fit=crop&auto=format',
  },
  {
    id: 12, category: 'drinks', name: 'Prosecco di Conegliano',
    desc: 'Elegant bubbles, delicate pear & white peach notes. Perfect aperitivo.',
    price: 425, emoji: '🥂', popular: false,
    img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=440&fit=crop&auto=format',
  },
]

const filters = ['all', 'starters', 'mains', 'desserts', 'drinks']

function MenuCard({ item, onAddToCart }) {
  const [added, setAdded] = useState(false)

  function handleAdd() {
    onAddToCart(item.name, item.price, item.emoji)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="menu-card show" data-category={item.category}>
      <div className="menu-card-image">
        <img src={item.img} alt={item.name} loading="lazy" />
        {item.popular && <span className="badge-popular">Popular</span>}
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{item.name}</h3>
        <p className="menu-card-desc">{item.desc}</p>
        <div className="menu-card-footer">
          <span className="menu-price">{formatPrice(item.price)}</span>
          <button
            className={`btn-add-cart${added ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added ✓' : 'Add to Cart'}
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
          <span className="section-tag">Curated with Love</span>
          <h2 className="section-title">Our Signature Menu</h2>
          <p className="section-subtitle">Crafted from the finest seasonal ingredients, each dish is a celebration of Italian culinary heritage.</p>
        </div>
        <div className="menu-filters reveal reveal-delay-1">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-pill${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
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
