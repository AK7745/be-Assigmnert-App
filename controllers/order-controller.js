import { Order } from "../entities/order-entity";

export const  createOrder=async (req,res)=>{
const {
documentId,
subjectId,
daysId,
levelId,
name,
email,
phoneNumber,
...res
}=req.body;
if(!documentId || !subjectId || !daysId || !levelId || !name || !email || !phoneNumber){
    return res.status(400).json({
        success: false,
        error: "required fields not provided",
      });
}
const order=await Order.create(payLoad)   
}