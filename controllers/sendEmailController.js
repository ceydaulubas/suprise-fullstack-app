const nodemailer = require('nodemailer');

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
    const { name, email, theme } = req.body;

    const subject = `${name} celabrete for ${theme}`;


    const mailOptions = {
        from: 'developercu@hotmail.com',
        to: email,
        subject: subject,
        text: req.body.message,

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