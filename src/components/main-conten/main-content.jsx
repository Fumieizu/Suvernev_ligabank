import React from 'react';
import Promo from '../promo/promo';
import Exchanger from '../exchanger/exchanger';

export default function MainContent() {
  return (
    <main>
      <h1 className="visually-hidden">Лига Банк - Конвертер валют</h1>
      <Promo/>
      <Exchanger/>
    </main>
  );
}
