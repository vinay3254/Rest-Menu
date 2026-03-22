const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

// POST place a new order
router.post('/', async (req, res) => {
  try {
    const { items, note } = req.body
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order must have at least one item' })
    }
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const order = await Order.create({ items, total, note })
    res.status(201).json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ error: 'Order not found' })
    res.json(order)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PATCH update order status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )
    if (!order) return res.status(404).json({ error: 'Order not found' })
    res.json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
