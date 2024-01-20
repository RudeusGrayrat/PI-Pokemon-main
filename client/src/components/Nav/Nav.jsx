import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { fetchPokemons } from '../../redux/actions'; // Asegúrate de tener este archivo
import styles from './Nav.module.css';

function Nav({ onSearch, fetchPokemons }) {
   // Resto del código
   const location = useLocation()
   if (location.pathname === '/' || location.pathname === "/create") {
      return null;
   }

   return (
      <div className={styles.Nav}>
         <NavLink to="/home"
            className={styles.navlink}>
            <button className={styles.button}>
               Home
            </button>
         </NavLink>

         <SearchBar onSearch={onSearch} />

         <NavLink to="/create"
            className={styles.navlink}>
            <button className={styles.button}>
               +
            </button>
         </NavLink>

      </div>
   );
}

const mapDispatchToProps = {
   fetchPokemons,
};

export default connect(null, mapDispatchToProps)(Nav);
