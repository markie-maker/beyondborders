import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const blogs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blogs' }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    estimatedReadTime: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blogs };
