import { z } from 'zod';

export const RatingSchema = z.object({
    rate: z.number().positive(),
    count: z.number().int().nonnegative(),
});

export type Rating = z.infer<typeof RatingSchema>;