import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,      
    pass: process.env.GMAIL_APP_PASS,  
  },
});

export const sendMailToContact = async (email, subject, text) => {
  const message = {
    from: process.env.GMAIL_USER,       
    to: "mashabatyuta.work@gmail.com",  
    replyTo: email,                     
    subject,
    text: `From: ${email}\n\n${text}`,
  };

  try {
    await transporter.sendMail(message);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};
