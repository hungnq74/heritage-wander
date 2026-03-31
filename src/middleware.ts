import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// We initialize a separate NextAuth environment for Middleware.
// This specifically uses the edge-compatible configuration.
// By doing this, we completely avoid importing "auth.ts" which contains
// the MongoDB driver and other Node-only modules.
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Define protected routes
  const isProtectedRoute = nextUrl.pathname.startsWith("/create");

  if (isProtectedRoute && !isLoggedIn) {
    // Standard Auth.js v5 behavior: redirect to /login
    return Response.redirect(new URL("/login", nextUrl));
  }
});

export const config = {
  // Pattern to match all routes except static assets, API, and favicons
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
