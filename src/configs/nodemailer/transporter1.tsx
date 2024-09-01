import nodemailer from "nodemailer";

const transporter1 = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cce0c586409fea",
    pass: "dfca6e77fef25d",
  },
});

export default transporter1;
