import { defineCollection, z } from 'astro:content';

const jobCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    subtitles: z.array(z.string()),
    languages: z.array(z.string()),
    web: z.string().url(),
    links: z.optional(z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })))
  })
});

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    projectImage: image(),
    title: z.string(),
    languages: z.array(z.string()),
    link: z.string().url(),
  })
})

export const collections = {
  'jobs': jobCollection,
  'projects': projectCollection
}