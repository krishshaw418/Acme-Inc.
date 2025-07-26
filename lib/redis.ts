import { createClient } from 'redis';

declare global {
    // eslint-disable-next-line no-var
    var redisClient : ReturnType<typeof createClient> | undefined;
}

function getRedisClient() {
    const redisUrl = process.env.REDIS_URL;
    if(!redisUrl) throw new Error("❌ REDIS_URL is not set!");

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

    return client;
}

export default getRedisClient;