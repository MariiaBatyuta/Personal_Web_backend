import Joi from "joi";

export const sendMailSchema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    subject: Joi.string().required(),
    text: Joi.string().required(),
});