import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body.name ?? `${body.firstName ?? ""} ${body.lastName ?? ""}`.trim();
    const email = body.email;
    const phone = body.phone ?? "";
    const message = body.message;

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    if (!emailRe.test(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "dinhquangchung.k9sh@gmail.com";

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP config missing");
      return NextResponse.json(
        { message: "SMTP configuration missing on server. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS." },
        { status: 500 }
      );
    }

    const secure = process.env.SMTP_SECURE === "true"; // true for port 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailHtml = `
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: toEmail,
      subject: "New contact message from website",
      text: `${message}\n\nFrom: ${name} <${email}>${phone ? `\nPhone: ${phone}` : ""}`,
      html: mailHtml,
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
