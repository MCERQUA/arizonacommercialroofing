import Link from "next/link";
import { HardHat, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { SERVICES, LOCATIONS, COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
                <div className="bg-orange-600 p-2 rounded-lg">
                    <HardHat size={24} />
                </div>
              <span className="text-xl font-bold">AZ Commercial Roofing</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Arizona&apos;s premier commercial roofing partner. Specializing in TPO, Foam, and Metal roofing systems for businesses across the valley. Licensed, Bonded, and Insured.
            </p>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></Link>
                <Link href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></Link>
                <Link href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-sm hover:text-orange-500 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {LOCATIONS.slice(0, 10).map((city) => (
                <li key={city}>
                  <Link href={`/locations/${city.toLowerCase()}`} className="text-sm hover:text-orange-500 transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0" size={18} />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-white">{COMPANY_INFO.email}</a>
              </li>
              <li className="pt-4 text-xs text-slate-500">
                {COMPANY_INFO.license}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-slate-500 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
