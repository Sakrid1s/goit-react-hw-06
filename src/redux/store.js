import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './reducers/contactsReducer';
import { filtersReducer } from './reducers/filtersReducer';

// const initalState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: '',
//   },
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// const rootReducer = (state = initalState, action) => {
// switch (action.type) {
//   case 'contacts/addUser':
//     return {
//       ...state,
//       contacts: {
//         items: [...state.contacts.items, action.payload],
//       },
//     };
//   case 'contacts/removeUser':
//     return {
//       ...state,
//       contacts: {
//         items: state.contacts.items.filter(
//           item => item.id !== action.payload
//         ),
//       },
//     };
//     case 'filters/filteredUser':
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
