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

function formatPrice(cents: number) {
  return "$" + (cents / 100).toFixed(2);
}

export default async function Products() {
  const products = await stripe.getProducts();

  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <Card
            className="flex flex-col text-center justify-between"
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
              <Button>{formatPrice(product.unit_amount)}</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
