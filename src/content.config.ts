import {z, defineCollection} from "astro:content";
import {glob} from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url(),
        tech: z.array(z.string()),
    })
});


export const collections = {projects};