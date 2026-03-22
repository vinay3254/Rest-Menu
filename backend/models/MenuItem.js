const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['starters', 'mains', 'desserts', 'drinks'],
    required: true,
  },
  name: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  emoji: { type: String, required: true },
  popular: { type: Boolean, default: false },
  img: { type: String, default: null },
  available: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model('MenuItem', menuItemSchema)
