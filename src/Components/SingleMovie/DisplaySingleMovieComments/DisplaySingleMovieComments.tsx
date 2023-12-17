import MovieComments from '../../MovieComments/MovieComments.tsx';
import useGetSingleMovieComments from '../SingleMovieHooks/useGetSingleMovieComments.tsx';
import style from './DisplaySingleMovieComments.module.css';

type SingleMovieCommentsProps = {
  id: string;
};

const DisplaySingleMovieComments = ({ id }: SingleMovieCommentsProps) => {
  // const [comment, setComment] = useState<string>('');
  // const [allComments, setAllComments] = useState<string[]>([]);

  const { data, isLoading } = useGetSingleMovieComments(id!);

  console.log('data, sing movie comments', data);

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
        }}
      >
        <input
          type="text"
          id="comments"
          placeholder="Your comment..."
          // value={comment}
          // onChange={(e) => setComment(e.target.value)}
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
