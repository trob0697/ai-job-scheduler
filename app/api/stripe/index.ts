import { redirect } from "next/navigation";
import Stripe from "stripe";

// import { ratelimit } from "../ratelimit";
import { ProductInfo } from "../../_helpers/models";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function getProducts() {
  // const { success } = await ratelimit.limit(identifier);
  // if (!success) throw new Error("Ratelimited");

  const products = await (await stripe.products.list()).data;
  const prices = await (await stripe.prices.list()).data;
  const productsAndPrices = products.map((product) => {
    const price = prices.find((item) => item.id === product.default_price);
    return { ...product, ...price };
  });
  return productsAndPrices.reverse() as ProductInfo[];
}

export async function makePayment(priceId: string) {
  // const { success } = await ratelimit.limit(identifier);
  // if (!success) throw new Error("Ratelimited");

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: process.env.__NEXT_PRIVATE_ORIGIN,
    cancel_url: process.env.__NEXT_PRIVATE_ORIGIN,
  });
  redirect(session.url || process.env.__NEXT_PRIVATE_ORIGIN!);
}
