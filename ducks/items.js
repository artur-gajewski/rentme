import catalog from '../data/catalog';

const initialState = { items: [] };

export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_ITEMS':
      return { ...state, items: action.payload.catalog };
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
