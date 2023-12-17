type MovieCommentsProps = {
  comment: string;
};
const MovieComments = ({ comment }: MovieCommentsProps) => {
  return <div>{comment}</div>;
};

export default MovieComments;
