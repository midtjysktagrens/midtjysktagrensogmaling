import { NextRequest, NextResponse } from "next/server";

const ZAPIER_WEBHOOK_URL =
  "https://hooks.zapier.com/hooks/catch/28105965/42xuhjr/";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // If there's a file in base64, keep it as is
    // Otherwise, the file field will be null/undefined
    const webhookPayload = {
      name: body.name,
      address: body.address,
      phone: body.phone,
      email: body.email,
      service: body.service,
      image: body.image || null, // base64 encoded image or null
    };

    const webhookResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    });

    if (webhookResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Error forwarding to webhook:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
