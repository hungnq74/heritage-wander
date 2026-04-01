"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, X } from "lucide-react";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useTranslations } from "next-intl";

interface GeolocationGateProps {
  children: (position: [number, number] | null) => React.ReactNode;
}

export function GeolocationGate({ children }: GeolocationGateProps) {
  const { position, permission, requestLocation, skipLocation, isLoading, error } =
    useGeolocation();
  const t = useTranslations("geolocationGate");

  const showOnboarding = permission === "unknown";
  const showDeniedBanner = permission === "denied";

  return (
    <>
      {/* Map always renders behind */}
      {children(position)}

      {/* Onboarding overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-end justify-center md:items-center"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative z-10 w-full max-w-md mx-4 mb-4 md:mb-0 bg-background rounded-3xl p-7 shadow-2xl border border-border/30"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Navigation className="size-9 text-primary" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Text */}
              <h2 className="text-xl font-black text-center mb-2">
                {t("title")}
              </h2>
              <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6">
                {t("subtitle")}
              </p>

              {error && (
                <p className="text-xs text-red-500 text-center mb-4 bg-red-50 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              {/* CTAs */}
              <button
                onClick={requestLocation}
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm mb-3 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>{t("locating")}</span>
                ) : (
                  <>
                    <MapPin className="size-4" />
                    <span>{t("allowLocation")}</span>
                  </>
                )}
              </button>

              <button
                onClick={skipLocation}
                className="w-full py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("skipLocation")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Denied banner */}
      <AnimatePresence>
        {showDeniedBanner && (
          <motion.div
            key="denied"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-16 left-0 right-0 z-30 mx-4 mt-2"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-md">
              <MapPin className="size-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800 flex-1 leading-relaxed">
                {t("denied")}
              </p>
              <button onClick={skipLocation} className="text-amber-600 hover:text-amber-800">
                <X className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
