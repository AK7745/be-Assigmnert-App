import { Blog } from "../entities/blogs-entity.js"
import fs from 'fs'
export const createBlog=async (req,res)=>{
    try {
        const {title,description}=req.body
        console.log("req.body",req.body)
       const photo=req.file.buffer

    const myphoto=Buffer.from(photo).toString('base64')
    const blog=await Blog.create({
        title,
        description,
        image:myphoto
    })
    res.status(201).json(blog) 
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getSingleBlog=async (req,res)=>{
try {
    const id=req.params.id
    console.log(id)
    const blog=await Blog.findOne({
        where:{id}
    })
        res.status(200).json(blog)

} catch (error) {
    console.log(error)
res.status(500).json(error.message)    
}      
}

