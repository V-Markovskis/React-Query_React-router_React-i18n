import { MovieType } from '../DataTypes/MovieType.tsx';
import DisplayMovie from './DisplayMovie.tsx';

type DisplayAllMoviesProps = {
  movies: MovieType[];
};

const DisplayAllMovies = ({ movies }: DisplayAllMoviesProps) => {
  return (
    <div>{movies && movies.map((movie: MovieType) => <DisplayMovie key={movie.id} movieToDisplay={movie} />)}</div>
  );
};

export default DisplayAllMovies;
