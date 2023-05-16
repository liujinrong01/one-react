
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/reducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
export default store;
