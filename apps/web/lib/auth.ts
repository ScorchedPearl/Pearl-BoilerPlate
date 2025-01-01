import CredentialsProvider from "next-auth/providers/credentials";
import nodemailer from "nodemailer";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth }: {
  handlers: any,
  signIn: any,
  signOut: any,
  auth: any
} = NextAuth({
  providers:[
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "Vish@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        const email=credentials.email;
        const password=credentials.password;
        const sendOTPEmail = async (email: string, otp: string) => {
         const transporter = nodemailer.createTransport({
           service: "gmail",
           secure: true,
           port: 465,
           auth: {
             user: process.env.EMAIL,
             pass: process.env.EMAIL_PASSWORD,
           },
         });
       
         const mailOptions = {
           from: "No Reply <noreply@gmail.com>",
           to: email,
           subject: "Email Verification OTP",
           text: `Your OTP for email verification is: ${otp}. It is valid for 10 minutes.`,
         };
       
         try {
           await transporter.sendMail(mailOptions);
           console.log("OTP sent successfully");
         } catch (error) {
           console.error("Error sending email:", error);
           throw new Error("Email sending failed");
         }
       };
        if (user) {
  
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
});

 
 
