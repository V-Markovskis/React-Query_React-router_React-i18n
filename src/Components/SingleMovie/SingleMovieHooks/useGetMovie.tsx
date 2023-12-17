import { useQuery } from 'react-query';
import axios from 'axios';

const useGetMovie = (id: string) => {
  return useQuery({
    queryKey: ['movie'],
    queryFn: () => {
      return axios.get(`http://localhost:3000/movies/${id}`).then(({ data }) => {
        return data;
      });
    },
    staleTime: 0,
  });
};

export default useGetMovie;
