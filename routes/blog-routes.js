import express  from "express";
import { createBlog, getSingleBlog, softDeleteBlog,getAllBlog, deleteAllBlogs, updateBlog } from "../controllers/blogs-controller.js";
import  upload  from "../middlewares/multer.js";
import { authenticate } from "../middlewares/auth.js";

const blogRoute=express.Router()

blogRoute.post('/create-blog',upload.fields([{ name: 'meta_img', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), createBlog);
blogRoute.put('/update-blog/:id',upload.fields([{ name: 'meta_img', maxCount: 1 }, { name: 'banner', maxCount: 1 }]),updateBlog);
blogRoute.get('/get-all-blogs',getAllBlog)
blogRoute.get('/get-single-blog/:slug',getSingleBlog)
blogRoute.delete('/delete-blog/:id', softDeleteBlog);
blogRoute.delete('/complete-delete-all-blogs',deleteAllBlogs)
// blogRoute.put('/update-banner/:id',upload.single('banner'),updateBanner)
// blogRoute.put('/update-meta-image/:id',upload.single('meta_img'),updateMetaImage)



export default blogRoute



