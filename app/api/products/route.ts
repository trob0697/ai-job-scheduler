import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const products = await (await stripe.products.list()).data;
  const prices = await (await stripe.prices.list()).data;
  const productsAndPrices = products.map((product) => {
    const price = prices.find((item) => item.id === product.default_price);
    return { ...product, ...price };
  });
  return NextResponse.json(productsAndPrices.reverse());
}
