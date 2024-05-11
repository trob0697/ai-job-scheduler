import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PriceCard {
  title: string;
  subTitle: string;
  cost: string;
  description: string[];
}

const priceCards: PriceCard[] = [
  {
    title: "Free Trial",
    subTitle: "1 Week",
    cost: "Free",
    description: ["Perk 1", "Perk 2"],
  },
  {
    title: "Starter",
    subTitle: "Monthly",
    cost: "$10/mo",
    description: ["Perk 1", "Perk 2", "Perk 3"],
  },
  {
    title: "Premium",
    subTitle: "Life Time",
    cost: "$100",
    description: ["Perk 1", "Perk 2", "Perk 3", "Perk 4", "Perk 5"],
  },
];

export default function Pricing() {
  return (
    <div className="cards">
      {priceCards.map((item) => {
        return (
          <Card
            className="flex flex-col text-center justify-between"
            key={item.title.toLowerCase() + "-card"}
          >
            <div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.subTitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {item.description.map((subItem) => {
                    return <li key={item.title + subItem}>{subItem}</li>;
                  })}
                </ul>
              </CardContent>
            </div>
            <CardFooter className="justify-center">
              <Button>{item.cost}</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
