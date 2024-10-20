import { defineCollection, reference, z } from "astro:content";
const photosCollection = defineCollection({
  type: "data",
  schema: z.object({
    url: z.string(),
    alt: z.string(),
    tags: z.array(z.string()),
    project: reference("work"),
  }),
});
const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    role: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  photos: photosCollection,
  work: workCollection,
};
