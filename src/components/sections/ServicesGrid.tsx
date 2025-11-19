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
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-lg text-slate-600">
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-100">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.href}>
                      <Button variant="link" className="p-0 h-auto text-orange-600 font-semibold group">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
