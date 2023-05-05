import express from 'express'
import { createPrice, getPrice } from '../controllers/pricing-controller.js'

const pricingRoute=express.Router()

pricingRoute.get('/get-pricing',getPrice)
pricingRoute.post('/create-pricing',createPrice)

export default pricingRoute