import { MovieType } from '../DataTypes/MovieType.tsx';

type DisplayMovieProps = {
  movieToDisplay: MovieType;
};

const DisplayMovie = ({ movieToDisplay }: DisplayMovieProps) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default DisplayMovie;
