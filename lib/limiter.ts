import { RateLimiterMemory } from "rate-limiter-flexible";

const options = {
    points: 4,
    duration: 3600,
}

const rateLimiter = new RateLimiterMemory(options);

export default rateLimiter;