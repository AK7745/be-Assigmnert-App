import express, { Router } from 'express';
import { createSubject } from '../controllers/subject-controller.js';
const subjectRoutes=express.Router();

subjectRoutes.post('/create-subject',createSubject)


export default subjectRoutes