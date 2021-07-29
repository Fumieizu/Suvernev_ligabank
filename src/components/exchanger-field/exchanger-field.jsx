import React from 'react';
import PropTypes from 'prop-types';
import styles from './exchanger-field.module.scss';
import {Currency} from '../../const';

const MAX_INPUT_NUMBER_LENGTH = 15;

export default function ExchangerField({label, value, onInputChange, onSelectChange, currentCurrency}){
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          type="text"
          inputMode={'numeric'}
          maxLength={MAX_INPUT_NUMBER_LENGTH}
          value={value}
          onChange={() => onInputChange}
        />
      </label>
      <label>
        <select
          className={styles.select}
          name="Currency"
          value={currentCurrency}
          onChange={() => onSelectChange}
          aria-label="Селектор выбара валюты, для обмена"
        >
          {
            Object.values(Currency).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          }
        </select>
      </label>
    </fieldset>
  );
}

ExchangerField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  currentCurrency: PropTypes.string.isRequired,
};
