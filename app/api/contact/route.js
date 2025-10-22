import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    // Tạo transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Gửi mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "New Contact Form Message",
      text: message,
      html: `<p>${message}</p><p>From: ${name} - ${email}</p>`,
    });

    return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
