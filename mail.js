import "dotenv/config";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMailToContact = (email, subject, text) => {
    const message = {
        to: "mashabatyuta.work@gmail.com",  
        from: "mbatyuta1997@ukr.net",
        replyTo: email,
        subject,
        text,
    };
    return sgMail.send(message);
}