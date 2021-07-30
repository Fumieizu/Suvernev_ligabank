import React from 'react';
import styles from './promo.module.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import cardsPng from '../../img/cards.png';
import cardsPng2x from '../../img/cards@2x.png';
import cardsWebp from '../../img/cards.webp';
import cardsWebp2x from '../../img/cards@2x.webp';

export default function Promo() {
  return (
    <section className={styles.promo}>
      <h2 className="visually-hidden">Лига Банк - Кредиты</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3 className={styles.title}>Лига Банк</h3>
          <p className={styles.description}>Кредиты на любой случай</p>
          <Link to={AppRoute.ROOT} className={styles.button}>Рассчитать кредит</Link>
        </div>
        <div>
          <picture>
            <source srcSet={`${cardsWebp} 1x, ${cardsWebp2x} 2x`} type="image/webp"/>
            <img className={styles.cards} src={cardsPng} srcSet={`${cardsPng2x} 2x`} alt="Черная и белая, кредитная, карта Лига Банка"/>
          </picture>
        </div>
      </div>
    </section>
  );
}
