require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const menuRoutes = require('./routes/menu')
const orderRoutes = require('./routes/orders')
const bookingRoutes = require('./routes/bookings')

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

// Routes
app.use('/api/menu', menuRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/bookings', bookingRoutes)

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Connect to MongoDB then start server
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meghanafoods'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB:', MONGODB_URI)
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message)
    process.exit(1)
  })
