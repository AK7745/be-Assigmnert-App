import sgMail from '@sendgrid/mail'

export const mailSender=async (detail)=>{
  sgMail.setApiKey('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')
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
