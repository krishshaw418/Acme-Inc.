import {genSaltSync, hashSync, compareSync} from "bcrypt-ts";
import GithubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth";
import * as crypto from "crypto";

// For hashing password before storing into db
export async function Hashing(password: string): Promise<string> {
    const salt = genSaltSync(12);
    const hashedPassword = hashSync(password, salt);
    return hashedPassword;
}

// For verifying password before login
export async function VerifyingHash(hashedPassword: string, password: string): Promise<boolean> {
    const isCorrect = compareSync(password, hashedPassword);
    return isCorrect;
}

export function generatePasswordResetToken(length = 64): string{
    return crypto.randomBytes(length).toString('hex');
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