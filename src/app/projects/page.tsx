import { PageHero } from "@/components/ui/PageHero";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero 
        title="Our Projects" 
        subtitle="A Showcase of Excellence Across Arizona"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                   <div className="h-64 bg-slate-200 relative">
                      {/* Placeholder for Project Image */}
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                        Project Image #{item}
                      </div>
                   </div>
                   <div className="p-6">
                      <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wider">Retail Complex</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Scottsdale Plaza Renovation</h3>
                      <p className="text-slate-600 text-sm mb-4">
                        Complete removal of existing built-up roof and installation of new 60-mil TPO system with enhanced insulation.
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                         <span>Phoenix, AZ</span>
                         <span>55,000 sq. ft.</span>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
