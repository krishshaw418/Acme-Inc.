import { v4 as uuidv4 } from "uuid";
import redis from "@/lib/redis";

export default async function shortenLink(long_url: string) {
    const uId = uuidv4();

    try {
        await redis.set(uId, long_url, { EX: 600 });
        const short_url = `${process.env.NEXTAUTH_URL}/r/${uId}`;
        return short_url;
    } catch (error) {
        console.log("Error: ", error);
    }
}