import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56699' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12699' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79151' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-2612' },
];

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
