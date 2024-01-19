
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/reducer';
import commonReducer from "@/store/common/reducer";

const store = configureStore({
  reducer: {
    home: homeReducer,
    common: commonReducer
  },
});
export default store;
