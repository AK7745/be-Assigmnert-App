import express from 'express';
import { createLevel, getAllLevel, getSingleLevel } from '../controllers/levels.js';
const levelRoutes=express.Router()

levelRoutes.post('/create-level', createLevel)
levelRoutes.get('/get-all-level', getAllLevel)
levelRoutes.get('/get-single-level/:id', getSingleLevel)

export default levelRoutes