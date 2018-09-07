/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
 *
 * @format
 * @flow
 */

import catalog from '../data/catalog';

const initialState = {
  items: [],
  favorites: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.payload.catalog
      };
    case 'ADD_ITEM':
      return {
        ...state,
        favorites: [...state.favorites, action.payload.item]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.item.id)
      };
    default:
      return state;
  }
}

export function getItems() {
  return {
    type: 'GET_ITEMS',
    payload: { catalog }
  };
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: { item }
  };
}

export function removeItem(item) {
  return {
    type: 'REMOVE_ITEM',
    payload: { item }
  };
}