import * as Types from '../constants';

const initalState = { items: [] };

export const contactsReducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.ADD_NEW_CONTACT:
      return {
        items: [...state.items, action.payload],
      };
    case Types.REMOVE_CONTACT:
      return {
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
