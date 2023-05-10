import express from 'express';
import { createLevel } from '../controllers/levels.js';
const levelRoutes=express.Router()

levelRoutes.post('/create-level', createLevel)

export default levelRoutes