import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer } from '../reducers/booksReducer';
import { searchBooksReducer } from '../reducers/searchBooksReducer';

const reducers = combineReducers({
  books: booksReducer,
  search: searchBooksReducer,
});
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
