"use client";

import { Award, Shield, Clock, ThumbsUp } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
            <div className="flex flex-col items-center gap-2">
                <Award className="w-10 h-10 text-orange-500" />
                <span className="font-bold text-slate-200">ROC #123456</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Shield className="w-10 h-10 text-orange-500" />
                <span className="font-bold text-slate-200">Bonded & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Clock className="w-10 h-10 text-orange-500" />
                <span className="font-bold text-slate-200">20+ Years Exp.</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <ThumbsUp className="w-10 h-10 text-orange-500" />
                <span className="font-bold text-slate-200">A+ BBB Rating</span>
            </div>
        </div>
      </div>
    </section>
  );
}
