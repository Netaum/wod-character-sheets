import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from  "./translations/en/common.json";
import common_pt from  "./translations/pt/common.json";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        common: common_en
      },
      pt: {
        common: common_pt
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
