import express  from "express";
import { createBlog, getSingleBlog,updateBlogImage,updateBlogInfo, softDeleteBlog,getAllBlog, updatedCreateBlog, deleteAllBlogs } from "../controllers/blogs-controller.js";
import { upload } from "../middlewares/multer.js";
import { authenticate } from "../middlewares/auth.js";

const blogRoute=express.Router()

blogRoute.post('/create-blog',upload.single('photo'),createBlog)
blogRoute.get('/get-single-blog/:id',getSingleBlog)
blogRoute.post('/Updatedcreate-blog',upload.fields([{ name: 'thumbnail_img', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), updatedCreateBlog);
blogRoute.put('/update-blog-photo/:id', authenticate, upload.single('photo'), updateBlogImage);
blogRoute.put('/update-blog-description/:id', updateBlogInfo);
blogRoute.delete('/delete-blog/:id', authenticate, softDeleteBlog);
blogRoute.get('/get-all-blogs',getAllBlog)
blogRoute.get('/complete-delete-all-blogs',deleteAllBlogs)


export default blogRoute



