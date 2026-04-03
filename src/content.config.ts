import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
    source: z.string().optional(), // e.g. "linkedin", "original"
    image: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    publisher: z.string(), // "Google Threat Intelligence" | "Mandiant"
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    conference: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    url: z.string().url().optional(),
    image: z.string().optional(),
    slidesUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    type: z.enum(['quote', 'feature', 'award', 'interview', 'cited']).default('quote'),
    quote: z.string().optional(),
  }),
});

export const collections = { blog, research, talks, media };
