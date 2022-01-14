import i18n, { Callback } from 'i18next';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import en from '../../translations/en';
import fr from '../../translations/fr';
import { Navigation } from './Navigation';
import configureStore from '../store/configureStore';

const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const languages = {
  en,
  fr,
};

i18n
  .use({
    type: 'languageDetector',
    async: true,
    detect: (callback: Callback) => {
      const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(languages)) || {};

      callback(languageTag, () => {});
    },
    init: () => {},
    cacheUserLanguage: () => {},
  })
  .use(initReactI18next)
  .init({
    resources: languages,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Navigation></Navigation>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
