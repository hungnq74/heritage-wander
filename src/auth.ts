import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db-adapter";
import { authConfig } from "./auth.config";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(client),
  callbacks: {
    ...authConfig.callbacks,
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
