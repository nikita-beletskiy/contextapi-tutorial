import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import BookDetails from './BookDetails';
import BookForm from './BookForm';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const { textColor, backgroundColor } = isLightTheme ? light : dark;

  return (
    <div className='book-list' style={{ backgroundColor, color: textColor }}>
      <ul>
        {books.length > 0 ? (
          books.map(book => <BookDetails key={book.id} book={book} />)
        ) : (
          <li>No books to read</li>
        )}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
