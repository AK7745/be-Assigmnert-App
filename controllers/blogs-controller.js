import axios from "axios";
import { Blog } from "../entities/blogs-entity.js";
import { CAPCHA_URL } from "../constants.js";

export const createBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      author_name,
      like,
      meta_description,
      meta_title,
      img_alt,
      sub_description
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        error: "Title and description are required fields",
      });
    }
    const metaImagePath = req?.files?.meta_img?.[0]?.path;
    const bannerImagePath = req?.files?.banner?.[0]?.path;

    const blog = await Blog.create({
      title,
      meta_img: metaImagePath,
      description,
      author_name,
      banner: bannerImagePath,
      like,
      meta_description,
      meta_title,
      img_alt,
      sub_description
    });

    const slug = formatTitleAndId(blog?.title, blog?.id);
    await Blog.update(
      { slug },
      {
        where: {
          id: blog.id,
        },
      }
    );

    const fetchBlog = await Blog.findOne({
      where: {
        id: blog.id,
        deleted: false,
      },
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: fetchBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const slug = req.params.slug;
    console.log(slug);
    const blog = await Blog.findOne({
      where: { slug, deleted: false },
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const metaImagePath = req?.files?.meta_img?.[0]?.path;
    const bannerImagePath = req?.files?.banner?.[0]?.path;

    data.banner = bannerImagePath;
    data.meta_img = metaImagePath;
    if (data.title) {
      const slug = formatTitleAndId(data?.title, id);
      await Blog.update(
        { slug },
        {
          where: {
            id,
            deleted: false,
          },
        }
      );
    }
    const [rowsAffected] = await Blog.update(data, {
      where: {
        id,
        deleted: false,
      },
    });

    if (rowsAffected === 0) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    const updatedBlog = await Blog.findOne({
      where: {
        id,
        deleted: false,
      },
    });

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const softDeleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const [rowsAffected] = await Blog.update(
      { deleted: true },
      {
        where: {
          id,
        },
      }
    );

    if (rowsAffected === 0) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    const blogs = await Blog.findAll({
      where: {
        deleted: false,
      },
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    res.status(200).json({
      success: true,
      message: "All blogs fetched successfully",
      data: {
        items: blogs,
      },
    });
  } catch (error) {
    console.error("Error while fetching details:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

function formatTitleAndId(title, id) {
  const formattedTitle = title.replace(/ /g, "-");
  const formattedString = `${formattedTitle}-${id}`;
  return formattedString;
}

export const deleteAllBlogs = async (req, res) => {
  try {
    await Blog.destroy({ where: {} });
    res.status(200).json({ message: "All blog records deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



// export const updateBanner = async (req, res) => {
//   try {
//     const bannerImagePath = req.file.path;
//     const id = req.params.id;
//     const check = await Blog.findOne({
//       where: {
//         id,
//         deleted: false,
//       },
//     });
//     if (!check) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Blog Not Found" });
//     }
//     const banner = await Blog.update(
//       { banner: bannerImagePath },
//       {
//         where: {
//           id,
//           deleted: false,
//         },
//         returning: true,
//       }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Banner updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const updateMetaImage = async (req, res) => {
//   try {
//     const metaImagePath = req.file.path;
//     console.log(metaImagePath);
//     const id = req.params.id;
//     const check = await Blog.findOne({
//       where: {
//         id,
//         deleted: false,
//       },
//     });
//     if (!check) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Blog Not Found" });
//     }
//     const banner = await Blog.update(
//       { meta_img: metaImagePath },
//       {
//         where: {
//           id,
//           deleted: false,
//         },
//         returning: true,
//       }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Meta image updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
