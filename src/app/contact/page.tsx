import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero 
        title="Contact Us" 
        subtitle="Get a Free Estimate or Emergency Service Today"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Needed</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select a Service...</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Full Replacement</option>
                    <option value="maintenance">Maintenance/Inspection</option>
                    <option value="coating">Roof Coating</option>
                    <option value="new">New Construction</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your roof type, approximate size, and any issues..."></textarea>
                </div>

                <Button className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700 text-white">
                  Request Free Estimate
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">
                  Ready to get started? Our team is standing by to help with your commercial roofing needs. We offer 24/7 emergency service for urgent leaks and repairs.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600 mb-1">24/7 Emergency Support</p>
                    <a href="tel:6025550123" className="text-lg font-bold text-orange-600 hover:underline">
                      (602) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600 mb-1">For general inquiries</p>
                    <a href="mailto:contact@example.com" className="text-lg font-medium text-slate-900 hover:text-orange-600">
                      contact@arizonacommercialroofing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Office</h3>
                    <p className="text-slate-600">
                      123 Business Park Dr<br />
                      Phoenix, AZ 85001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Hours</h3>
                    <p className="text-slate-600">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat: 8:00 AM - 12:00 PM<br />
                      Sun: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
