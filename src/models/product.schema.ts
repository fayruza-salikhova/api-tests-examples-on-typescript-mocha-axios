import { z } from 'zod';
import { RatingSchema } from './rating.schema';

// Определяем схему для валидации данных
export const ProductSchema = z.object({
    id: z.number().int(),
    title: z.string().max(100),
    prices: z.number().positive(),
    category: z.string(),
    description: z.string(),
    image: z.string().url(),
    rating: RatingSchema
});

// Определяем тип для TypeScript
export type Product = z.infer<typeof ProductSchema>;