import React from 'react';
import styles from './menu.module.scss';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {MenuMap} from '../../const';

export default function Menu({isOnFooter = false}) {
  return (
    <ul className={`${styles.list} ${isOnFooter ? '' : styles.upper}`}>
      {
        MenuMap.map(({text, route}) => (
          <li key={text} className={`${styles.list__item} ${isOnFooter ? styles.list__item_footer : ''}`}>
            <NavLink
              to={route}
              className={styles.link}
              activeClassName={styles.active}
            >
              {text}
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

Menu.propTypes = {
  isOnFooter: PropTypes.bool.isRequired,
};
