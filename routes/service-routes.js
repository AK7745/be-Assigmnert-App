import express  from "express";
import  {upload}  from "../middlewares/multer.js";
import { authenticate } from "../middlewares/auth.js";
import { createService, getAllService, getSingleService, softDeleteService, updateService } from "../controllers/services-controller.js";

const serviceRoute=express.Router()

serviceRoute.post('/create-service',upload.fields([{ name: 'meta_img', maxCount: 1 }, { name: 'image', maxCount: 1 }]), createService);
serviceRoute.put('/update-service/:id',upload.fields([{ name: 'meta_img', maxCount: 1 }, { name: 'image', maxCount: 1 }]),updateService);
serviceRoute.delete('/delete-service/:id', softDeleteService);
serviceRoute.get('/get-single-service/:slug',getSingleService)
serviceRoute.get('/get-all-services',getAllService)
// serviceRoute.delete('/complete-delete-all-blogs',deleteAllBlogs)
// serviceRoute.put('/update-banner/:id',upload.single('banner'),updateBanner)
// serviceRoute.put('/update-meta-image/:id',upload.single('meta_img'),updateMetaImage)



export default serviceRoute



