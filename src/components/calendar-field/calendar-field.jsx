import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchRates} from '../../store/api-action';
import styles from './calendar-field.module.scss';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {getMinDate} from '../../utils/date';

const currentDate = new Date();

export default function CalendarField() {
  const dispatch = useDispatch();
  const onHandelChange = (date) => {
    dispatch(fetchRates(date[0]));
  };

  return (
    <fieldset className={styles.fieldset}>
      <label aria-label="Выбор даты">
        <Flatpickr
          className={styles.calendar}
          name="calendar"
          options={{
            dateFormat: 'j.m.Y',
            defaultDate: currentDate,
            maxDate: currentDate,
            minDate: getMinDate(currentDate),
            onChange: onHandelChange,
          }}
        />
      </label>
    </fieldset>
  );
}
