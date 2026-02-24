import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const frettir = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/frettir' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { frettir };
