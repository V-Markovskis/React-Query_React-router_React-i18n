import { NavLink, Outlet } from 'react-router-dom';
import style from './Layout.module.css';

const navItems = [
  {
    label: 'About Project',
    path: '/',
  },
  {
    label: 'Movie list',
    path: '/movie-list',
  },
  {
    label: 'About Author',
    path: '/about-author',
  },
];

const Layout = () => {
  return (
    <>
      <div>
        <nav className={style.navigationContainer}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => {
                return `${style.navigationItem} ${isActive ? style.active : ''}`;
              }}
            >
              {label}
            </NavLink>
          ))}
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
