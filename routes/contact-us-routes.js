import express from 'express';
import { getAllDetails, mailer } from '../controllers/contact-us-controller.js';
const contactUsRoute = express.Router()

contactUsRoute.post('/mail-sender', mailer)
contactUsRoute.get('/get-all-details', getAllDetails)

export default contactUsRoute