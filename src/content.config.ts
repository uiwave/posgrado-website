import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const announcements = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/announcements",
  }),

  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  announcements
};
