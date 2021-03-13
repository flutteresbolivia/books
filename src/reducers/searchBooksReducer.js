import { types } from '../types/types';

const initialState = {
  books: [],
};
export const searchBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.booksLoadSearch:
      return {
        ...state,
        books: action.payload,
      };

    default:
      return state;
  }
};
