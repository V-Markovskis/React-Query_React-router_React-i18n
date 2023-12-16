import axios from 'axios';

const getMovies = () => {
  return axios.get('http://localhost:3000/movies').then(({ data }) => {
    return data;
  });
};

export default getMovies;
