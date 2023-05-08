import  Pricing  from "../entities/pricing.js";

export const getPrice = async (req, res) => {
  try {
    const { days, level, pagesCount } = req.body;

    if (!days || !level) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    const perPagePrice = await Pricing.findOne({
      where: {
        days,
        level,
      },
    }).then((e) => e.price);

    if (pagesCount) {
      const totalPrice = perPagePrice * pagesCount;
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
    const Price = await Pricing.create({
      days,
      level,
      price,
    });
    console.log("Price", Price);
    return res.status(201).json(Price);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
