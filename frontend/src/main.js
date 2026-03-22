import './style.css'

/* ===================== NAVBAR SCROLL ===================== */
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const current = window.scrollY;
  if (current > lastScroll && current > 80) {
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
  }
  if (current > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  lastScroll = current;
});

/* ===================== MOBILE MENU ===================== */
window.toggleMobile = function () {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
window.closeMobile = function () {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ===================== SCROLL REVEAL ===================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ===================== MENU FILTER ===================== */
window.filterMenu = function (cat, btn) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.menu-card').forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.classList.add('show');
      card.style.display = '';
    } else {
      card.classList.remove('show');
      card.style.display = 'none';
    }
  });
}
// Init: show all
document.querySelectorAll('.menu-card').forEach(c => { c.style.display = ''; });

/* ===================== CART ===================== */
let cart = [];

function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

window.toggleCart = function () {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

window.addToCart = function (btn, name, price, emoji) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, emoji, qty: 1 });
  }
  renderCart();
  showToast(`${name} added!`);
  btn.textContent = 'Added ✓';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1500);
}

window.changeQty = function (name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const badge = document.getElementById('cartBadge');
  const totalEl = document.getElementById('cartTotal');
  const totalQty = cart.reduce((a, i) => a + i.qty, 0);
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);
  badge.textContent = totalQty;
  badge.classList.toggle('show', totalQty > 0);
  totalEl.textContent = formatPrice(total);
  if (cart.length === 0) {
    empty.style.display = '';
    footer.style.display = 'none';
    container.innerHTML = '';
    container.appendChild(empty);
    return;
  }
  empty.style.display = 'none';
  footer.style.display = '';
  const items = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
      </div>
    </div>
  `).join('');
  container.innerHTML = items;
}

window.placeOrder = function () {
  cart = [];
  renderCart();
  window.toggleCart();
  showToast('Order placed! 🎉 See you soon!');
}

/* ===================== TOAST ===================== */
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 2600);
}

/* ===================== BOOKING ===================== */
// Set min date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('bookingDate').min = today;
document.getElementById('bookingDate').value = today;

let guests = 2;
window.changeGuests = function (d) {
  guests = Math.max(1, Math.min(12, guests + d));
  document.getElementById('guestCount').textContent = guests;
}
window.selectTime = function (el) {
  document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
window.submitBooking = function (e) {
  e.preventDefault();
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('bookingSuccess').style.display = 'block';
}
window.resetBooking = function () {
  document.getElementById('bookingForm').style.display = '';
  document.getElementById('bookingSuccess').style.display = 'none';
}

/* ===================== SMOOTH ANCHOR SCROLL ===================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
