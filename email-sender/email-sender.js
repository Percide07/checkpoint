const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'',
//         pass:''
//     }
// });
// const mailOptions = {
//     from:'',
//     to:'',
//     subject:'Sending E-mail for checkpoint',
//     text:'I send you this e-mail to notify you that i finish the checkpoint.',
// }
// transporter.sendMail(mailOptions,(err,info)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Done You can check your sendbox'+ info.response);
//     }
// })
// async function sendEmail() {
//     const transporter = nodemailer.createTransport({
//         host:'smtp.gmail.com',
//         port:465,
//         secure:true,
//         auth:{
//             user:'********************@gmail.com',
//             pass:'**********',
//         },
//     });
//     const info = await transporter.sendMail({
//         from:`"Percide HONHONOU" <'********************@gmail.com'`,
//         to: '********************@gmail.com',
//         subject: 'Sending E-mail for checkpoint',
//         text: 'I send you this e-mail to notify you that i finish the checkpoint.',
//         html:'<b>I send you this e-mail to notify you that i finish the checkpoint.</b>',
//     });
//     console.log('Got it'+ info.messageId);  
// }
// sendEmail()
//     .catch(e=>console.log(e));

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: '********************@gmail.com',
    pass: '**********',
}
});

// Email content
const mailOptions = {
from: '********************@gmail.com',
to: '********************@gmail.com',
subject: 'Sending E-mail for checkpoint',
text: 'I send you this e-mail to notify you that i finish the checkpoint.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    console.error('Error occurred:', error.message);
    return;
}
console.log('Message sent successfully!');
console.log('Message ID:', info.messageId);
});

