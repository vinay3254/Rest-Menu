require('dotenv').config()
const mongoose = require('mongoose')
const MenuItem = require('./models/MenuItem')

const menuItems = [
  { category: 'veg', name: 'Paneer Butter Masala', desc: 'Soft paneer cubes in velvety tomato-makhani gravy finished with cream and kasoori methi.', price: 295, popular: true, img: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg' },
  { category: 'veg', name: 'Veg Dum Biryani', desc: 'Fragrant basmati layered with vegetables, mint, fried onions, and saffron on dum.', price: 325, popular: true, img: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg' },
  { category: 'veg', name: 'Dal Tadka', desc: 'Comforting yellow lentils tempered with ghee, cumin, garlic, and green chilli.', price: 210, popular: false, img: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg' },
  { category: 'veg', name: 'Rajma Masala', desc: 'Slow-simmered kidney beans in a North Indian onion-tomato masala with fresh coriander.', price: 225, popular: false, img: 'https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg' },
  { category: 'veg', name: 'Baingan Bharta', desc: 'Fire-roasted eggplant mashed with onion, tomato, smoked spices, and coriander stems.', price: 235, popular: false, img: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg' },
  { category: 'non-veg', name: 'Chicken 65', desc: 'Crisp fried chicken tossed with curry leaves, green chilli, and our chilli-garlic seasoning.', price: 275, popular: true, img: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg' },
  { category: 'non-veg', name: 'Chicken Handi', desc: 'Bone-in chicken cooked in a rich handi gravy with browned onions, coriander, and butter.', price: 345, popular: true, img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg' },
  { category: 'non-veg', name: 'Mutton Dum Biryani', desc: 'Long-grain basmati layered with tender mutton, fried onions, mint, and slow-cooked spices.', price: 425, popular: true, img: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg' },
  { category: 'non-veg', name: 'Tandoori Chicken', desc: 'Yoghurt-marinated chicken charred in the tandoor and served with onion salad and lime.', price: 365, popular: false, img: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg' },
  { category: 'non-veg', name: 'Rogan Josh', desc: 'Slow-cooked lamb in Kashmiri-style gravy scented with fennel, cardamom, and ginger.', price: 395, popular: false, img: 'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg' },
  { category: 'non-veg', name: 'Fish Masala Fry', desc: 'Coastal-style fish fillet pan-fried with tangy masala and finished with lemon.', price: 355, popular: false, img: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg' },
  { category: 'non-veg', name: 'Chicken Mandi', desc: 'Smoky spiced rice served with juicy roast chicken and cooling mint yoghurt.', price: 389, popular: true, img: 'https://www.themealdb.com/images/media/meals/er4d081765186828.jpg' },
  { category: 'non-veg', name: 'Street Bread Omelette', desc: 'Masala omelette folded into butter-toasted bread with onion, chilli, and pepper.', price: 165, popular: false, img: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg' },
]

async function seed() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/meghanafoods'
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
