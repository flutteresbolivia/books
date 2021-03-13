import { getAll, search, update } from '../BooksAPI';
import { types } from '../types/types';

export const setBooks = (books) => ({
  type: types.booksLoad,
  payload: books,
});

export const startLoadingBooks = () => {
  return async (dispatch) => {
    const books = await getAll();
    dispatch(setBooks(books));
  };
};

export const setBooksSearch = (books) => ({
  type: types.booksLoadSearch,
  payload: books,
});

export const startSearchBooks = (searchText) => {
  if (searchText === '') {
    return [];
  }
  const maxResults = 5;

  return async (dispatch) => {
    const books = await search(searchText, maxResults);
    dispatch(setBooksSearch(books));
  };
};

export const setUpdateBook = (shelf, book) => {
  return async (dispatch) => {
    await update(book, shelf);
    dispatch(startLoadingBooks());
  };
};
