import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, clientemail, message } = await req.json();

    // console.log(
    //   `elmail is  ${clientemail}   \n message is ${message} \n name is ${name}`
    // );

    // console.log(
    //   `evvirenment details are \n email is ${process.env.MY_EMAIL} pass is ${process.env.MY_EMAIL_PASS}   `
    // );

    // Create transporter (use your email + password/app password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL, // your email
        pass: process.env.MY_EMAIL_PASS, // app password (not real password)
      },
    });

    // Email settings
    await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      text: `You have a new message from ${name} (${clientemail}):\n\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Message</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background: #111; padding: 25px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #22c55e; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">New Inquiry</h1>
          </div>
          
          <div style="background: #fff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <div style="margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <p style="margin: 0 0 5px; color: #888; font-size: 12px; text-transform: uppercase;">Sender Details</p>
              <h2 style="margin: 0 0 5px; font-size: 20px; color: #111;">${name}</h2>
              <a href="mailto:${clientemail}" style="color: #22c55e; text-decoration: none; font-weight: 500;">${clientemail}</a>
            </div>

            <div>
              <p style="margin: 0 0 10px; color: #888; font-size: 12px; text-transform: uppercase;">Message</p>
              <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #22c55e; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap; color: #444;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #aaa;">
              Sent from your Portfolio Website
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
