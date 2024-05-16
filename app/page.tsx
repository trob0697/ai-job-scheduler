import Hero from "./_sections/hero";
import AdditionalInfo from "./_sections/additionalInfo";
import Products from "./_sections/products";
import FAQ from "./_sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-36">
      <Hero />
      <AdditionalInfo />
      <Products />
      <FAQ />
    </div>
  );
}
