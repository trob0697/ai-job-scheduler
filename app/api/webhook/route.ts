import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get("Stripe-Signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: any) {
    return NextResponse.json(err.message, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      try {
        await handleCheckoutSessionCompleted(event);
      } catch (err: any) {
        return NextResponse.json(err.message, { status: 500 });
      }
      break;
    default:
      return NextResponse.json(`Unhandled event ${event.type}`, {
        status: 501,
      });
  }

  return NextResponse.json({}, { status: 200 });
}

const handleCheckoutSessionCompleted = async (
  event: Stripe.CheckoutSessionCompletedEvent,
) => {
  // Handle stuff here
};
