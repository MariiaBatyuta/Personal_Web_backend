import { sendMailToContact } from "../mail.js";
import { sendMailSchema } from "../schemas/sendMailSchema.js";

export const sendMail = async (req, res, next) => {
    const { email, subject, text } = req.body;

    try {
        if (Object.keys(req.body).length === 0) return res.status(400).send({ message: "Message must include any text" });
        
        const { error } = sendMailSchema.validate({ email, subject, text });
        if (error) return res.status(400).send({ message: error.message });

        await sendMailToContact(email, subject, text);

        res.status(200).send({ message: "Message send successfully" });
    } catch (error) {
        next(error);
    }
}