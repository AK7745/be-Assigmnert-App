import Subject from "../entities/subject-entity.js";

export const createSubject = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "name is not defined",
      });
    }

    const subject = await Subject.create({
      name,
    });

    res.status(201).json({
      success: true,
      message: "subject created successfully",
      data: subject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};


export const getAllSubjects = async (req, res) => {
  try {
    // const page = parseInt(req.query.page) || 1;
    // const limit = parseInt(req.query.limit) || 10;

    // const offset = (page - 1) * limit;

    const subjects = await Subject.findAll({
      where: {
        deleted: false,
      },
      order: [["createdAt", "DESC"]],
      // limit,
      // offset,
    });

    res.status(200).json({
      success: true,
      message: "All Subjects fetched successfully",
      data:subjects
    });
  } catch (error) {
    console.error("Error while fetching details:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};