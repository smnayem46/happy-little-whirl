# Birthday Website — Editing Guide (no coding needed)

Everything on this website is controlled from a few files. **You never need to
open a component or write code.**

| What you want to change | File to edit |
| --- | --- |
| Name, date, letter, timeline, gifts, colors, fonts | `src/config/site.ts` |
| English wording (buttons, headings) | `src/translations/en.json` |
| Bangla wording | `src/translations/bn.json` |
| Photos | `public/photos/` |
| Music | `public/music.mp3` |
| Video | `public/video.mp4` |

---

## 1. Change the name

In `src/config/site.ts`:

```ts
name: "SADIA",
```

Replace `SADIA` with any name. Keep the quotes.

## 2. Change the birthday date

```ts
birthdayDate: "2026-08-20",
```

Format is `YYYY-MM-DD` (year-month-day). The countdown uses this date.

## 3. Change the letter

```ts
letter: `Dear Sadia,

...your text...

Happy Birthday ❤️`,
```

Write anything between the backticks (`` ` ``). Blank lines and emojis work.

## 4. Change the photos (automatic)

1. Put your images in the folder `public/photos/`
2. That's it — every image there shows up in the gallery automatically.

Supported types: `.jpg`, `.jpeg`, `.png`, `.webp`. Photos are sorted by file
name (`1.jpg`, `2.jpg`, `10.jpg` sort in the natural order). Delete a file to
remove it from the gallery. You never list photos in any file.


## 5. Change the music

Replace the file `public/music.mp3` with your own song, keeping the same file
name. Nothing else to do. (If you want a different name, update
`music: "/music.mp3"` in the config.)

## 6. Change the video

Replace `public/video.mp4` with your own video, keeping the same file name.
(Or update `video: "/video.mp4"` in the config.)

## 7. Change the timeline

```ts
timeline: [
  { title: "Beginning", description: "How it started." },
  { title: "Memory", description: "A favourite moment." },
  { title: "Future", description: "What comes next." },
],
```

Add as many `{ title: "...", description: "..." }` blocks as you like,
separated by commas. Leave `description: ""` to show only a title.

## 8. Change the gifts

```ts
gifts: [
  { title: "Gift 1", message: "Your surprise message." },
  { title: "Gift 2", message: "Another one." },
],
```

Same idea — add as many as you want.

## 9. Change the theme colors

```ts
theme: {
  primary: "#ff5ca8",      // main accent color
  secondary: "#9b5cff",    // second accent color
  background: "#080814",   // page background
  text: "#ffffff",         // text color
  glassOpacity: 0.15,      // 0 = clear cards, 1 = solid cards
},
```

Use any hex color code (for example from <https://coolors.co>).

## 10. Change the fonts

```ts
fonts: {
  heading: "Playfair Display",
  body: "Poppins",
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display...&display=swap",
},
```

1. Pick fonts at <https://fonts.google.com> and copy the stylesheet URL they
   give you.
2. Paste it into `googleFontsUrl`.
3. Write the exact font names into `heading` and `body`.

## 11. Change the language

In `src/config/site.ts`:

```ts
language: "en",   // "en" for English, "bn" for Bangla
```

Visitors can also switch language with the buttons in the top-left corner.

All wording lives in `src/translations/en.json` and
`src/translations/bn.json`. Edit the text on the right side of each line:

```json
"gifts": { "heading": "Your Gifts", "reveal": "Reveal" }
```

**Adding a new language:** copy `en.json` to e.g. `fr.json`, translate the
values, and it becomes selectable once registered — ask for it to be added and
it takes one line.

## 12. Hero and button text

```ts
heroTitle: "Happy Birthday",
heroSubtitle: "Today is all about celebrating you.",
buttonText: "Start Celebration",
```

Leave any of them as `""` (empty) to use the wording from the translation
files instead.

## 13. Hide a section

```ts
sections: {
  countdown: true,
  letter: true,
  timeline: true,
  gallery: true,
  video: true,
  gifts: true,
},
```

Set any of them to `false` to hide that section.

---

### Tips

- Always keep the quotes `"` and the commas `,` exactly where they are.
- If a photo or the video is missing, that item is simply skipped — nothing
  breaks.
- Music starts only after you click the music button (browsers require this).
