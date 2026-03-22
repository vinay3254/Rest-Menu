export default function Toast({ message, show }) {
  return (
    <div className={`toast${show ? ' show' : ''}`} id="toast">
      <span className="toast-icon">✓</span>
      <span id="toastMsg">{message}</span>
    </div>
  )
}
