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
  birthdayDate: "2026-08-20",

  /** Language of the site: "en" (English) or "bn" (Bangla). */
  language: "en" as "en" | "bn",

  /** Hero section text. Leave empty ("") to use the translation file text. */
  heroTitle: "Happy Birthday",
  heroSubtitle: "Today is all about celebrating you.",
  buttonText: "Start Celebration",

  /** The birthday letter. Write anything you want between the ` ` marks. */
  letter: `Dear Sadia,

Today isn't simply another day on the calendar. It's the day the world got a
little brighter, a little warmer, a little kinder — because you arrived in it.

Thank you for every laugh, every late-night talk, and every small moment that
somehow turned into a memory I keep going back to.

May this year bring you everything you quietly wish for.

Happy Birthday ❤️`,

  /** Timeline entries — add or remove as many as you like. */
  timeline: [
    {
      title: "Beginning",
      description:
        "Where it all started — the first hello that changed everything.",
    },
    {
      title: "Memory",
      description:
        "All the little moments in between that became my favourite ones.",
    },
    {
      title: "Future",
      description: "Every chapter still waiting to be written together.",
    },
  ],

  /**
   * Gallery photos.
   * Put your images in the folder: public/photos/
   * Name them 1.jpg, 2.jpg, 3.jpg ... then list them below.
   */
  gallery: [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
  ],

  /** Background music — replace the file public/music.mp3 (keep the name). */
  music: "/music.mp3",

  /** Video message — replace the file public/video.mp4 (keep the name). */
  video: "/video.mp4",

  /** Gift cards — add as many as you want. */
  gifts: [
    {
      title: "Gift 1",
      message: "A whole day where you decide everything and I just say yes.",
    },
    {
      title: "Gift 2",
      message: "That trip we keep talking about — let's finally book it.",
    },
    {
      title: "Gift 3",
      message: "One promise: I'm always in your corner.",
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
    countdown: true,
    letter: true,
    timeline: true,
    gallery: true,
    video: true,
    gifts: true,
  },
};

export type SiteConfig = typeof siteConfig;
