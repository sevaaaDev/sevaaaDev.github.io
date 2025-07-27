import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts/" }),
  schema: z.object({
    title: z.string().optional(),
    publishDate: z.string(),
    modifiedDate: z.string().optional(),
    topic: z.string(),
    desc: z.string().optional(),
  }),
});

export const collections = { blog };
