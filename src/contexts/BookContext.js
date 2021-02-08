import { createContext, useReducer } from 'react';
import BookReducer from '../reducers/BookReduser';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [
    { title: 'name of the wind', author: 'patric rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
