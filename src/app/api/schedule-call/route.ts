import { NextResponse } from "next/server";

type ScheduleCallBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  format?: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ScheduleCallBody;
    const { fullName, email, phone, format, preferredDate, preferredTime, timezone, message } = body;

    if (!fullName?.trim() || !email?.trim() || !preferredDate || !preferredTime || !timezone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Send email (Resend, SendGrid, etc.) or save to CRM.
    // Example with Resend: await resend.emails.send({ from: '...', to: 'info@petvotech.com', subject: `Call request from ${fullName}`, html: ... });
    const payload = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      format: format?.trim() || null,
      preferredDate,
      preferredTime,
      timezone: timezone?.trim() || null,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("[schedule-call]", payload);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
