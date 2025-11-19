"use client";

import { LOCATIONS } from "@/lib/constants";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServiceAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Serving the Entire Valley & Beyond
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              From downtown Phoenix to the industrial parks of Tucson, our fleet is ready to deploy.
              We provide rapid response for emergency repairs and free on-site assessments for all commercial properties in Arizona.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {LOCATIONS.map((city) => (
                <Link
                  key={city}
                  href={`/locations/${city.toLowerCase()}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors text-slate-700 hover:text-orange-700"
                >
                  <MapPin size={16} className="text-orange-500" />
                  <span className="font-medium">{city}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 rounded-2xl min-h-[400px] flex items-center justify-center border border-slate-200 relative overflow-hidden"
          >
            {/* Google Map Background */}
            <div className="absolute inset-0 opacity-50 grayscale">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.858347964754!2d-112.0740372847998!3d33.44837758077452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1632759145351!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-slate-100/60 backdrop-blur-[2px]" />

            <div className="text-center p-8 relative z-10">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600 animate-pulse">
                <MapPin size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Arizona Wide Coverage</h3>
              <p className="text-slate-500">Licensed to serve all AZ counties.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
