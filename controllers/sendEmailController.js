const nodemailer = require('nodemailer');
const { newYearTemplate, mothersDayTemplate } = require('./emailTemplates');


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'developercu@hotmail.com',
        pass: 'LZ8YfeZFY4LR5n',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports.sendMail = async (req, res) => {
    const { name, email, theme, relative } = req.body;

    const subject = `${name} celebrate for ${theme}`;

    const getTemplate = (theme, message) => {
        switch (theme) {
            case `new year`:
                return newYearTemplate(message);
            case `birthday`:
                return mothersDayTemplate(message);
            case `valentine's day`:
                return mothersDayTemplate(message);
            case `mother's day`:
                return mothersDayTemplate(message);
            case `father's day`:
                return mothersDayTemplate(message);

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
            res.status(500).send('E-posta gönderilemedi.');
        } else {
            console.log('E-posta gönderildi: ' + info.response);
            res.status(200).send('E-posta başarıyla gönderildi.');
        }
    });
};