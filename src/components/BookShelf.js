import React from 'react';
import { useSelector } from 'react-redux';
import { BookComponent } from './BookComponent';

export const BookShelf = () => {
  const { currentlyReading, read, wantToRead } = useSelector((state) => state.books);
  console.log(currentlyReading, read, wantToRead);
  if (!currentlyReading || !read || !wantToRead) {
    return <div />;
  } else {
    return (
      <>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Currently Reading</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {currentlyReading.map((book, index) => (
                <BookComponent key={index} book={book} />
              ))}
            </ol>
          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Want to Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {wantToRead.map((book, index) => (
                <BookComponent key={index} book={book} />
              ))}
            </ol>
          </div>
        </div>

        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {read.map((book, index) => (
                <BookComponent key={index} book={book} />
              ))}
            </ol>
          </div>
        </div>
      </>
    );
  }
};
