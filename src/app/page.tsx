import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CostEstimator } from "@/components/features/CostEstimator";
import { ServiceAreas } from "@/components/sections/ServiceAreas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <ServiceAreas />
      <CostEstimator />
    </main>
  );
}