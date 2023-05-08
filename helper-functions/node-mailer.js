import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdullahkhan7745@gmail.com',
    pass: 'blehumwmuszocjuw'
  }
});

const sendFormEmail = async (formData) => {
  try {
    const message = {
      from: formData.email,
      to: 'abdullahkhan7745@gmail.com',
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
