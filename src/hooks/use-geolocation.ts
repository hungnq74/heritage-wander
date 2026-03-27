"use client";

import { useState, useEffect, useCallback } from "react";

export type LocationPermission = "unknown" | "granted" | "denied" | "skipped";

const PERMISSION_KEY = "heritage-wander:location-permission";
const POSITION_KEY = "heritage-wander:last-position";

export interface GeolocationState {
  position: [number, number] | null; // [lng, lat]
  permission: LocationPermission;
  requestLocation: () => void;
  skipLocation: () => void;
  isLoading: boolean;
  error: string | null;
}

export function useGeolocation(): GeolocationState {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [permission, setPermission] = useState<LocationPermission>("unknown");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // On mount: restore from localStorage
  useEffect(() => {
    const storedPermission = localStorage.getItem(PERMISSION_KEY) as LocationPermission | null;
    if (storedPermission) setPermission(storedPermission);

    const storedPos = localStorage.getItem(POSITION_KEY);
    if (storedPos) {
      try {
        setPosition(JSON.parse(storedPos) as [number, number]);
      } catch {}
    }

    // If already granted, start watching
    if (storedPermission === "granted") {
      startWatching();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startWatching = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Thiết bị không hỗ trợ định vị GPS.");
      return;
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.longitude, pos.coords.latitude];
        setPosition(coords);
        setPermission("granted");
        setIsLoading(false);
        setError(null);
        localStorage.setItem(PERMISSION_KEY, "granted");
        localStorage.setItem(POSITION_KEY, JSON.stringify(coords));
      },
      (err) => {
        setIsLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setPermission("denied");
          localStorage.setItem(PERMISSION_KEY, "denied");
          setError("Bạn đã từ chối quyền truy cập vị trí.");
        } else {
          setError("Không thể xác định vị trí của bạn. Vui lòng thử lại.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
    );
  }, []);

  const requestLocation = useCallback(() => {
    startWatching();
  }, [startWatching]);

  const skipLocation = useCallback(() => {
    setPermission("skipped");
    localStorage.setItem(PERMISSION_KEY, "skipped");
  }, []);

  return { position, permission, requestLocation, skipLocation, isLoading, error };
}
