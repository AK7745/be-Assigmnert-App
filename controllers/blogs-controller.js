import { Blog } from "../entities/blogs-entity.js";

export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log("req.body", req.body);
    const photo = req.file.buffer;

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
export const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const blog = await Blog.findOne({
      where: { id },
    });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const updateBlogInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, description },
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

    const blog = await Blog.findByIdAndUpdate(
      id,
      // { deleted: true },
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

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};
