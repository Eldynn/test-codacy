import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducer from '../slices';

export default function configureAppStore(preloadedState: any) {
  const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducer));
  }

  return store;
}
