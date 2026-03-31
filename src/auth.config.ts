import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

// This configuration object is edge-compatible.
// It should NEVER import the MongoDB Adapter or the MongoClient.
export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCreate = nextUrl.pathname.startsWith("/create");
      
      if (isOnCreate) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
