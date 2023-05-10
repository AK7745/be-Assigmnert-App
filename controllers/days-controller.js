import  Days  from "../entities/days.js";
import  Pricing  from "../entities/pricing.js";

export const createDays = async (req, res) => {
    try {
      const { days } = req.body;
      const createDays = await Days.create({
        days
      });
      res.status(201).json({createDays});
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const getDays = async (req, res) => {
    try {
      const result = await Days.findAll({
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteAllDays=async (req,res)=>{
    try {
        
        await Days.destroy({ where: {} });
    
        res.status(200).json({ message: 'All days records deleted successfully.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  }