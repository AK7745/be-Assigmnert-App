import Days from "../entities/days.js";
import Level from "../entities/level.js";
import Pricing from "../entities/pricing.js";
import { Op } from "sequelize";

export const createPrice = async (req, res) => {
  try {
    const { daysId, levelId, price } = req.body;
    if (!daysId || !levelId) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    const Price = await Pricing.create({
      price,
      daysId,
      levelId,
    });
    return res.status(201).json({
      success: true,
      message: "Price created successfully",
      data: Price,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updatePrice = async (req, res) => {
  try {
    const { daysId, levelId, price } = req.body;
    const id = req.params.id;
    const check = await Pricing.findOne({
      where: {
        id,
        deleted: false,
      },
    });
    if (!check) {
      return res
        .status(404)
        .json({ success: false, message: "Pricing Not Found" });
    }
    const updatedPrice = await Pricing.update(
      { daysId, levelId, price },
      {
        where: {
          id,
          deleted: false,
        },
      }
    );
    res
      .status(200)
      .json({ success: true, message: "Pricing Updated Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getPrice = async (req, res) => {
  try {
    const { daysId, levelId ,pagesCount } = req.query;
    if (!daysId || !levelId) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }
    const perPagePrice = await Pricing.findOne({
      where: {
        [Op.and]: [{ levelId }, { daysId }],
      },
      attributes: ["id", "price"],
    });
    if (pagesCount) {
      const totalPrice = perPagePrice.price * pagesCount;
      return res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: { perPagePrice,totalPrice },
      });
      
    }

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: { perPagePrice },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({ success: false, error: "Internal server error" });
  }

};

export const getAllPricing=async (req, res) => {
try {
  const pricing= await Pricing.findAll({
    where:{
      deleted: false,
    },
    include:[Days,Level]
  })
  res.status(200).json({
    message: "Pricing fetched successfully",
  data: pricing
  })
} catch (error) {
  res.status(500).json({ error: error.message });
}

}
