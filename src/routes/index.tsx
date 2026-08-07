import { createFileRoute } from "@tanstack/react-router";

import { siteConfig } from "@/config/site";
import { themeStyle } from "@/lib/theme";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { Hero } from "@/components/birthday/Hero";
import { Countdown } from "@/components/birthday/Countdown";
import { Cake } from "@/components/birthday/Cake";
import { Letter } from "@/components/birthday/Letter";
import { Timeline } from "@/components/birthday/Timeline";
import { Gallery } from "@/components/birthday/Gallery";
import { VideoMessage } from "@/components/birthday/VideoMessage";
import { Gifts } from "@/components/birthday/Gifts";
import { Wishes } from "@/components/birthday/Wishes";
import { Finale } from "@/components/birthday/Finale";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";
import { LanguageSwitcher } from "@/components/birthday/LanguageSwitcher";


const title = `Happy Birthday ${siteConfig.name}`;
const description = `${siteConfig.heroSubtitle} A little birthday website for ${siteConfig.name} — letter, memories, photos and gifts.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Page() {
  const { t } = useLanguage();
  return (
    <main className="bd-root" style={themeStyle}>
      <LanguageSwitcher />
      <MusicPlayer />
      <Hero />
      {siteConfig.sections.countdown ? <Countdown /> : null}
      {siteConfig.sections.cake ? <Cake /> : null}
      {siteConfig.sections.timeline ? <Timeline /> : null}
      {siteConfig.sections.gifts ? <Gifts /> : null}
      {siteConfig.sections.letter ? <Letter /> : null}
      {siteConfig.sections.gallery ? <Gallery /> : null}
      {siteConfig.sections.video ? <VideoMessage /> : null}
      {siteConfig.sections.wishes ? <Wishes /> : null}
      {siteConfig.sections.finale ? <Finale /> : null}
      <footer className="pb-16 text-center text-sm opacity-60">
        {t("footer.text")}
      </footer>

    </main>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
