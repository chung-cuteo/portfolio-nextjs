import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Simple in-memory rate-limit (per IP, per minute)
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;
const ipHits = new Map();

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const now = Date.now();
    const hits = ipHits.get(ip) || [];
    // Remove expired hits
    const recentHits = hits.filter(ts => now - ts < WINDOW_MS);
    if (recentHits.length >= RATE_LIMIT) {
      return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
    }
    recentHits.push(now);
    ipHits.set(ip, recentHits);

    const body = await req.json();
    const { name, email, phone = "", message } = body;

    const safeName = (name ?? `${body.firstName ?? ""} ${body.lastName ?? ""}`).trim();
    const safeEmail = (email ?? "").trim();
    const safePhone = phone.trim();
    const safeMessage = (message ?? "").trim();

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    if (!emailRe.test(safeEmail)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    if ([safeName, safeEmail, safePhone].some(v => /[\r\n]/.test(v))) {
      return NextResponse.json({ message: "Invalid characters in input" }, { status: 400 });
    }
    if (safeName.length > 200 || safeEmail.length > 200 || safePhone.length > 50 || safeMessage.length > 5000) {
      return NextResponse.json({ message: "Field too long" }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "dinhquangchung.k9sh@gmail.com";
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP config missing");
      return NextResponse.json(
        { message: "SMTP configuration missing on server. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS." },
        { status: 500 }
      );
    }

    const secure = process.env.SMTP_SECURE === "true";
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Modern HTML email template
    const mailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#2d3748;margin-bottom:8px;">📬 New Contact Message</h2>
        <div style="background:#fff;padding:16px;border-radius:8px;box-shadow:0 2px 8px #0001;">
          <p style="font-size:1.1em;color:#333;"><strong>Message:</strong></p>
          <p style="white-space:pre-line;color:#444;">${escapeHtml(safeMessage)}</p>
          <hr style="margin:18px 0;border:none;border-top:1px solid #eee;">
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(safeEmail)}">${escapeHtml(safeEmail)}</a></p>
          ${safePhone ? `<p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>` : ""}
        </div>
        <p style="font-size:0.9em;color:#888;margin-top:24px;">This message was sent from your portfolio website.</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: `"${escapeHtml(safeName)}" <${safeEmail}>`,
      to: toEmail,
      subject: "New contact message from portfolio website",
      text: `${safeMessage}\n\nName: ${safeName}\nEmail: ${safeEmail}${safePhone ? `\nPhone: ${safePhone}` : ""}`,
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
