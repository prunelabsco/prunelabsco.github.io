import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

// Articles dated after the build stay off every list (their reel hasn't aired yet); /a/<slug> still works for DM links.
// ponytail: listed only after a rebuild on or after that date; add a scheduled deploy if that lag matters.
export async function listed() {
  const now = Date.now();
  return (await getCollection("articles"))
    .filter((a) => a.data.published.getTime() <= now)
    .sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
}
