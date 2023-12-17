import { MovieType } from '../../DataTypes/MovieType.tsx';
import DisplayMovie from '../DisplayMovie/DisplayMovie.tsx';
import style from './DisplayAllMovies.module.css';

type DisplayAllMoviesProps = {
  movies: MovieType[];
  deleteMovie: (id: number) => void;
};

const DisplayAllMovies = ({ movies, deleteMovie }: DisplayAllMoviesProps) => {
  return (
    <div className={style.movieContainer}>
      {movies &&
        movies.map((movie: MovieType) => (
          <DisplayMovie key={movie.id} movieToDisplay={movie} deleteMovie={deleteMovie} />
        ))}
    </div>
  );
};

export default DisplayAllMovies;
