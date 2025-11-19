"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Sun, Droplets, Hammer, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const icons = {
  tpo: Sun, // Heat reflection
  foam: Droplets, // Waterproofing
  metal: ShieldCheck, // Durability
  coating: Hammer, // Restoration
  maintenance: ShieldCheck,
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-lg text-slate-400">
            We deliver industry-leading roofing systems designed to withstand Arizona&apos;s extreme heat and monsoons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons] || ShieldCheck;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block h-full group">
                  <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden border border-orange-500/30 hover:border-orange-500 transition-colors duration-300 shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    {/* Background Image Placeholder - In production, use real images */}
                    <div className="absolute inset-0 bg-slate-900">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
                      {/* Abstract pattern or image would go here */}
                      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                      <div className="w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center mb-4 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                      <p className="text-slate-300 mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
