import { createReducer } from '@reduxjs/toolkit';
import * as Types from '../constants';

const initialState = { items: [] };

export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(Types.ADD_NEW_CONTACT, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(Types.DELETE_CONTACT, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    });
});
