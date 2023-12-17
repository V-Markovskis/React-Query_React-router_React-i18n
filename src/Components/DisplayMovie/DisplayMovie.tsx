import { MovieType } from '../../DataTypes/MovieType.tsx';
import style from './DisplayMovie.module.css';

type DisplayMovieProps = {
  movieToDisplay: MovieType;
  deleteMovie: (id: number) => void;
};

const DisplayMovie = ({ movieToDisplay, deleteMovie }: DisplayMovieProps) => {
  return (
    <>
      <div className={style.movieEntity}>
        <h3>Movie details</h3>
        <span>Title: {movieToDisplay.title}</span>
        <br />
        <span>Genre: {movieToDisplay.genre}</span>
        <br />
        <span>Director: {movieToDisplay.director}</span>
        <br />
        <span>Release year: {movieToDisplay.release_year}</span>
        <br />
        <span>Rating: {movieToDisplay.rating}</span>
        <br />
        <br />
        <button
          className="btn btn-warning"
          onClick={() => {
            console.log('Delete button clicked');
            deleteMovie(movieToDisplay.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DisplayMovie;
