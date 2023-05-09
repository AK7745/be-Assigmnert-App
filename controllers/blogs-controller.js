import { Blog } from "../entities/blogs-entity.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log("req.body", req.body);
    console.log("req.body", req.files);
    const photo = req.file.buffer;
console.log("photo", photo);
    const myphoto = Buffer.from(photo).toString("base64");
    const blog = await Blog.create({
      title,
      description,
      thumbnail_img: myphoto,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatedCreateBlog = async (req, res) => {
  try { 
    const { title, description, author_name } = req.body;
    
    console.log(req.files['thumbnail_img'][0]['path']);
    const thumbnailImagePath = req.files['thumbnail_img'][0]['path'];
    const bannerImagePath = req.files['banner'][0]['path'];  
    const blog = await Blog.create({
      title,
      description,
      author_name,
      thumbnail_img: thumbnailImagePath,
      banner: bannerImagePath,
    });
    const slug=await formatTitleAndId(blog)
const createSlug=await Blog.update(
  {slug},{
    where:{
      id:blog.id
    }
  }
)
const fetchBlog=await Blog.findOne({
  where:{
    id:blog.id,
    deleted:false
  }
})
    res.status(201).json({
      message: 'Blog created successfully',
      data:fetchBlog
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const blog = await Blog.findOne({
      where: { id, 
      deleted: true
      },
    });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

// export const updateBlogInfo = async (req, res) => {
//   try {
//     const { id } = req.params;
    
// const data=req.body
//     const blog = await Blog.update(data,{
//       where:{
//         id,
//         deleted: false,
//       },
//       returning: true,
//     }); 

//     if (!blog) {
//       return res.status(404).json({ error: "Blog not found" });
//     }
// console.log(blog)
//     res.status(200).json({message:`successfully updated`, data:blog});
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error);
//   }
// };

export const updateBlogInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const [rowsAffected] = await Blog.update(data, {
      where: {
        id,
        deleted: false,
      },
    });

    if (rowsAffected === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const updatedBlog = await Blog.findOne({
      where: {
        id,
        deleted: false,
      },
    });

    res.status(200).json({ message: "Successfully updated", data: updatedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


export const updateBlogImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { buffer } = req.file;

    const myphoto = Buffer.from(buffer).toString("base64");

    const blog = await Blog.findByIdAndUpdate(
      id,
      { image: myphoto },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const softDeleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.update(
      
      { deleted: true },
      {
        where:{
          id
        }
      }
      );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number
    const limit = parseInt(req.query.limit) || 10; // Number of items per page

    const offset = (page - 1) * limit; // Offset based on the current page and limit

    const { count, rows } = await Blog.findAndCountAll({
      where: {
        deleted: false
      },
      order: [['createdAt', 'ASC']], // Sort by createdAt field in ascending order
      limit,
      offset
    });

    res.status(200).json({
      message: 'All blogs fetched successfully',
      data: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        items: rows
      }
    });
  } catch (error) {
    console.error('Error while fetching details:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

function formatTitleAndId(apiResponse) {
  // Extract the title and ID from the API response
  const { title, id } = apiResponse;

  // Replace spaces in the title with underscores
  const formattedTitle = title.replace(/ /g, '-');

  // Concatenate the formatted title, "Pakistan", and ID
  const formattedString = `${formattedTitle}-${id}`;

  return formattedString;
}

export const deleteAllBlogs= async (req, res) => {
  try {
    // Delete all blog records
    await Blog.destroy({ where: {} });

    res.status(200).json({ message: 'All blog records deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}










