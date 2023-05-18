import { mailSender } from "../helper-functions/send-grid-mailer.js";
import sendFormEmail from "../helper-functions/node-mailer.js";
import ContactUs from "../entities/contact-us-entity.js";

export const mailer = async (req, res) => {
  try {
    await sendFormEmail(req.body)
    await mailSender(req.body);
    const details=await ContactUs.create(req.body)
    return res.status(200).json({ message: 'Email sent successfully'});
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export const getAllDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 15; 
    const offset = (page - 1) * limit; 

    const { count, rows } = await ContactUs.findAndCountAll({
      where: {
        deleted: false
      },
      order: [['createdAt', 'DESC']],
      limit,
      offset
    });

    res.status(200).json({
      message: 'All details fetched successfully',
      data: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        items: rows
      }
    });
  } catch (error) {
    console.error('Error while fetching details:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};


