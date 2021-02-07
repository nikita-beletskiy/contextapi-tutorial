import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='book-list'
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <ul>
        <li style={{ backgroundColor: theme.uiElementsColor }}>
          the way of kings
        </li>
        <li style={{ backgroundColor: theme.uiElementsColor }}>
          the name of the wind
        </li>
        <li style={{ backgroundColor: theme.uiElementsColor }}>
          the final empire
        </li>
      </ul>
    </div>
  );
};

export default BookList;
