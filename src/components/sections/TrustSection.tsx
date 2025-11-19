"use client";

import { Award, Shield, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
          {[
            { icon: Award, text: "ROC #123456", delay: 0 },
            { icon: Shield, text: "Bonded & Insured", delay: 0.1 },
            { icon: Clock, text: "20+ Years Exp.", delay: 0.2 },
            { icon: ThumbsUp, text: "A+ BBB Rating", delay: 0.3 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <item.icon className="w-10 h-10 text-orange-500" />
              <span className="font-bold text-slate-200">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
