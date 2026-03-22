const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')

// POST create a booking
router.post('/', async (req, res) => {
  try {
    const { name, date, time, guests, specialRequests } = req.body
    if (!name || !date || !time || !guests) {
      return res.status(400).json({ error: 'name, date, time and guests are required' })
    }
    const booking = await Booking.create({ name, date, time, guests, specialRequests })
    res.status(201).json(booking)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    res.json(bookings)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET single booking
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    if (!booking) return res.status(404).json({ error: 'Booking not found' })
    res.json(booking)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PATCH update booking status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )
    if (!booking) return res.status(404).json({ error: 'Booking not found' })
    res.json(booking)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
