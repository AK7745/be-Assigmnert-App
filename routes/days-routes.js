import express  from "express";
import { createDays,deleteAllDays,getDays} from '../controllers/days-controller.js';

const daysRoutes=express.Router()

daysRoutes.post('/create-days',createDays)
daysRoutes.get('/get-days',getDays)
daysRoutes.delete('/delete-days',deleteAllDays)


export default daysRoutes



