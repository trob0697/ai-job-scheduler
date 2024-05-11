import Hero from "./_sections/hero";
import AdditionalInfo from "./_sections/additionalInfo";
import Pricing from "./_sections/pricing";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-36">
      <Hero />
      <AdditionalInfo />
      <Pricing />
    </div>
  );
}
