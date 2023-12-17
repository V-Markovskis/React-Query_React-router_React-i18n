import { useQuery } from 'react-query';
import getMovies from '../QueriesDB/getMovies.tsx';

const useGetMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  });
};

export default useGetMovies;
