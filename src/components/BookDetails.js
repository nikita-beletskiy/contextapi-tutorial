import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { removeBook } = useContext(BookContext);

  const { uiElementsColor } = isLightTheme ? light : dark;

  return (
    <li
      className='book'
      style={{ backgroundColor: uiElementsColor }}
      onClick={() => removeBook(book.id)}
    >
      <div>{book.title}</div>
      <div>--------by--------</div>
      <div>{book.author}</div>
    </li>
  );
};

export default BookDetails;
