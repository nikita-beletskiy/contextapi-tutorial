import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const { textColor, uiElementsColor } = isLightTheme ? light : dark;

  return (
    <nav style={{ backgroundColor: uiElementsColor, color: textColor }}>
      <h1>Context App</h1>
      <p>Currently you have {books.length} books to get through</p>
    </nav>
  );
};

export default Navbar;
