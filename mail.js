import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMailToContact = async (email, subject, text) => {
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: "mashabatyuta.work@gmail.com", 
      subject,
      reply_to: email, 
      text: `From: ${email}\n\n${text}`,
    });

    console.log("✅ Email sent successfully via Resend");
  } catch (error) {
    console.error("❌ Error sending email via Resend:", error);
    throw error;
  }
};
