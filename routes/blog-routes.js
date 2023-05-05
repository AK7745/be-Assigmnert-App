import express  from "express";
import { createBlog, getSingleBlog } from "../controllers/blogs-controller.js";
import { upload } from "../middlewares/multer.js";
import { authenticate } from "../middlewares/auth.js";

const blogRoute=express.Router()

blogRoute.post('/create-blog',authenticate,upload.single('photo'),createBlog)
blogRoute.get('/get-single-blog/:id',getSingleBlog)

export default blogRoute



