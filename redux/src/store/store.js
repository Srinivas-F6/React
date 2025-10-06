import { configureStore } from '@reduxjs/toolkit';
import reduxCounterSlice from './slice/reduxCounterSlice';

const store = configureStore({
   name : 'store',
   reducer: {
        ReduxCouter : reduxCounterSlice
   }
})
export default store;