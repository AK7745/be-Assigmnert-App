import sgMail from '@sendgrid/mail'
import { MAIL_SECRET_KEY } from '../constants.js';

export const mailSender=async (detail)=>{
  sgMail.setApiKey(MAIL_SECRET_KEY)
      const { name, email } = detail;

const msg = {
  to: email,
  from: 'uaeassignmentshelp@gmail.com',
  subject: 'Assignment Help',
  text: `Dear ${name} we have received your query our team will contact you soon`,
};

const response=await sgMail.send(msg)
return response
}
