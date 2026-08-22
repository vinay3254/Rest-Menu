import { useState, useRef } from 'react'
import { bookingFeatures } from '../content/restaurantData'

const timeSlots = ['12:30 PM', '1:00 PM', '1:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']
const today = new Date().toISOString().split('T')[0]

export default function Booking() {
  const [guests, setGuests] = useState(2)
  const [selectedTime, setSelectedTime] = useState('7:30 PM')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const nameRef = useRef()
  const dateRef = useRef()
  const specialRef = useRef()

  function changeGuests(d) {
    setGuests(g => Math.max(1, Math.min(12, g + d)))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameRef.current.value,
          date: dateRef.current.value,
          time: selectedTime,
          guests,
          specialRequests: specialRef.current.value,
        }),
      })
      if (!res.ok) throw new Error('Booking failed')
      setSubmitted(true)
    } catch (err) {
      alert('Could not complete booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function resetBooking() {
    setSubmitted(false)
  }

  return (
    <section id="booking">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-text reveal">
            <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Reserve Your Table</span>
            <h2 className="section-title">Plan Your Meal</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Reserve a table for biryani feasts, office lunches, or late family dinners at Meghana Foods.
            </p>
            <div className="booking-features">
              {bookingFeatures.map(({ id, text }) => (
                <div className="booking-feature" key={text}>
                  <div className="booking-feature-icon">{id}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-form-card reveal reveal-delay-2" id="bookingCard">
            {!submitted ? (
              <form id="bookingForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Ashwin Kumar" ref={nameRef} required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-input" id="bookingDate" min={today} defaultValue={today} ref={dateRef} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Guests</label>
                    <div className="guest-counter">
                      <button type="button" className="guest-btn" onClick={() => changeGuests(-1)}>−</button>
                      <div>
                        <div className="guest-count" id="guestCount">{guests}</div>
                        <div className="guest-label" style={{ fontSize: '10px', textAlign: 'center' }}>guests</div>
                      </div>
                      <button type="button" className="guest-btn" onClick={() => changeGuests(1)}>+</button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Select Time</label>
                  <div className="time-slots" id="timeSlots">
                    {timeSlots.map(slot => (
                      <div
                        key={slot}
                        className={`time-slot${selectedTime === slot ? ' active' : ''}`}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Special Requests (optional)</label>
                  <input type="text" className="form-input" placeholder="High chair, extra spice, family seating..." ref={specialRef} />
                </div>
                <button type="submit" className="btn-book" disabled={loading}>
                  {loading ? 'Reserving…' : 'Confirm Reservation'}
                </button>
              </form>
            ) : (
              <div className="booking-success" id="bookingSuccess" style={{ display: 'block' }}>
                <div className="success-icon">✓</div>
                <h3 className="success-title">Table Reserved!</h3>
                <p className="success-text">
                  Your table is held and the kitchen will be ready for you.<br />
                  We look forward to serving you fresh and hot.
                </p>
                <button
                  onClick={resetBooking}
                  style={{ marginTop: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}
                >
                  Make another reservation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
