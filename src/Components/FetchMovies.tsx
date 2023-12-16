import { QueryClient } from 'react-query';
import useGetMovies from '../Hooks/useGetMovies.ts';
import DisplayAllMovies from './DisplayAllMovies.tsx';

const FetchMovies = () => {
  const queryClient = new QueryClient();
  // const [movies, setMovies] = useState<MovieType[]>([]);

  const { data, isLoading, isError, error } = useGetMovies();

  if (isError) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error', error);
    }
  }

  if (!data) {
    return <span>No data found</span>;
  }

  return <>{isLoading ? <span>Loading...</span> : <DisplayAllMovies movies={data} />}</>;
};

export default FetchMovies;
