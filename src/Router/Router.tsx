import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import AboutProject from '../Pages/AboutProject.tsx';
import MovieList from '../Pages/MovieList.tsx';
import AboutAuthor from '../Pages/AboutAuthor.tsx';
import NoMatch from '../Pages/NoMatch.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutProject />}></Route>
        <Route path="movie-list" element={<MovieList />}></Route>
        <Route path="about-author" element={<AboutAuthor />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
