import {genSaltSync, hashSync, compareSync} from "bcrypt-ts";
import GithubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth";
import * as crypto from "crypto";
import dns from "dns/promises";

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

// For generating password reset token
export function generatePasswordResetToken(length = 64): string{
    return crypto.randomBytes(length).toString('hex');
}

// For setting up OAuth providers
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

// For validating email address
export async function validateEmail(email: string) {
  const domain = email.split('@')[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    if(!mxRecords[0].exchange) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("Error: ", error);
    return false;
  }
}