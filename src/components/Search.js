import React from 'react';
import { useLocation } from 'react-router';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { BookComponent } from './BookComponent';
import { startSearchBooks } from '../actions/books';
import { useDispatch, useSelector } from 'react-redux';

export const Search = ({ history }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  //   const searchResults =  useMemo( () =>  dispatch( startSearchBooks(q), [q, dispatch]));
  const { books } = useSelector((state) => state.search);
  console.log(books)
//   useEffect(() => {
//     dispatch(startSearchBooks(q));
//     console.log('DISPATCH');
//   }, [q, dispatch]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
    console.log('BUSQUEDA' + searchText);
    dispatch(startSearchBooks(searchText));
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <form onSubmit={handleSearch}>
            <input
              className='search-books-input'
              type='text'
              placeholder='Search by title or author'
              value={searchText}
              autoComplete='off'
              name='searchText'
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
            {
               Object.prototype.toString.call( books ) === '[object Array]' ?  books.map((book, index) => (
                    <BookComponent key={index} book={book} />
                  )) : <div> <h2>Sin resultados con la busqueda : <strong>{q}</strong></h2></div>
            }
        </ol>
      </div>
    </div>
  );
};
