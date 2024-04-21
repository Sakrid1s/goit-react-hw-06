import * as Types from './constants';

export const addNewUser = newUser => {
  return { type: Types.ADD_NEW_CONTACT, payload: newUser };
};

export const deleteUser = id => {
  return {
    type: Types.REMOVE_CONTACT,
    payload: id,
  };
};

export const filteredUser = user => {
  return {
    type: Types.FILTERED_CONTACT,
    payload: user,
  };
};
