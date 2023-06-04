import Info  from "../entities/info-entity.js";

export const createInfo = async (req, res) => {
  try {
    const userInfo = req.body;
    const info = await Info.create(userInfo);
    res.status(201).json({
      success: true,
      message: "info created successfully",
      data: info,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateInfo = async (req, res) => {
  try {
    const id  = req.params.id;
    if (!id){
      return res.status(400).json({
        success: false,
        message: "id is not defined",
      });
    }
    const data = req.body;
   
    const [rowsAffected] = await Info.update(data, {
      where: {
        id,
        deleted: false,
      },
    });

    if (rowsAffected === 0) {
      return res.status(404).json({ success: false, error: "Info not found" });
    }

    const updatedInfo = await Info.findOne({
      where: {
        id,
        deleted: false,
      },
    });

    res.status(200).json({
      success: true,
      message: "Info updated successfully",
      data: updatedInfo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export const getInfo = async (req, res)=>{
  try {
    const info=await Info.findAll({
      where:{
        deleted:false
      }
    })
    res.status(200).json({
      success: true,
      message: "Info fetched successfully",
      data: info,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
}