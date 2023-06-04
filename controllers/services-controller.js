import { Service } from "../entities/services-entity.js";

export const createService = async (req, res) => {
  try {
    const { title, description, author_name, meta_description, meta_title,img_alt } =
      req.body;

    if (!description || !title) {
      return res.status(400).json({
        success: false,
        error: "Title and description are required fields",
      });
    }
    const metaImagePath = req?.files?.meta_img?.[0]?.path;
    const imagePath = req?.files?.image?.[0]?.path;

    const service = await Service.create({
      title,
      meta_img: metaImagePath,
      description,
      author_name,
      image: imagePath,
      meta_description,
      meta_title,
      img_alt
    });

    const slug = formatTitleAndId(service?.title, service?.id);
    await Service.update(
      { slug },
      {
        where: {
          id: service.id,
        },
      }
    );

    const fetchService = await Service.findOne({
      where: {
        id: service.id,
        deleted: false,
      },
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: fetchService,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const getSingleService = async (req, res) => {
  try {
    const slug = req.params.slug;
    const service = await Service.findOne({
      where: { slug, deleted: false },
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        error: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const metaImagePath = req?.files?.meta_img?.[0]?.path;
    const imagePath = req?.files?.image?.[0]?.path;
    data.image = imagePath;
    data.meta_img = metaImagePath;
    if (data.title) {
      const slug = formatTitleAndId(data?.title, id);
      await Service.update(
        { slug },
        {
          where: {
            id,
            deleted: false,
          },
        }
      );
    }
    const [rowsAffected] = await Service.update(data, {
      where: {
        id,
        deleted: false,
      },
    });

    if (rowsAffected === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Service not found" });
    }

    const updatedService = await Service.findOne({
      where: {
        id,
        deleted: false,
      },
    });

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const softDeleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const [rowsAffected] = await Service.update(
      { deleted: true },
      {
        where: {
          id,
        },
      }
    );

    if (rowsAffected === 0) {
      return res.status(404).json({ success: false, error: "Service not found" });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getAllService = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    const services = await Service.findAll({
      where: {
        deleted: false,
      },
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    res.status(200).json({
      success: true,
      message: "All Services fetched successfully",
      data: {
        items: services,
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

export const updateBanner = async (req, res) => {
  try {
    const bannerImagePath = req.file.path;
    const id = req.params.id;
    const check = await Blog.findOne({
      where: {
        id,
        deleted: false,
      },
    });
    if (!check) {
      return res
        .status(404)
        .json({ success: false, message: "Blog Not Found" });
    }
    const banner = await Blog.update(
      { banner: bannerImagePath },
      {
        where: {
          id,
          deleted: false,
        },
        returning: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

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
