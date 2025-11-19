"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Placeholder - In production, use a real image or video */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop")' 
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              #1 Rated Commercial Roofer in Arizona
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Protect Your Business with <span className="text-orange-500">Superior Roofing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
          >
            Specializing in TPO, Foam, and Metal roofing systems for Arizona&apos;s harsh climate. 
            Get a 20-year warranty and 24/7 emergency support from the valley&apos;s most trusted experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="cta" size="lg" className="text-lg h-14 px-8">
              Get Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              View Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              "Licensed & Insured",
              "24/7 Emergency Service",
              "Free Inspections",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <CheckCircle2 className="text-orange-500 w-5 h-5" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
