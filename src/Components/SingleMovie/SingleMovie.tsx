import { useParams } from 'react-router-dom';
import useGetMovie from './SingleMovieHooks/useGetMovie.tsx';
import style from './SingleMovie.module.css';
import { useState } from 'react';
import MovieComments from '../MovieComments/MovieComments.tsx';

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovie(id!);
  const [comment, setComment] = useState<string>('');
  const [allComments, setAllComments] = useState<string[]>([]);

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Submit comment clicked');

            setAllComments([...allComments, comment]);
          }}
        >
          <input
            type="text"
            id="comments"
            placeholder="Your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
      {allComments &&
        allComments.map((comment: string, key: number) => <MovieComments key={key} comment={comment}></MovieComments>)}
    </>
  );
};

export default SingleMovie;
