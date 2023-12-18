import MovieComments from '../../MovieComments/MovieComments.tsx';
import useGetSingleMovieComments from '../SingleMovieHooks/useGetSingleMovieComments.tsx';
import style from './DisplaySingleMovieComments.module.css';
import usePostSingleMovieComments from '../SingleMovieHooks/usePostSingleMovieComments.tsx';
import { useState } from 'react';

type SingleMovieCommentsProps = {
  id: string;
};

const DisplaySingleMovieComments = ({ id }: SingleMovieCommentsProps) => {
  const [comment, setComment] = useState<string>('');

  const { data, isLoading } = useGetSingleMovieComments(id!);

  const singleMovieCommentsMutation = usePostSingleMovieComments(id!, data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className={style.singlePageComments}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Submit button clicked');
          singleMovieCommentsMutation.mutate(comment);
          setComment('');
        }}
      >
        <label htmlFor="comments">Comments:</label>
        <br />
        <br />
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
      <br />
      {data &&
        data.commentsArray.map((comment: string, key: number) => (
          <MovieComments key={key} comment={comment}></MovieComments>
        ))}
    </div>
  );
};

export default DisplaySingleMovieComments;
