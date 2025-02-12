// src/utils/rng.ts
export function generateCrashPoint(): number {
    const maxMultiplier = 100; // Maximum multiplier
    const crashPoint = Math.random() * maxMultiplier; // Random crash point
    return parseFloat(crashPoint.toFixed(2)); // Round to 2 decimal places
  }