import express from 'express'
import {sigin,createCredentials} from '../controllers/user-controller.js';
const route=express.Router();

route.get('/login',sigin)
route.post('/credentials',createCredentials)
export default route