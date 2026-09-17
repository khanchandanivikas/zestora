import { BrandStory } from "@/components/Modules/BrandStory";
import { Campaign } from "@/components/Modules/Campaign.tsx";
import { FeaturedPick } from "@/components/Modules/FeaturedPick";
import { Hero } from "@/components/Modules/Hero";
import { Ingredients } from "@/components/Modules/Ingredients";
import { ProductSlider } from "@/components/Modules/ProductSlider";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Ingredients />
      <ProductSlider />
      <FeaturedPick />
      <BrandStory />
      <Campaign />
    </main>
  );
}
