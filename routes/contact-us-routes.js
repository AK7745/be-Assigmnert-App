import express from 'express';
import { getAllDetails, mailer,capchaVerification,getSingleDetail } from '../controllers/contact-us-controller.js';
const contactUsRoute = express.Router()

contactUsRoute.post('/mail-sender', mailer)
contactUsRoute.get('/get-all-details', getAllDetails)
contactUsRoute.get('/get-single-detail/:id', getSingleDetail)
contactUsRoute.post('/verify-capcha',capchaVerification)

export default contactUsRoute