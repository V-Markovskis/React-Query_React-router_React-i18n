import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import AboutProject from '../Pages/AboutProjectPage/AboutProject.tsx';
import MovieList from '../Pages/MovieListPage/MovieList.tsx';
import AboutAuthor from '../Pages/AboutAuthorPage/AboutAuthor.tsx';
import NoMatch from '../Pages/NoMatchPage/NoMatch.tsx';
import SingleMovie from '../Components/SingleMovie/SingleMovie.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutProject />} />
        <Route path="movie-list" element={<MovieList />} />
        <Route path="movie-list/:id" element={<SingleMovie />} />
        <Route path="about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
