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
