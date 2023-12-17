import { useParams } from 'react-router-dom';
import useGetMovie from './SingleMovieHooks/useGetMovie.tsx';
import style from './SingleMovie.module.css';
import DisplaySingleMovieComments from './DisplaySingleMovieComments/DisplaySingleMovieComments.tsx';

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovie(id!);
  // const { commentsData } = useGetSingleMovieComments(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      <div className={style.singleMovieContainer}>
        <h3>Movie details</h3>
        <span>Title: {data.title}</span>
        <br />
        <span>Genre: {data.genre}</span>
        <br />
        <span>Director: {data.director}</span>
        <br />
        <span>Release year: {data.release_year}</span>
        <br />
        <span>Rating: {data.rating}</span>
        <br />
        <br />
        <br />
        <label htmlFor="comments">Comments:</label>
        <br />
        <br />
      </div>
      <DisplaySingleMovieComments id={id!}></DisplaySingleMovieComments>
    </>
  );
};

export default SingleMovie;
