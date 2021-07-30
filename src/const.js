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

const Social = {
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
};

const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};

const InputType = {
  SELL: {
    label: 'У меня есть',
    type: 'sell',
  },
  BUY: {
    label: 'Хочу приобрести',
    type: 'buy',
  },
};

const DateType = {
  SERVER: 'server',
  HISTORY: 'history',
};


const MAX_DATE_RANGE = 7;

const MAX_HISTORY_COUNT = 10;

const MAX_INPUT_NUMBER_LENGTH = 10;

const BACKEND_URL = 'https://www.cbr-xml-daily.ru';

const URL_ROUT = 'daily_json.js';

export {AppRoute, MenuMap, Currency, InputType, MAX_INPUT_NUMBER_LENGTH, MAX_HISTORY_COUNT, MAX_DATE_RANGE, Social, DateType, BACKEND_URL, URL_ROUT};
