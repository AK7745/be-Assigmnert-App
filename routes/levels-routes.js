import express from 'express';
import { createLevel, getAllLevel } from '../controllers/levels.js';
const levelRoutes=express.Router()

levelRoutes.post('/create-level', createLevel)
levelRoutes.get('/get-all-level', getAllLevel)

export default levelRoutes