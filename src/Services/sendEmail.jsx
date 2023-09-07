import { Resend } from "resend";

console.log(import.meta.env.VITE_RESEND_API_KEY);
// console.log(process.env.VITE_RESEND_API_KEY);
// const resend = new Resend('re_2Bx1x5mR_8VFXzeWU5h6HxnRV7RKfL65W');
// const resend = new Resend('re_2Bx1x5mR_8VFXzeWU5h6HxnRV7RKfL65W');
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// const resend = new Resend('re_123456789');


// export const sendEmail = async () => {
//   try{
//     const response = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'geovannyvalladares94@gmail.com',
//       subject: 'Hello World',
//       html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//     });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }

//   // await resend.emails.send({
//   //   from: 'onboarding@resend.dev',
//   //   to: 'geovannyvalladares94@gmail.com',
//   //   subject: 'Hello World',
//   //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//   // });
// }

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['geovannyvalladares94@gmail.com'],
      subject: 'Hello world',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });

    return console.log(data);
  } catch (error) {
    return console.log(error);
  }
}