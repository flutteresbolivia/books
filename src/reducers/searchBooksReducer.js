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
