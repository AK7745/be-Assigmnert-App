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
