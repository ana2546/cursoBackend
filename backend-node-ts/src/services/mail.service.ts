import nodemailer from 'nodemailer';
import { engine } from 'express-handlebars';

export const sendWelcomeEmail = async (to: string, name: string) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: 'Backend Demo <no-reply@test.com>',
    to,
    subject: 'Bienvenido',
    html: `<h1>Hola ${name}</h1><p>Bienvenido a la app 🚀</p>`,
  });

  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
};