import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

//console.log("API Key MailerSend:" , process.env.MAILERSEND_API_KEY || 'No API Key found')

// Compila un template Handlebars
const compileTemplate = (templateName: string, data: any): string => {
  const filePath = path.join( 
    __dirname,
    '..',
    'templates',
    'emails',
    `${templateName}.handlebars`
  );//armo una ruta absoluta al template 
  const source = fs.readFileSync(filePath, 'utf-8'); // leo el archivo  
  const template = handlebars.compile(source); //aca lo compilo 
  return template(data);
};

//el async de la funcion siguiente no es necesario pero ahora en la etapa de desarrollo esta bueno tenerlo 
export const sendWelcomeEmail = async (to: string, name: string) => {
  const html = compileTemplate('welcome', { name, email: to });

  const sentFrom = new Sender(process.env.MAIL_FROM || '', 'Backend Demo');
  const recipients = [new Recipient(to, name)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject('Bienvenido 🚀')
    .setHtml(html);

  await mailerSend.email.send(emailParams);
};