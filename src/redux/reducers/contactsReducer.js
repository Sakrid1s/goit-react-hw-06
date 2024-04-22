import { createReducer } from '@reduxjs/toolkit';
import * as Types from '../constants';

const initialState = { items: [] };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Types.ADD_NEW_CONTACT:
//       return {
//         items: [...state.items, action.payload],
//       };
//     case Types.REMOVE_CONTACT:
//       return {
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(Types.ADD_NEW_CONTACT, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(Types.REMOVE_CONTACT, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    });
});
