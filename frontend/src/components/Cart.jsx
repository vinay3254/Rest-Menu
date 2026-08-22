import { formatPrice } from '../utils/formatPrice'

export default function Cart({ cart, isOpen, onToggle, onChangeQty, onPlaceOrder }) {
  const totalQty = cart.reduce((a, i) => a + i.qty, 0)
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0)

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay${isOpen ? ' open' : ''}`}
        id="cartOverlay"
        onClick={onToggle}
      />

      {/* Sidebar */}
      <div className={`cart-sidebar${isOpen ? ' open' : ''}`} id="cartSidebar">
        <div className="cart-header">
          <h2 className="cart-title">Your Order</h2>
          <button className="cart-close" onClick={onToggle}>✕</button>
        </div>

        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? (
            <div className="cart-empty" id="cartEmpty">
              <p>Your cart is empty.<br />Add biryanis, curries, or grills to get started.</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.name}>
                <div className={`cart-item-pill ${item.category}`}>{item.category === 'veg' ? 'Veg' : 'Non-Veg'}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{formatPrice(item.price * item.qty)}</div>
                </div>
                <div className="cart-item-qty">
                  <button className="qty-btn" onClick={() => onChangeQty(item.name, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onChangeQty(item.name, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer" id="cartFooter">
            <div className="cart-subtotal">
              <span className="cart-subtotal-label">Subtotal</span>
              <span className="cart-subtotal-value" id="cartTotal">{formatPrice(total)}</span>
            </div>
            <p className="cart-note">Tax & service charge not included</p>
            <button className="btn-place-order" onClick={onPlaceOrder}>Place Order →</button>
          </div>
        )}
      </div>

      {/* FAB */}
      <div className="cart-fab" id="cartFab" onClick={onToggle}>
        Cart
        <div className={`cart-badge${totalQty > 0 ? ' show' : ''}`} id="cartBadge">
          {totalQty}
        </div>
      </div>
    </>
  )
}
