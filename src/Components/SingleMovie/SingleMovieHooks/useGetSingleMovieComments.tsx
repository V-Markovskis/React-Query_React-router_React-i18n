import { useQuery } from 'react-query';
import axios from 'axios';

const useGetSingleMovieComments = (id: string) => {
  return useQuery({
    queryKey: ['movie-comments'],
    queryFn: () => {
      return axios.get(`http://localhost:3000/comments/${id}`).then(({ data }) => {
        return data;
      });
    },
    staleTime: 0,
  });
};

export default useGetSingleMovieComments;
