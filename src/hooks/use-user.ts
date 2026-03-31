"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";

const USER_ID_KEY = "heritage-wander:userId";

export function useUser() {
  const { data: session, status } = useSession();
  const [anonymousId, setAnonymousId] = useState<string | null>(null);

  useEffect(() => {
    let id = localStorage.getItem(USER_ID_KEY);
    if (!id) {
      id = uuidv4();
      localStorage.setItem(USER_ID_KEY, id);
    }
    setAnonymousId(id);
  }, []);

  // Priority: 1. Session User ID (logged in), 2. Anonymous ID (guest/fallback)
  return { 
    userId: session?.user?.id || anonymousId,
    anonymousId,
    isLoggedIn: status === "authenticated",
    isLoading: status === "loading",
    user: session?.user
  };
}
