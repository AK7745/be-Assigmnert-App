import express from 'express';
import { mailer } from '../controllers/contact-us-controller.js';
const contactUsRoute = express.Router()

contactUsRoute.post('/mail-sender', mailer)

export default contactUsRoute