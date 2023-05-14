import documentType from "../entities/documentType.js";


export const createDocumentType=async (req,res)=>{
    const {name}=req.body
if(!name){
    return res.status(400).json({ success: false, error: "Missing required fields" });
}
const document=await documentType.create({
    name
})
return res.status(200).json({
    success: true,
    message: "Document type successfully",
    data: document,
  });

}

export const getAllDocuments = async (req, res) => {
    try { 
     const document = await documentType.findAll({
        where: {
          deleted: false,
        },
        order: [["createdAt", "DESC"]],
        
      });
  
      res.status(200).json({
        success: true,
        message: "All Documents fetched successfully",
        data: document
        
      });
    } catch (error) {
      console.error("Error while fetching details:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  };
