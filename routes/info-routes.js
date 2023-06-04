import express from 'express';
import {createInfo, getInfo, updateInfo} from '../controllers/info-controller.js'
const infoRoute=express.Router()

infoRoute.post('/create-info',createInfo)
infoRoute.put('/update-info/:id',updateInfo)
infoRoute.get('/get-info',getInfo)


export default infoRoute