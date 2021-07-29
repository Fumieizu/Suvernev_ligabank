import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import User from '../user/user';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Logo/>
          <Menu isOnFooter={false}/>
          <User/>
        </nav>
      </div>
    </header>
  );
}
