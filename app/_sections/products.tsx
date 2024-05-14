import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProductAndPrice } from "../_models";

export default async function Products() {
  const products: ProductAndPrice[] = await (
    await fetch(`${process.env.BASE_URL}/api/products`)
  ).json();

  // const handlePayment = async (product: ProductAndPrice) => {
  //   const response = await fetch(`${process.env.BASE_URL}/api/payment`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       priceId: product.default_price,
  //     }),
  //   });
  //   const checkoutUrl: string = await response.json();
  //   window.location.assign(checkoutUrl);
  // };

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
              <Button>{`$${(product.unit_amount / 100).toFixed(2)}`}</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
