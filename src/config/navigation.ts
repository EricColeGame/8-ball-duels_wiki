export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
  (item) => item.path.replace(/^\//, "")
) as readonly string[];
