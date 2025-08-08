import { RateLimiterMemory } from "rate-limiter-flexible";

const options = {
    points: 4,
    duration: 60,
}

const rateLimiter = new RateLimiterMemory(options);

export default rateLimiter;