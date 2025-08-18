import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
    category: z.enum(['workshop', 'social', 'conference', 'meeting', 'competition', 'field-notes', 'build-logs', 'speaker-spotlight', 'other']).default('other'),
    images: z.array(z.string()).optional(),
    external_link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['upcoming', 'completed', 'cancelled']).default('completed'),
    author: z.string().optional(),
    learning_outcomes: z.array(z.string()).optional(),
    related_links: z.array(z.object({
      title: z.string(),
      url: z.string().url()
    })).optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    content_type: z.enum(['post']),
    status: z.enum(['draft', 'published']),
    
    title: z.string(),
    author: z.string(),
    date: z.date(),
    preview_image: z.string(),
    description: z.string(),
    layout: z.string().optional(),
    
    // Social links - keep flat to match BlogPage.astro expectations
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    website: z.string().url().optional(),
    
    // Additional fields from existing content
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  events: eventsCollection,
  posts: postsCollection,
};