import express from 'express'
import { createPrice, getAllPricing, getPrice, updatePrice } from '../controllers/pricing-controller.js'

const pricingRoute=express.Router()

pricingRoute.get('/get-pricing',getPrice)
pricingRoute.get('/get-all-pricing',getAllPricing)
pricingRoute.put('/update-pricing/:id',updatePrice)
pricingRoute.post('/create-pricing',createPrice)

export default pricingRoute