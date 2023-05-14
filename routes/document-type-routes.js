import express from 'express';
import { createDocumentType, getAllDocuments } from '../controllers/document-type-controller.js';
const documnetTypeRoute = express.Router()

documnetTypeRoute.post('/create-documnet-type', createDocumentType)
documnetTypeRoute.get('/get-all-document-type',getAllDocuments)

export default documnetTypeRoute