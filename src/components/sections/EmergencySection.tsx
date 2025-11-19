"use client";

import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EmergencySection() {
    return (
        <section className="py-20 bg-red-600 relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <AlertTriangle className="text-white w-6 h-6" />
                            </div>
                            <span className="font-bold tracking-wider uppercase text-sm bg-white/20 px-3 py-1 rounded-full">24/7 Emergency Service</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Roof Leaking? Storm Damage?
                        </h2>
                        <p className="text-red-100 text-lg md:text-xl">
                            Don't let water damage destroy your inventory. Our emergency response team is ready to deploy 24/7 across the entire valley.
                        </p>
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 w-full md:w-auto"
                    >
                        <Button size="lg" variant="secondary" className="h-16 px-8 text-xl font-bold text-red-600 hover:text-red-700 shadow-xl">
                            <Phone className="mr-3 w-6 h-6" />
                            (602) 555-0123
                        </Button>
                        <p className="text-white/80 text-center text-sm font-medium">
                            Average response time: &lt; 2 hours
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
