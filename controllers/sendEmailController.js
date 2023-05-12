const nodemailer = require('nodemailer');
const { newYearTemplate, mothersDayTemplate, valentinesDayTemplate, fathersDayTemplate, birthdayTemplate } = require('./emailTemplates');


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'developercu@hotmail.com',
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports.sendMail = async (req, res) => {
    const { name, email, theme } = req.body;

    const subject = `You have an email from ${name} to celebrate your ${theme}`;

    const getTemplate = (theme, message) => {
        switch (theme) {
            case `new year`:
                return newYearTemplate(message);
            case `birthday`:
                return birthdayTemplate(message);
            case `valentine's day`:
                return valentinesDayTemplate(message);
            case `mother's day`:
                return mothersDayTemplate(message);
            case `father's day`:
                return fathersDayTemplate(message);
            default:
                return '';
        }
    };


    const mailOptions = {
        from: 'developercu@hotmail.com',
        to: email,
        subject: subject,
        text: req.body.message,
        html: getTemplate(theme, req.body.message)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
};