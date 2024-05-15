import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as stripe from "../api/stripe";

export default async function Products() {
  const products = await stripe.getProducts();

  const formatPrice = (cents: number) => {
    return "$" + (cents / 100).toFixed(2);
  };

  const handlePayment = async (data: FormData) => {
    "use server";
    const priceId = data.get("priceId") as string;
    await stripe.makePayment(priceId);
  };

  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <Card
            className="flex flex-col justify-between text-center"
            key={product.default_price}
          >
            <div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {product.marketing_features.map((feature, index) => {
                    return (
                      <li key={`${product.default_price}-feature-${index}`}>
                        {feature.name}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </div>
            <CardFooter className="justify-center">
              <form action={handlePayment}>
                <input
                  name="priceId"
                  className="hidden"
                  defaultValue={product.default_price}
                />
                <Button type="submit">
                  {formatPrice(product.unit_amount)}
                </Button>
              </form>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
