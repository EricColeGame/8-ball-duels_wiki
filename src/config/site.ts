export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "8 Ball Duels Wiki",
  shortName: "8 Ball Duels",
  logoText: "8B",
  tagline: "Complete Guides, Codes, Cue Sticks & Trick Shots",
  description: "8 Ball Duels is a competitive billiards game focused on online pool matches, strategic shots, cue control, and head-to-head duels against other players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://8-ball-duels.wiki",
  supportEmail: "support@8-ball-duels.wiki",
  gameUrl: "https://www.roblox.com/games/116921506811323/8-Ball-Duels",
  heroVideoId: "1f44MrC_O_Y",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
