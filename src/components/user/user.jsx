import React from 'react';
import styles from './user.module.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function User() {
  return (
    <ul className={styles.list}>
      <li>
        <Link to={AppRoute.LOGIN} className={styles.link}>
          <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.22 14.3h2.22v5.5h13.34V2.2H4.44v5.5H2.22V1.1A1.12 1.12 0 013.33 0H18.9A1.1 1.1 0 0120 1.1v19.8a1.12 1.12 0 01-1.11 1.1H3.33a1.1 1.1 0 01-1.11-1.1v-6.6zM8.9 9.9V6.6l5.55 4.4-5.55 4.4v-3.3H0V9.9h8.89z" fill="#1F1E25"/>
          </svg>
          Войти в Интернет-банк
        </Link>
      </li>
    </ul>
  );
}
