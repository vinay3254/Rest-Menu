const mongoose = require('mongoose')

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['veg', 'non-veg'],
  },
  emoji: { type: String },
  qty: { type: Number, required: true, min: 1 },
})

const orderSchema = new mongoose.Schema({
  items: { type: [orderItemSchema], required: true },
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending',
  },
  note: { type: String, default: '' },
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)
