import { types } from '../types/types';

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
};
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.booksLoad:
      return {
        ...state,
        currentlyReading: action.payload.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: action.payload.filter((book) => book.shelf === 'wantToRead'),
        read: action.payload.filter((book) => book.shelf === 'read'),
      };

    default:
      return state;
  }
};
