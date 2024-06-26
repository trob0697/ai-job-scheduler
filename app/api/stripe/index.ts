import { redirect } from "next/navigation";
import Stripe from "stripe";

import * as Models from "../../_helpers/models";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function getProducts() {
  const products = await (await stripe.products.list()).data;
  const prices = await (await stripe.prices.list()).data;
  const productsAndPrices = products.map((product) => {
    const price = prices.find((item) => item.id === product.default_price);
    return { ...product, ...price };
  });
  return productsAndPrices.reverse() as Models.ProductInfo[];
}

export async function makePayment(priceId: string) {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: process.env.BASE_URL,
    cancel_url: process.env.BASE_URL,
  });
  redirect(session.url || process.env.__NEXT_PRIVATE_ORIGIN!);
}
