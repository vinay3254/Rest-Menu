require('dotenv').config()
const mongoose = require('mongoose')
const MenuItem = require('./models/MenuItem')

const menuItems = [
  // Starters
  { category: 'starters', name: 'Prawn Carpaccio', desc: 'Delicate tiger prawns with citrus oil, micro herbs & sea salt flakes.', price: 395, emoji: '🦐', popular: true, img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=440&fit=crop&auto=format' },
  { category: 'starters', name: 'Burrata & Tomato', desc: 'Creamy burrata, heritage tomatoes, basil oil & aged balsamic reduction.', price: 345, emoji: '🥗', popular: false, img: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=600&h=440&fit=crop&auto=format' },
  { category: 'starters', name: 'Wild Mushroom Crostini', desc: 'Truffle-scented forest mushrooms on toasted sourdough with aged parmesan.', price: 325, emoji: '🍄', popular: false, img: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&h=440&fit=crop&auto=format' },
  // Mains
  { category: 'mains', name: 'Bistecca Fiorentina', desc: '28-day dry-aged T-bone, rosemary butter, roasted garlic & truffle jus.', price: 1195, emoji: '🥩', popular: true, img: 'https://images.unsplash.com/photo-1544025162-d76538f40ae4?w=600&h=440&fit=crop&auto=format' },
  { category: 'mains', name: 'Sea Bass al Limone', desc: 'Pan-seared Mediterranean sea bass, saffron risotto & lemon beurre blanc.', price: 845, emoji: '🐟', popular: false, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=440&fit=crop&auto=format' },
  { category: 'mains', name: 'Tagliatelle al Tartufo', desc: 'Hand-rolled egg pasta, black truffle, aged parmesan & brown butter.', price: 745, emoji: '🍝', popular: true, img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&h=440&fit=crop&auto=format' },
  { category: 'mains', name: 'Risotto ai Funghi', desc: 'Carnaroli rice, porcini mushrooms, white wine, aged Parmigiano-Reggiano.', price: 695, emoji: '🫘', popular: false, img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=440&fit=crop&auto=format' },
  // Desserts
  { category: 'desserts', name: 'Panna Cotta al Miele', desc: 'Silky vanilla panna cotta, wildflower honey, seasonal berry compote.', price: 295, emoji: '🍮', popular: true, img: 'https://images.unsplash.com/photo-1488477181228-c84def45f0f8?w=600&h=440&fit=crop&auto=format' },
  { category: 'desserts', name: 'Tortino al Cioccolato', desc: 'Warm dark chocolate fondant, salted caramel core, vanilla gelato.', price: 325, emoji: '🍫', popular: false, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=440&fit=crop&auto=format' },
  { category: 'desserts', name: 'Tiramisù Classico', desc: 'Classic mascarpone cream, espresso-soaked savoiardi, fine cocoa dusting.', price: 310, emoji: '🧁', popular: false, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=440&fit=crop&auto=format' },
  // Drinks
  { category: 'drinks', name: 'Barolo DOCG 2018', desc: 'Nebbiolo from Piedmont. Deep ruby, notes of rose, tar & dried cherry.', price: 525, emoji: '🍷', popular: true, img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=440&fit=crop&auto=format' },
  { category: 'drinks', name: 'Prosecco di Conegliano', desc: 'Elegant bubbles, delicate pear & white peach notes. Perfect aperitivo.', price: 425, emoji: '🥂', popular: false, img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=440&fit=crop&auto=format' },
]

async function seed() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/bellavista'
  await mongoose.connect(uri)
  console.log('Connected to MongoDB')

  await MenuItem.deleteMany({})
  console.log('Cleared existing menu items')

  await MenuItem.insertMany(menuItems)
  console.log(`Seeded ${menuItems.length} menu items`)

  await mongoose.disconnect()
  console.log('Done')
}

seed().catch(err => { console.error(err); process.exit(1) })
