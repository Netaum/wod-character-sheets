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
import header_en from "./translations/en/header.json";
import header_pt from "./translations/pt/header.json";
import ability_en from  "./translations/en/ability.json";
import ability_pt from  "./translations/pt/ability.json";
import skill_en from "./translations/en/skill.json";
import skill_pt from "./translations/pt/skill.json";
import labels_en from "./translations/en/labels.json";
import labels_pt from "./translations/pt/labels.json";
import disciplines_en from "./translations/en/disciplines.json";
import disciplines_pt from "./translations/pt/disciplines.json";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        common: common_en,
        header: header_en,
        ability: ability_en,
        skill: skill_en,
        labels: labels_en,
        disciplines: disciplines_en
      },
      pt: {
        common: common_pt,
        header: header_pt,
        ability: ability_pt,
        skill: skill_pt,
        labels: labels_pt,
        disciplines: disciplines_pt
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
