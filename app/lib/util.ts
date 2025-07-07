import {genSaltSync, hashSync, compareSync} from "bcrypt-ts";
import GithubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth";

export async function Hashing(password: string): Promise<string> {
    const salt = genSaltSync(12);
    const hashedPassword = hashSync(password, salt);
    return hashedPassword;
}

export async function VerifyingHash(hashedPassword: string, password: string): Promise<boolean> {
    const isCorrect = compareSync(password, hashedPassword);
    return isCorrect;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
}