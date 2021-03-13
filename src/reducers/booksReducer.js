// {
//     notes : [],
//     active: null,
//     active:{
//         id:'',
//         title:'',
//         body:'',
//         imageUrl:'',
//         date:''
//     }
// }

import { types } from '../types/types';

// const initialState = {
//   reads: [],
//   currentlyReads: [],
//   wantToReads: [],
// };

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
     
    // return state.map((book) => {
    //   return {
    //     ...book,
    //     currentlyReading: action.payload.filter((book) => book.shelf === 'currentlyReading')],
    //     wantToRead: action.payload.filter((book) => book.shelf === 'wantToRead')],
    //     read: action.payload.filter((book) => book.shelf === 'read')],
    //   };
    // });
    // return [
    //   ...state,

    //   // {

    //   // },
    // ];
    // case types.currentlyRead:
    //   return {
    //     ...state,
    //     currentlyReads: [...action.payload],
    //   };
    // case types.wantToRead:
    //   return {
    //     ...state,
    //     wantToReads: [...action.payload],
    //   };
    default:
      return state;
  }
};
