const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
const cors = require('cors')({
    origin: true,
});

admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "79243a9ebe5f87",
        pass: "e81459d981a371"
    }
});

exports.emailSender = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        // Define mailing options
        const mailOptions = {
            to: 'jimkelly.t@outlook.com',
            from: req.body.email,
            subject: 'New Email from Portfolio Website',
            text: req.body.message
        };

        return transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.send(err.toString());
            }
            return res.send('Email sent successfully!');
        });
    });
});