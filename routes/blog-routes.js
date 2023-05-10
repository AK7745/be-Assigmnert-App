import express  from "express";
import { createBlog, getSingleBlog,updateBlogImage,updateBlogInfo, softDeleteBlog,getAllBlog, deleteAllBlogs } from "../controllers/blogs-controller.js";
import { upload } from "../middlewares/multer.js";
import { authenticate } from "../middlewares/auth.js";

const blogRoute=express.Router()

// blogRoute.post('/create-blog',upload.single('photo'),createBlog)
blogRoute.post('/create-blog',upload.fields([{ name: 'thumbnail_img', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), createBlog);
blogRoute.put('/update-blog-description/:id', updateBlogInfo);
blogRoute.get('/get-all-blogs',getAllBlog)
blogRoute.get('/get-single-blog/:id',getSingleBlog)
blogRoute.put('/update-blog-photo/:id', authenticate, upload.single('photo'), updateBlogImage);
blogRoute.delete('/delete-blog/:id', authenticate, softDeleteBlog);
blogRoute.get('/complete-delete-all-blogs',deleteAllBlogs)


export default blogRoute



