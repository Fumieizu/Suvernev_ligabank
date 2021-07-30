import React from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import SocialList from '../social-list/social-list';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.info}>
            <Logo/>
            <address className={styles.text}>
              150015, г. Москва, ул. Московская, д. 32
              Генеральная лицензия Банка России №1050
              Ⓒ Лига Банк, 2019
            </address>
          </li>
          <li>
            <Menu isOnFooter/>
          </li>
          <li className={`${styles.contacts} ${styles.mobile}`}>
            <p className={styles.title}>*0904</p>
            <p className={styles.text}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </li>
          <li className={`${styles.contacts} ${styles.phone}`}>
            <p className={styles.title}>8 800 111 22 33</p>
            <p className={styles.text}>Бесплатный для всех городов России</p>
          </li>
          <li>
            <SocialList/>
          </li>
        </ul>
      </div>
    </footer>
  );
}
