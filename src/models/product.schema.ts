import { z } from 'zod';
import { RatingSchema } from './rating.schema';

// Defining a schema for data validation
export const ProductSchema = z.object({
    id: z.number().int(),
    title: z.string().max(100),
    prices: z.number().positive(),
    category: z.string(),
    description: z.string(),
    image: z.string().url(),
    rating: RatingSchema
});

// Defining the type for TypeScript
export type Product = z.infer<typeof ProductSchema>;