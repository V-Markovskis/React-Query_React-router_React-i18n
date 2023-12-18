import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { SingleMovieCommentType } from '../../../DataTypes/MovieType.tsx';

const usePostSingleMovieComments = (id: string, data: SingleMovieCommentType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment: string) => {
      const commentsArray = [...data.commentsArray, comment];
      return axios.put(`http://localhost:3000/comments/${id}`, { commentsArray });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movie-comments'] });
    },
    onError: (error) => {
      console.error('Failed to delete: ', error);
    },
  });
};

export default usePostSingleMovieComments;
