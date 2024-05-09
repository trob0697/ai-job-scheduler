import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="nav-section">
      <div className="flex-col space-y-4">
        <h1>Bold & Powerful Heading</h1>
        <div>
          One to two sentences explaining the product to the target audience
        </div>
        <Button>Button</Button>
      </div>
      <Image
        src={"/random.jpg"}
        width={600}
        height={300}
        alt="random picture"
      />
    </div>
  );
}
