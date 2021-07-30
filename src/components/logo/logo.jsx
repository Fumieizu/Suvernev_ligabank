import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';
import styles from './logo.module.scss';
import {AppRoute} from '../../const';

export default function Logo() {
  return (
    <Link to={AppRoute.ROOT} className={styles.link}>
      <img src={logo} alt="Логотип Лига-банк" width={149} height={25}/>
    </Link>
  );
}
