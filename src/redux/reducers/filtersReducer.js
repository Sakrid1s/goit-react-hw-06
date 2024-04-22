import { createReducer } from '@reduxjs/toolkit';
import * as Types from '../constants';

const initialState = { name: '' };

export const filtersReducer = createReducer(initialState, builder => {
  builder.addCase(Types.FILTERED_CONTACT, (state, action) => {
    state.name = action.payload;
  });
});
