import nodemailer, { Transporter } from "nodemailer";

const transporter: Transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USERNAME!,
        pass: process.env.MAIL_PASSWORD!
    }
})

export async function sendEmail(to: string, link: string) {

    const mailOptions = {
        from: `"Acme Inc." <${process.env.MAIL_USERNAME}>`,
        to,
        subject:"Password Reset for your Acme Inc. account.",
        html: `
            <p>This is the link for resetting your password: <a href="${link}">${link}</a></p>
            <p>This link will expire within 5 minutes.</p>
        `
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email', error);
        throw error;
    }

}