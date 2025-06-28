const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "chhaya18180@gmail.com",
    pass: "atrb sfaw immu xvhn",
  },
});
async function main(data) {
  const info = await transporter.sendMail({
    from: '"Chhaya" <bhartishadow@gmail.com>', 
    to: data.rcvr, 
    subject:data.sub,
    html:data.body 
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports.main=main

// main().catch(console.error);
