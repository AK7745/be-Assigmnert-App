import {Pricing} from "../entities/pricing.js";

export const getPrice = async (req, res) => {
  try {
    const { days, level } = req.body;
    const price = await Pricing.findOne({
      where: {
        days,
        level,
      },
    });
    res.status(201).json(price);
  } catch (error) {
    console.log(error)
    res.status(500).json({error});
  }
};

export const createPrice = async (req, res) => {
  try {
    const { days, level,price } = req.body;
    console.log("body",req.body)
    const Price = await Pricing.create({
      days,
      level,
      price

    });
    console.log("Price",Price)
    res.status(201).json(Price);
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error});
  }
};