import { useMutation, useQueryClient } from 'react-query';
import deleteMovieFromDB from '../QueriesDB/deleteMovieFromDB.tsx';

const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMovieFromDB,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
    onError: (error) => {
      console.error('Failed to delete: ', error);
    },
  });
};

export default useDeleteMovie;
