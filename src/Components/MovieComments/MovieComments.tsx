type MovieCommentsProps = {
  comment: string;
};

const MovieComments = ({ comment }: MovieCommentsProps) => {
  return (
    <div>
      <h6>Comment: {comment}</h6>
    </div>
  );
};

export default MovieComments;
