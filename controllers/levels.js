import Level from "../entities/level.js";

export const createLevel = async (req, res) => {
  try {
    const level = await Level.create(req.body);
    res.status(200).json({
      message: "level created successfully",
      data: level,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const getAllLevel=async (req, res) => {
  try {
    const level= await Level.findAll({
      where:{
        deleted: false,
      }
    })
    res.status(200).json({
      message: "Level fetched successfully",
    data: level
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
  }

  export const getSingleLevel = async (req, res) => {
    try {
      const id = req.params.id;
  
      const level= await Level.findOne({
        where: { id, deleted: false },
      });
  
      if (!level) {
        return res.status(404).json({
          success: false,
          error: "level not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "level fetched successfully",
        data: level,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  };
  