/**
 * Automatic gallery loader.
 *
 * Every image you drop into public/photos/ shows up in the gallery.
 * Supported: .jpg .jpeg .png .webp — no code changes needed, ever.
 */

// Only the file names are read here (nothing is bundled), so the images are
// served straight from the public folder.
const files = import.meta.glob(
  "../../public/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
);

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export const photos: string[] = Object.keys(files)
  .map((path) => path.split("/").pop() as string)
  .sort(collator.compare)
  .map((name) => `/photos/${name}`);
