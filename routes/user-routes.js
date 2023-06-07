import express from 'express'
import {sigin,createCredentials,updatePassword} from '../controllers/user-controller.js';
import { authenticate } from '../middlewares/auth.js';
const userRoute=express.Router();

userRoute.get('/login',sigin)
userRoute.post('/credentials',createCredentials)
userRoute.post('/updatePassword',authenticate,updatePassword)
export default userRoute