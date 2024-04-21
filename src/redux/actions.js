import * as Types from './constants';

export const addNewContact = newContact => {
  return { type: Types.ADD_NEW_CONTACT, payload: newContact };
};

export const deleteContact = id => {
  return {
    type: Types.REMOVE_CONTACT,
    payload: id,
  };
};

export const filteredContact = contact => {
  return {
    type: Types.FILTERED_CONTACT,
    payload: contact,
  };
};
