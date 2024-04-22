import * as Types from '../constants';

const initialState = { name: '' };

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FILTERED_CONTACT:
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};
