import React from 'react';
import styles from './form.module.scss';
import ExchangerField from '../exchanger-field/exchanger-field';
import {LabelName} from '../../const';

export default function Form() {
  return (
    <form className={styles.form}>
      <ExchangerField label={LabelName.SELL}/>
      <ExchangerField label={LabelName.BUY}/>
    </form>
  );
}
