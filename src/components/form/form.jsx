import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateHistory} from '../../store/action';
import styles from './form.module.scss';
import ExchangerField from '../exchanger-field/exchanger-field';
import CalendarField from '../calendar-field/calendar-field';
import Button from '../button/button';
import LoadingScreen from '../loading-screen/loading-screen';
import {InputType, Currency, MAX_HISTORY_COUNT} from '../../const';
import {getCalculationResult} from '../../utils/common';
import {getRates, getHistory, getDate, getIsRatesDataLoaded} from '../../store/selectors';

let ID = 1;

export default function Form() {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const history = useSelector(getHistory);
  const date = useSelector(getDate);
  const isLoad = useSelector(getIsRatesDataLoaded);
  const [sellValue, setSellValue] = useState(0);
  const [buyValue, setBuyValue] = useState(0);
  const [currencySellValue, setCurrencySellValue] = useState(Currency.RUB);
  const [currencyBuyValue, setCurrencyBuyValue] = useState(Currency.USD);

  useEffect(() => {
    setBuyValue(getCalculationResult(sellValue, rates[currencySellValue], rates[currencyBuyValue]));
  }, [rates, sellValue, currencySellValue, currencyBuyValue]);

  if (!isLoad) {
    return <LoadingScreen/>;
  }

  const onButtonClickHandler = (evt) => {
    evt.preventDefault();

    const historyList = history.slice();

    if (history.length >= MAX_HISTORY_COUNT) {
      historyList.shift();
    }

    dispatch(updateHistory([...historyList,
      {
        id: ID++,
        date,
        sellValue,
        currencySellValue,
        buyValue,
        currencyBuyValue,
      },
    ]));
  };

  const onSelectChangeHandler = (evt, type) => {
    const value = evt.target.value;

    switch (type) {
      case InputType.SELL.type:
        setCurrencySellValue(value);
        setBuyValue(getCalculationResult(sellValue, rates[value], rates[currencyBuyValue]));
        break;
      case InputType.BUY.type:
        setCurrencyBuyValue(value);
        setBuyValue(getCalculationResult(sellValue, rates[currencySellValue], rates[value]));
        break;
      default:
        break;
    }
  };

  const onInputChangeHandler = (evt, type) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (isNaN(value)) {
      return;
    }

    switch (type) {
      case InputType.SELL.type:
        setSellValue(value);
        setBuyValue(getCalculationResult(value, rates[currencySellValue], rates[currencyBuyValue]));
        break;
      case InputType.BUY.type:
        setBuyValue(value);
        setSellValue(getCalculationResult(value, rates[currencyBuyValue], rates[currencySellValue]));
        break;
      default:
        break;
    }
  };

  if (!isLoad) {
    return <LoadingScreen/>;
  }

  return (
    <form className={styles.form}>
      <ExchangerField
        type={InputType.SELL.type}
        label={InputType.SELL.label}
        value={sellValue}
        onSelectChange={onSelectChangeHandler}
        onInputChange={onInputChangeHandler}
        currentCurrency={currencySellValue}
      />
      <ExchangerField
        type={InputType.BUY.type}
        label={InputType.BUY.label}
        value={buyValue}
        onSelectChange={onSelectChangeHandler}
        onInputChange={onInputChangeHandler}
        currentCurrency={currencyBuyValue}
      />
      <CalendarField/>
      <Button
        type={'submit'}
        text="Сохранить результат"
        onClick={onButtonClickHandler}
        isBig
        isDisabled={sellValue === 0 || sellValue === ''}
      />
    </form>
  );
}
