/**
 * Cinematic auto-scroll sequence.
 *
 * When the "Start Celebration" button is tapped, the page walks itself
 * through every visible section like a keynote presentation.
 * Nothing here needs editing — section order comes from the config.
 */

import { siteConfig } from "@/config/site";

export const CELEBRATE_EVENT = "bd:celebrate";
export const OPEN_LETTER_EVENT = "bd:open-letter";
export const REVEAL_GIFTS_EVENT = "bd:reveal-gifts";
export const BLOW_CANDLES_EVENT = "bd:blow-candles";
export const FIREWORKS_EVENT = "bd:fireworks";

let running = false;
let cancelled = false;

export function isSequenceRunning() {
  return running;
}

export function emit(name: string) {
  window.dispatchEvent(new Event(name));
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

/** Steps: [section id, how long to linger, optional action to fire] */
function buildSteps(): { id: string; hold: number; action?: string }[] {
  const s = siteConfig.sections;
  const steps: { id: string; hold: number; action?: string }[] = [];
  if (s.countdown) steps.push({ id: "countdown", hold: 3500 });
  if (s.cake) steps.push({ id: "cake", hold: 5000, action: BLOW_CANDLES_EVENT });
  if (s.timeline) steps.push({ id: "timeline", hold: 5000 });
  if (s.gifts) steps.push({ id: "gifts", hold: 4500, action: REVEAL_GIFTS_EVENT });
  if (s.letter) steps.push({ id: "letter", hold: 6000, action: OPEN_LETTER_EVENT });
  if (s.gallery) steps.push({ id: "gallery", hold: 5000 });
  if (s.video) steps.push({ id: "video", hold: 5000 });
  if (s.wishes) steps.push({ id: "wishes", hold: 7000 });
  if (s.finale) steps.push({ id: "finale", hold: 4000, action: FIREWORKS_EVENT });
  steps.push({ id: "finale", hold: 1500 });
  return steps;
}

export async function runCelebration() {
  if (running) return;
  running = true;
  cancelled = false;

  emit(CELEBRATE_EVENT);

  // A deliberate manual scroll gracefully stops the sequence.
  const stop = () => {
    cancelled = true;
  };
  const opts = { passive: true } as AddEventListenerOptions;
  window.addEventListener("wheel", stop, opts);
  window.addEventListener("touchmove", stop, opts);
  window.addEventListener("keydown", stop);

  try {
    await wait(1600);
    for (const step of buildSteps()) {
      if (cancelled) break;
      scrollToId(step.id);
      if (step.action) {
        await wait(700);
        if (cancelled) break;
        emit(step.action);
      }
      await wait(step.hold);
    }
  } finally {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchmove", stop);
    window.removeEventListener("keydown", stop);
    running = false;
  }
}
