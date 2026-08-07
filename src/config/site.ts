/**
 * ============================================================
 *  THE ONLY FILE YOU NEED TO EDIT (plus the translation files)
 * ============================================================
 *
 *  Everything on the website comes from this file.
 *  Change a value here -> the website updates instantly.
 *  You never need to touch any component / code file.
 *
 *  See README.md for a step-by-step guide.
 */

export const siteConfig = {
  /** Whose birthday is it? Used in titles and the letter signature. */
  name: "SADIA",

  /** Birthday date (YYYY-MM-DD). Drives the countdown. */
  birthdayDate: "2026-08-07",

  /** Language of the site: "en" (English) or "bn" (Bangla). */
  language: "en" as "en" | "bn",

  /** Hero section text. Leave empty ("") to use the translation file text. */
  heroTitle: "Happy Birthday",
  heroSubtitle: "Today is all about celebrating you.",
  buttonText: "Start Celebration",

  /** The birthday letter. Write anything you want between the ` ` marks. */
  letter: `Dear Sadia,

Today isn't simply another day on the calendar — it's the day the world got a
little brighter, a little warmer, a little kinder, because you arrived in it.

Thank you for being such an amazing friend: for every laugh, every honest
conversation, and every small moment that somehow turned into a memory worth
keeping.

I hope this year brings you countless beautiful memories, good health and all
the success you deserve.

Keep smiling and keep shining.

Happy Birthday! 🎉`,

  /** Birthday cake section. */
  cake: {
    heading: "Make a Wish",
    subtitle: "Close your eyes, make a wish, and blow out the candles.",
    button: "🎂 Blow the Candles",
    /** Number of candles on the cake. */
    candles: 5,
    /** Shown after the candles are blown out. */
    wishMade: "Wish made ✨ May all your dreams come true.",
  },

  /** Timeline entries — add or remove as many as you like. */
  timeline: [
    {
      icon: "🌸",
      title: "Another Wonderful Year",
      description: "Continue learning, growing and smiling.",
    },
    {
      icon: "⭐",
      title: "Keep Chasing Dreams",
      description: "Never stop believing in yourself.",
    },
    {
      icon: "🎉",
      title: "Celebrate Every Achievement",
      description: "Every small success matters.",
    },
    {
      icon: "🌍",
      title: "New Adventures Await",
      description: "May this year be full of wonderful experiences.",
    },
  ],

  /** Final wishes — the big full-screen message. */
  wishes: {
    title: "Happy Birthday",
    lines: [
      "Wishing you a year filled with happiness, good health, success, peace, new opportunities, and unforgettable memories.",
      "Thank you for being such a wonderful friend.",
      "May every dream you have move one step closer to reality.",
      "Keep smiling. Keep shining.",
      "Enjoy your special day!",
    ],
  },

  /** Fireworks finale — the grand ending. */
  finale: {
    title: "🎉 Happy Birthday, SADIA! 🎉",
    lines: [
      "Hope this special day brings you lots of joy, laughter, great memories, and everything that makes you happy.",
      "Wishing you all the best for the year ahead.",
    ],
  },

  /**
   * Gallery photos are AUTOMATIC.
   * Just upload images into the folder: public/photos/
   * (.jpg .jpeg .png .webp) — they appear in the gallery on their own,
   * sorted by file name. Nothing to list here.
   */

  /** Background music — replace the file public/music.mp3 (keep the name). */
  music: "/music.mp3",

  /** Video message — replace the file public/video.mp4 (keep the name). */
  video: "/video.mp4",

  /** Gift cards — add as many as you want. */
  gifts: [
    {
      title: "A Wish",
      message: "Wishing you endless happiness in everything you do.",
    },
    {
      title: "A Promise",
      message: "You deserve all the success in the world — I'll always cheer you on.",
    },
    {
      title: "A Thank You",
      message: "I'm grateful to have a friend like you.",
    },
  ],

  /** Colors — use any hex color code. */
  theme: {
    primary: "#ff5ca8",
    secondary: "#9b5cff",
    background: "#080814",
    text: "#ffffff",
    glassOpacity: 0.15,
  },

  /** Fonts — any Google Font name works. */
  fonts: {
    heading: "Playfair Display",
    body: "Poppins",
    /** Google Fonts stylesheet URL (update if you change the fonts above). */
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600&display=swap",
  },

  /** Which sections to show. Set to false to hide a section. */
  sections: {
    countdown: false,
    cake: true,
    letter: true,
    timeline: true,
    gallery: true,
    video: false,
    gifts: true,
    wishes: true,
    finale: true,
  },
};

export type SiteConfig = typeof siteConfig;
