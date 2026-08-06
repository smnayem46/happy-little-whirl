import { siteConfig } from "@/config/site";

/** Turn a hex color into "r g b" so we can build rgba() values in CSS. */
function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const num = parseInt(full, 16);
  return `${(num >> 16) & 255} ${(num >> 8) & 255} ${num & 255}`;
}

/** All CSS variables derived from siteConfig.theme + fonts. */
export const themeStyle = {
  "--bd-primary": siteConfig.theme.primary,
  "--bd-primary-rgb": hexToRgb(siteConfig.theme.primary),
  "--bd-secondary": siteConfig.theme.secondary,
  "--bd-secondary-rgb": hexToRgb(siteConfig.theme.secondary),
  "--bd-background": siteConfig.theme.background,
  "--bd-text": siteConfig.theme.text,
  "--bd-glass-opacity": String(siteConfig.theme.glassOpacity),
  "--bd-font-heading": `"${siteConfig.fonts.heading}", serif`,
  "--bd-font-body": `"${siteConfig.fonts.body}", sans-serif`,
} as React.CSSProperties;
