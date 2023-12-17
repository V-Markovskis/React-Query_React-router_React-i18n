import useGetMovies from '../../Hooks/useGetMovies.tsx';
import DisplayAllMovies from '../DisplayAllMovies/DisplayAllMovies.tsx';
import useDeleteMovie from '../../Hooks/useDeleteMovie.tsx';

const FetchMovies = () => {
  const { data, isLoading, isError, error } = useGetMovies();

  const deleteMutation = useDeleteMovie();

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

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <DisplayAllMovies
          movies={data}
          deleteMovie={(id) => {
            deleteMutation.mutate(id);
          }}
        />
      )}
    </>
  );
};

export default FetchMovies;
