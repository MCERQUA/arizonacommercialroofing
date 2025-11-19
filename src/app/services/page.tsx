import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CostEstimator } from "@/components/features/CostEstimator";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive Roofing Solutions for Industrial & Commercial Properties"
      />
      
      <div className="py-12">
         <ServicesGrid />
      </div>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
           <h2 className="text-3xl font-bold mb-6">Not Sure What You Need?</h2>
           <p className="text-slate-300 mb-8 text-lg">
             Our experts can conduct a comprehensive roof audit to determine the best solution for your building&apos;s specific needs and budget.
           </p>
           <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
             Schedule a Free Roof Audit
           </button>
        </div>
      </section>

      <CostEstimator />
    </main>
  );
}
