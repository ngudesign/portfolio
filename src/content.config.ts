// Defines what a case study file can contain.
// Each .md file in src/content/work/ is one project. The file name becomes
// its web address: project-one.md → /work/project-one/
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// An image is optional: leave out `src` to show a gray placeholder.
// Put image files in public/images/ and write src: /images/your-file.jpg
const image = z.object({
  src: z.string().optional(),
  alt: z.string(),
  caption: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    // Listing on the Work page
    title: z.string(),
    order: z.number(),                 // 1 = first on the Work page
    cover: image.optional(),           // image shown on the Work page

    // Hero
    company: z.string(),
    year: z.string(),
    summary: z.string(),

    // At a glance
    role: z.string(),
    team: z.string(),
    timeline: z.string(),
    platform: z.string(),

    hero: image.optional(),

    // Story sections (blank lines start a new paragraph)
    overview: z.string(),
    problem: z.string(),
    quote: z.object({ text: z.string(), by: z.string() }).optional(),
    goals: z.array(z.string()),
    research: z.string(),
    exploration: z.string(),
    explorationImages: z.array(image).default([]),
    solution: z.string(),
    solutionImages: z.array(image).default([]),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    outcome: z.string(),
    reflection: z.string(),
  }),
});

export const collections = { work };
