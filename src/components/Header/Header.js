import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const stylesForLInk = {
  link: {
    display: 'block',
    padding: '4px 0',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 18,
    textDecoration: 'none',
    color: '#212121',
  },
  active: {
    color: '#FF4081',
  },
};

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to="/"
          exact
          style={stylesForLInk.link}
          activeStyle={stylesForLInk.active}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/movies"
          style={stylesForLInk.link}
          activeStyle={stylesForLInk.active}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
