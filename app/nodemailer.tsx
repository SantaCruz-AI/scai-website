const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "liljgremlin@gmail.com", 
        pass: "moeszywspftnagzo",
    } 
});

export async function sendEmail(subject:string, text:string, email:string) {

    const mailDetails = {
        from: 'UCSC-AI',
        to: email,
        subject: subject,
        text: text,
        html: '',
    };
     
    transporter.sendMail(mailDetails, function(err:any, data:any) {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent: '+data.response);
        }
    });
};

