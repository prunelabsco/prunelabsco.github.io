import { getCollection, type CollectionEntry } from "astro:content";
// views per article (IG + YT, latest snapshot), written by `npm run views` from Candela
import views from "./data/views.json";

export type Article = CollectionEntry<"articles">;

// Articles dated after the build stay off every list (their reel hasn't aired yet); /a/<slug> still works for DM links.
// ponytail: listed only after a rebuild on or after that date; add a scheduled deploy if that lag matters.
export async function listed() {
  const now = Date.now();
  return (await getCollection("articles"))
    .filter((a) => a.data.published.getTime() <= now)
    .sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}

// Must see: pinned first, then the most watched. Ties (or no Candela data yet) fall back to newest.
export function mustSee(articles: Article[], n = 3) {
  const v = (a: Article) => (views as Record<string, number>)[a.id] ?? 0;
  return [...articles].sort((a, b) => Number(b.data.pinned) - Number(a.data.pinned) || v(b) - v(a)).slice(0, n);
}
