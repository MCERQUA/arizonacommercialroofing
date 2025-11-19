import { PageHero } from "@/components/ui/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        title="About Us"
        subtitle="Arizona&apos;s Premier Commercial Roofing Specialists Since 2005"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Building Trust Through Excellence</h2>
              <p className="text-slate-600 leading-relaxed">
                For over nearly two decades, Arizona Commercial Roofing has been at the forefront of industrial roofing solutions in the Valley. We understand that your roof is a critical asset that protects your business, inventory, and operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our team of certified experts specializes in the unique challenges posed by the Arizona climate—from intense UV radiation to monsoon storms. We don&apos;t just install roofs; we engineer long-term protection systems.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="text-3xl font-bold text-orange-600 mb-1">18+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="text-3xl font-bold text-orange-600 mb-1">2.5M+</div>
                  <div className="text-sm text-slate-600">Sq Ft Installed</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
              {/* Placeholder for team/office image */}
              <div className="absolute inset-0 bg-slate-800/10 flex items-center justify-center text-slate-500">
                [Team Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
    </main>
  );
}
