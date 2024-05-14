import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const req = await request.json();
  const priceId = req.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: process.env.BASE_URL,
    cancel_url: process.env.BASE_URL,
    automatic_tax: { enabled: true },
  });
  return NextResponse.json(session.url);
}
