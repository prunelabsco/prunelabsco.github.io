import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One article per reel whose goal is "read the list / commands / steps".
// Everything in an article comes from the video's script and the tests behind it.
const articles = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    // one shelf per article, for the filter on /read
    category: z.enum(["Claude Code", "Repos", "Design", "Tested"]),
    youtube: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
});

export const collections = { articles };
