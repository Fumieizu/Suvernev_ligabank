const AppRoute = {
  ROOT: '/',
  SERVICES: '/services',
  CREDIT: '/credit',
  EXCHANGER: '/',
  CONTACTS: '/contacts',
  QUESTION: '/question',
  NOT_FOUND: '/In-progress',
  LOGIN: '/login',
};

const MenuMap = [
  {
    text: 'Услуги',
    route: AppRoute.SERVICES,
  },
  {
    text: 'Рассчитать кредит',
    route: AppRoute.CREDIT,
  },
  {
    text: 'Конвертер валют',
    route: AppRoute.EXCHANGER,
  },
  {
    text: 'Контакты',
    route: AppRoute.CONTACTS,
  },
  {
    text: 'Задать вопрос',
    route: AppRoute.QUESTION,
  },
];

const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};

const LabelName = {
  SELL: 'У меня есть',
  BUY: 'Хочу приобрести',
};

export {AppRoute, MenuMap, Currency, LabelName};
