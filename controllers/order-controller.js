import Days from "../entities/days.js";
import documentType from "../entities/documentType.js";
import Level from "../entities/level.js";
import { Order } from "../entities/order-entity.js";
import Subject from "../entities/subject-entity.js";

export const createOrder = async (req, res) => {
  try {
    const {
      documentId,
      subjectId,
      daysId,
      levelId,
      name,
      email,
      phoneNumber,
      ...rest
    } = req.body;
    if (
      !documentId ||
      !subjectId ||
      !daysId ||
      !levelId ||
      !name ||
      !email ||
      !phoneNumber
    ) {
      return res.status(400).json({
        success: false,
        error: "required fields not provided",
      });
    }
    const payLoad = {
      documentId,
      subjectId,
      daysId,
      levelId,
      name,
      email,
      phoneNumber,
      ...rest,
    };

    const order = await Order.create(payLoad);
    res.status(201).json({
      success: true,
      message: "Successfully created order",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export const getOneOrder = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id in undefined",
      });
    }
    const check = await Order.findOne({
      where: {
        id,
        deleted: false,
      },
      include: [documentType, Days, Level, Subject],
    });

    if (!check) {
      return res.status(404).json({
        success: false,
        message: "There is no order against this id",
      });
    }

    res.status(201).json({
      success: true,
      message: "Order is fetched successfully",
      data: check,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const GetAllOrders=async (req, res) => {
  const Orders=await Order.findAll({
    where:{
      deleted: false,
    },
    include: [documentType, Days, Level, Subject],
    order: [["createdAt", "DESC"]],
  }) 
  res.status(200).json({
    success: true,
    message:"All Orders fetched successfully",
    data:Orders

  });
}