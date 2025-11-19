"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calculator, Check } from "lucide-react";

export function CostEstimator() {
  const [step, setStep] = React.useState(1);
  const [type, setType] = React.useState("");
  const [sqft, setSqft] = React.useState(5000);

  const handleTypeSelect = (value: string) => {
    setType(value);
    setStep(2);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get an Instant Commercial Roofing Estimate
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Planning your budget? Use our interactive calculator to get a ballpark figure for your project. 
              Factors like insulation thickness, tear-off requirements, and roof access will affect the final price.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Transparent pricing models",
                "No hidden fees or surcharges",
                "Detailed breakdown of materials and labor",
                "Financing options available"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator Component */}
          <Card className="border-0 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-slate-100">
              <div 
                className="h-full bg-orange-500 transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="text-orange-500" />
                Project Estimator
              </CardTitle>
              <CardDescription>Step {step} of 3</CardDescription>
            </CardHeader>

            <CardContent className="pt-6 min-h-[300px] flex flex-col justify-center">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium mb-4">What type of roof do you need?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {["TPO (Single Ply)", "Spray Polyurethane Foam", "Metal Roofing", "Roof Coating / Restoration"].map((t) => (
                      <button
                        key={t}
                        onClick={() => handleTypeSelect(t)}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-orange-700">{t}</span>
                        <div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-orange-500" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-medium">Approximate Square Footage</h3>
                  <div className="space-y-8">
                    <div className="flex justify-between items-baseline">
                        <span className="text-3xl font-bold text-orange-600">{sqft.toLocaleString()} <span className="text-sm font-normal text-slate-500">sq. ft.</span></span>
                    </div>
                    <input 
                        type="range" 
                        min="1000" 
                        max="50000" 
                        step="100"
                        value={sqft}
                        onChange={(e) => setSqft(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                    />
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>1,000</span>
                        <span>50,000+</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                    <Button onClick={() => setStep(3)} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">Next</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center py-4"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Estimate Ready!</h3>
                  <p className="text-slate-600 mb-6">
                    Based on <strong>{sqft.toLocaleString()} sq. ft.</strong> of <strong>{type}</strong>, we have prepared a preliminary estimate range.
                  </p>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                    <p className="text-sm text-slate-500 mb-1">Estimated Range</p>
                    <p className="text-3xl font-bold text-slate-900">
                        ${(sqft * 4.5).toLocaleString()} - ${(sqft * 7.5).toLocaleString()}*
                    </p>
                    <p className="text-xs text-slate-400 mt-2">*Subject to site inspection.</p>
                  </div>

                  <Button variant="cta" className="w-full">Schedule Free Inspection</Button>
                  <Button variant="ghost" onClick={() => setStep(1)} className="w-full mt-2">Start Over</Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
