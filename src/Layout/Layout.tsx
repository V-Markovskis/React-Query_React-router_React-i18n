import { NavLink, Outlet } from 'react-router-dom';
import style from './Layout.module.css';
const Layout = () => {
  return (
    <>
      <div>
        <nav className={style.navigationContainer}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${style.navigationItem} ${isActive ? style.active : ''}`;
            }}
          >
            About Project
          </NavLink>
          <NavLink
            to="/movie-list"
            className={({ isActive }) => {
              return `${style.navigationItem} ${isActive ? style.active : ''}`;
            }}
          >
            Movie list
          </NavLink>
          <NavLink
            to="/about-author"
            className={({ isActive }) => {
              return `${style.navigationItem} ${isActive ? style.active : ''}`;
            }}
          >
            About Project
          </NavLink>
        </nav>

        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
