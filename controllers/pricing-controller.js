import Days from "../entities/days.js";
import Level from "../entities/level.js";
import Pricing from "../entities/pricing.js"
import { Op } from "sequelize";
export const getPrice = async (req, res) => {
  try {
    const {  pagesCount } = req.body;
    const { daysId, levelId } = req.query;
  
    if (!daysId || !levelId) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }
    const perPagePrice = await Pricing.findOne({
      where: {
        [Op.and]:[{levelId},{daysId}]
      },
      attributes: ["id","price"],      
    })
    if (pagesCount ) {
      const totalPrice = perPagePrice.price * pagesCount;
      return res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: { perPagePrice, totalPrice },
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

export const createPrice = async (req, res) => {
  try {
    const { days, level, price } = req.body;
    console.log("body", req.body);
    const daysId=await Days.findOne({
      where:{
        days,
        deleted:false
      }
    }).then((e)=>e?.id)
    const levelId=await Level.findOne({
      where:{
        level,
        deleted:false
      }
    }).then((e)=>e?.id)
    const Price = await Pricing.create({
      price,
      daysId,
      levelId
    });
    console.log("Price", Price);
    return res.status(201).json(Price);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
