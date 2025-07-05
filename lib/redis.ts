import { createClient } from 'redis';

const redisUrl = process.env.REDIS_URL;
if(!redisUrl) throw new Error("❌ REDIS_URL is not set!");

declare global {
    var redisClient : ReturnType<typeof createClient> | undefined;
}

const client = 
    global.redisClient || 
    createClient({
        url: redisUrl,
        socket: {
            reconnectStrategy: () => 1000,
        },
    });

if(!global.redisClient) {
    client.connect().catch(console.error);
    if (process.env.NODE_ENV !== 'production'){
        global.redisClient = client;
    }
}

export default client;