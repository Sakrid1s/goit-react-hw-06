import * as Types from '../constants';

const initalState = { name: '' };

export const filtersReducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.FILTERED_CONTACT:
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};
