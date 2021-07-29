import React from 'react';
import styles from './exchanger.module.scss';
import Form from '../form/form';

export default function Exchanger() {
  return (
    <section className={styles.exchanger}>
      <div className={styles.container}>
        <h2 className={styles.title}>Конвертер валют</h2>
        <Form/>
      </div>
    </section>
  );
}
