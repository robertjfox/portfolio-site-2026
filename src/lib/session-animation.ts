"use client";

type LegacyPerformance = Performance & {
  navigation?: {
    type: number;
  };
};

const LEGACY_RELOAD_TYPE = 1;
const hardReloadAnimationKeys = new Set<string>();

export function isHardReload() {
  try {
    const navigationEntries = performance.getEntriesByType("navigation");
    const navigationReloaded = navigationEntries.some((entry) => {
      return "type" in entry && entry.type === "reload";
    });

    if (navigationReloaded) return true;

    return (
      (performance as LegacyPerformance).navigation?.type ===
      LEGACY_RELOAD_TYPE
    );
  } catch {
    return false;
  }
}

export function hasSessionAnimationRun(key: string) {
  try {
    return window.sessionStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

export function markSessionAnimationRun(key: string) {
  if (isHardReload()) {
    hardReloadAnimationKeys.add(key);
  }

  try {
    window.sessionStorage.setItem(key, "true");
  } catch {
    // Storage availability should not block page rendering.
  }
}

export function shouldRunSessionAnimation(key: string) {
  if (isHardReload()) {
    return !hardReloadAnimationKeys.has(key);
  }

  return !hasSessionAnimationRun(key);
}
