const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
module.exports = async (email, subject, text) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_ACCOUNT, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_ACCOUNT,
            to: email,
            subject: subject,
            text: text,
            html: `<div>
            <b>Hãy suy nghĩ thật kỹ trước khi click </b>
            <b>${text}</b>
            </div>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d86158d7-afe4-4124-b1cf-344f22406a1f/dgtyfv0-af83680c-3044-4b43-9d70-ce6dc899ea9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4NjE1OGQ3LWFmZTQtNDEyNC1iMWNmLTM0NGYyMjQwNmExZlwvZGd0eWZ2MC1hZjgzNjgwYy0zMDQ0LTRiNDMtOWQ3MC1jZTZkYzg5OWVhOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6-U7xGigL422VbGNKDqG3k7kkdUf4lUVNTsVm-QfpF4" 
            width="200px" height="250px"/>`,
        });
        return "rat ok"
        console.log("email sent successfully");
    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
};