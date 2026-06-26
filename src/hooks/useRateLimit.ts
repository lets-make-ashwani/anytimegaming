"use client";

import { useState, useCallback, useRef } from "react";
import { logger } from "@/lib/logger";

interface RateLimitConfig {
  limit: number;       // Max operations
  windowMs: number;    // In this timeframe (milliseconds)
}

/**
 * Hook to enforce client-side rate limiting on interactive actions (e.g. Booking requests).
 */
export function useRateLimit(key: string, config: RateLimitConfig = { limit: 3, windowMs: 15000 }) {
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);
  const timestampsRef = useRef<number[]>([]);

  const checkRateLimit = useCallback((): boolean => {
    const now = Date.now();
    
    // Filter timestamps within current window
    timestampsRef.current = timestampsRef.current.filter(
      (time) => now - time < config.windowMs
    );

    if (timestampsRef.current.length >= config.limit) {
      setIsLimitExceeded(true);
      logger.warn(`Rate limit exceeded for action: ${key}`, {
        timestampsCount: timestampsRef.current.length,
        limit: config.limit,
      });
      return false; // Action blocked
    }

    // Add current timestamp
    timestampsRef.current.push(now);
    setIsLimitExceeded(false);
    return true; // Action allowed
  }, [key, config.limit, config.windowMs]);

  const resetRateLimit = useCallback(() => {
    timestampsRef.current = [];
    setIsLimitExceeded(false);
  }, []);

  return { checkRateLimit, isLimitExceeded, resetRateLimit };
}
