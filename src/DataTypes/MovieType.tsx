import { z } from 'zod';

const validateMovieData = z.object({
  id: z.number(),
  title: z.string(),
  genre: z.string(),
  director: z.string(),
  release_year: z.number(),
  rating: z.number(),
});

const validateMovieComments = z.object({
  id: z.number(),
  commentsArray: z.string().array(),
});

export type MovieType = z.infer<typeof validateMovieData>;
export type SingleMovieCommentType = z.infer<typeof validateMovieComments>;
