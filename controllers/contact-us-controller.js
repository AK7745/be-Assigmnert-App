import { mailSender } from "../helper-functions/send-grid-mailer.js";
import sendFormEmail from "../helper-functions/node-mailer.js";
import ContactUs from "../entities/contact-us-entity.js";

export const mailer = async (req, res) => {
  try {
    await sendFormEmail(req.body)
    // await mailSender(req.body);
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


export const capchaVerification = async (req, res) => {
  try {
    const { token } = req.body;
    const response = await axios.post(
      `${CAPCHA_URL}?secret=${process.env.CAPCHA_SECRET_KEY}&response=${token}`
    );
    console.log(response);
    if (!response.data.success) {
      return res.status(200).json({ success: false, message: "its is a bot" });
    }
    res.status(200).json({ success: true, message: "its is a human" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const detail = await ContactUs.findOne({
      where: { id, deleted: false },
    });

    if (!detail) {
      return res.status(404).json({
        success: false,
        error: "detail not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "detail fetched successfully",
      data: detail,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};