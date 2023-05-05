import express from 'express'
import {sigin,createCredentials} from '../controllers/user-controller.js';
const userRoute=express.Router();

userRoute.get('/login',sigin)
userRoute.post('/credentials',createCredentials)
export default userRoute