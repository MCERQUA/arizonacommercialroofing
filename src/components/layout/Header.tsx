"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION, COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Always show background on non-home pages, otherwise respect scroll
      if (pathname !== "/") {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
            <div className="bg-orange-600 p-2 rounded-lg text-white">
                <HardHat size={24} />
            </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
            )}
          >
            AZ Commercial Roofing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500",
                pathname === item.href
                  ? "text-orange-500"
                  : isScrolled
                  ? "text-slate-700"
                  : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
            <div className={cn("hidden md:flex items-center gap-2 font-semibold", isScrolled ? "text-slate-900" : "text-white")}>
                <Phone size={18} className="text-orange-500"/>
                {COMPANY_INFO.phone}
            </div>
          <Button variant="cta" size="sm" className="hidden md:flex">
            Get Free Estimate
          </Button>
          
          <button
            className="md:hidden z-50 p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu className={isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl border-b border-slate-100 p-4 pt-20 md:hidden flex flex-col gap-4"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" className="w-full mt-4">
              Call Now: {COMPANY_INFO.phone}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
