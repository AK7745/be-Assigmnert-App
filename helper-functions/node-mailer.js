import nodemailer from 'nodemailer'
import { USER_EMAIL_NODE_MAILER, USER_PASS_NODE_MAILER,NODE_MAILER_SERVICE } from '../constants.js';

const transporter = nodemailer.createTransport({
  service: NODE_MAILER_SERVICE,
  auth: {
    user: USER_EMAIL_NODE_MAILER,
    pass: USER_PASS_NODE_MAILER
  }
});

const sendFormEmail = async (formData) => {
  try {
    const message = {
      from: formData.email,
      to: USER_EMAIL_NODE_MAILER,
      subject: 'Form Submission',
      html: `
        <h1>Form Submission</h1>
        // <p>Name: ${formData.name}</p>
        // <p>Email: ${formData.email}</p>
        // <p>Phone: ${formData.subject}</p>
        // <p>Message: ${formData.message}</p>
      `
    };

    const info = await transporter.sendMail(message);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendFormEmail;
