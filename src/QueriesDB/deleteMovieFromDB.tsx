import axios from 'axios';

const deleteMovieFromDB = (id: number) => {
  return axios.delete(`http://localhost:3000/movies/${id}`);
};

export default deleteMovieFromDB;
