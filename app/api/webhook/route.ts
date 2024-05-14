import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const signature = req.headers.get("Stripe-Signature");
  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    return NextResponse.json({ status: "Success", event: event.type });
  } catch (err) {
    return NextResponse.json({ status: "Failed", err });
  }
}
