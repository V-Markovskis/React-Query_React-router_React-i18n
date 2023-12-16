import { z } from 'zod';

const validateMovieData = z.object({
  id: z.number(),
  title: z.string(),
  genre: z.string(),
  director: z.string(),
  release_year: z.number(),
  rating: z.number(),
});

export type MovieType = z.infer<typeof validateMovieData>;
