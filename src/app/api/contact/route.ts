import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, serviceInterest, budget, timeline, message, source } = body;

    await resend.emails.send({
      from: "Petvot Tech Contact <info@petvotech.com>",
      to: "info@petvotech.com",
      replyTo: email,
      subject: `New Inquiry from ${fullName} — ${serviceInterest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
          <tr><td><strong>Service Interest</strong></td><td>${serviceInterest}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget || "—"}</td></tr>
          <tr><td><strong>Timeline</strong></td><td>${timeline}</td></tr>
          <tr><td><strong>How they heard</strong></td><td>${source || "—"}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
