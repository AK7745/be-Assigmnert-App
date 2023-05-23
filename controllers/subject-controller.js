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
