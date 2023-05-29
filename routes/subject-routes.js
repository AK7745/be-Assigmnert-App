import express, { Router } from 'express';
import { createSubject, getAllSubjects } from '../controllers/subject-controller.js';
const subjectRoutes=express.Router();

subjectRoutes.post('/create-subject',createSubject)
subjectRoutes.get('/get-all-subjects',getAllSubjects)


export default subjectRoutes