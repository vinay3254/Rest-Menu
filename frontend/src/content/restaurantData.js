const imageLibrary = {
  bainganBharta: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
  breadOmelette: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
  chickenHandi: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
  chickenMandi: 'https://www.themealdb.com/images/media/meals/er4d081765186828.jpg',
  dalFry: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
  kidneyBeanCurry: 'https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg',
  lambBiryani: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
  lambRoganJosh: 'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg',
  matarPaneer: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
  fishMasala: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
  tandooriChicken: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
}

export const brand = {
  name: 'Meghana Foods',
  logoMain: 'Meghana',
  logoAccent: 'Foods',
  heroEyebrow: 'Since 2009 · Bengaluru, India',
  heroTagline: 'Biryani, curries, kebabs, and Andhra-style favourites cooked for hungry tables every day.',
  heroHighlights: [
    'Daily dum biryani batches',
    'Veg and non-veg favourites',
    'Family packs and late dinners',
  ],
}

export const menuItems = [
  {
    id: 1,
    category: 'veg',
    name: 'Paneer Butter Masala',
    desc: 'Soft paneer cubes in velvety tomato-makhani gravy finished with cream and kasoori methi.',
    price: 295,
    popular: true,
    img: imageLibrary.matarPaneer,
  },
  {
    id: 2,
    category: 'veg',
    name: 'Veg Dum Biryani',
    desc: 'Fragrant basmati layered with vegetables, mint, fried onions, and saffron on dum.',
    price: 325,
    popular: true,
    img: imageLibrary.lambBiryani,
  },
  {
    id: 3,
    category: 'veg',
    name: 'Dal Tadka',
    desc: 'Comforting yellow lentils tempered with ghee, cumin, garlic, and green chilli.',
    price: 210,
    popular: false,
    img: imageLibrary.dalFry,
  },
  {
    id: 4,
    category: 'veg',
    name: 'Rajma Masala',
    desc: 'Slow-simmered kidney beans in a North Indian onion-tomato masala with fresh coriander.',
    price: 225,
    popular: false,
    img: imageLibrary.kidneyBeanCurry,
  },
  {
    id: 5,
    category: 'veg',
    name: 'Baingan Bharta',
    desc: 'Fire-roasted eggplant mashed with onion, tomato, smoked spices, and coriander stems.',
    price: 235,
    popular: false,
    img: imageLibrary.bainganBharta,
  },
  {
    id: 6,
    category: 'non-veg',
    name: 'Chicken 65',
    desc: 'Crisp fried chicken tossed with curry leaves, green chilli, and our chilli-garlic seasoning.',
    price: 275,
    popular: true,
    img: imageLibrary.tandooriChicken,
  },
  {
    id: 7,
    category: 'non-veg',
    name: 'Chicken Handi',
    desc: 'Bone-in chicken cooked in a rich handi gravy with browned onions, coriander, and butter.',
    price: 345,
    popular: true,
    img: imageLibrary.chickenHandi,
  },
  {
    id: 8,
    category: 'non-veg',
    name: 'Mutton Dum Biryani',
    desc: 'Long-grain basmati layered with tender mutton, fried onions, mint, and slow-cooked spices.',
    price: 425,
    popular: true,
    img: imageLibrary.lambBiryani,
  },
  {
    id: 9,
    category: 'non-veg',
    name: 'Tandoori Chicken',
    desc: 'Yoghurt-marinated chicken charred in the tandoor and served with onion salad and lime.',
    price: 365,
    popular: false,
    img: imageLibrary.tandooriChicken,
  },
  {
    id: 10,
    category: 'non-veg',
    name: 'Rogan Josh',
    desc: 'Slow-cooked lamb in Kashmiri-style gravy scented with fennel, cardamom, and ginger.',
    price: 395,
    popular: false,
    img: imageLibrary.lambRoganJosh,
  },
  {
    id: 11,
    category: 'non-veg',
    name: 'Fish Masala Fry',
    desc: 'Coastal-style fish fillet pan-fried with tangy masala and finished with lemon.',
    price: 355,
    popular: false,
    img: imageLibrary.fishMasala,
  },
  {
    id: 12,
    category: 'non-veg',
    name: 'Chicken Mandi',
    desc: 'Smoky spiced rice served with juicy roast chicken and cooling mint yoghurt.',
    price: 389,
    popular: true,
    img: imageLibrary.chickenMandi,
  },
  {
    id: 13,
    category: 'non-veg',
    name: 'Street Bread Omelette',
    desc: 'Masala omelette folded into butter-toasted bread with onion, chilli, and pepper.',
    price: 165,
    popular: false,
    img: imageLibrary.breadOmelette,
  },
]

export const aboutImages = [
  { label: 'Dum Biryani', img: imageLibrary.lambBiryani, style: { minHeight: '320px' } },
  { label: 'Tandoor Grill', img: imageLibrary.tandooriChicken, style: { minHeight: '152px' } },
  { label: 'House Gravies', img: imageLibrary.dalFry, style: { minHeight: '152px' } },
]

export const aboutStats = [
  { number: '24+', label: 'Signature Plates' },
  { number: '15', label: 'Years in Bengaluru' },
  { number: '30k+', label: 'Family Orders Served' },
]

export const bookingFeatures = [
  { id: '01', text: 'Fresh dum biryani batches at lunch and dinner' },
  { id: '02', text: 'Large-table seating for family outings and groups' },
  { id: '03', text: 'Party trays and office catering available on request' },
  { id: '04', text: 'Separate veg and non-veg service when needed' },
]

export const footerLinks = {
  explore: [
    { label: 'Our Menu', href: '#menu' },
    { label: 'Family Packs', href: '#menu' },
    { label: 'Reservations', href: '#booking' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#footer' },
  ],
  hours: [
    { label: 'Mon-Thu: 12 PM-10:30 PM', href: '#' },
    { label: 'Fri-Sun: 12 PM-11 PM', href: '#' },
    { label: 'Lunch Rush: 12 PM-3 PM', href: '#' },
    { label: 'Dinner Rush: 7 PM-10 PM', href: '#' },
  ],
  contact: [
    { label: '+917975353938', href: 'tel:+917975353938' },
    { label: 'vinaygk219@gmail.com', href: 'mailto:vinaygk219@gmail.com' },
    { label: '18, 100 Feet Road, Indiranagar', href: '#' },
    { label: 'Bengaluru, Karnataka 560038', href: '#' },
  ],
  socials: [
    { label: 'IG', name: 'Instagram' },
    { label: 'FB', name: 'Facebook' },
    { label: 'WA', name: 'WhatsApp' },
    { label: 'Maps', name: 'Google Maps' },
  ],
}
