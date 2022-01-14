import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../components/App';

interface CounterState {
  value: number;
}

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment } = actions;

export const selectCount = (state: RootState) => state.counter;

export default reducer;
