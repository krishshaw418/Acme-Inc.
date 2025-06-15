import {genSaltSync, hashSync, compareSync} from "bcrypt-ts";

export async function Hashing(password: string): Promise<string> {
    const salt = genSaltSync(12);
    const hashedPassword = hashSync(password, salt);
    return hashedPassword;
}

export async function VerifyingHash(hashedPassword: string, password: string): Promise<boolean> {
    const isCorrect = compareSync(password, hashedPassword);
    return isCorrect;
}