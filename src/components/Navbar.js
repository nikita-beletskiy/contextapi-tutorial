import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav
      style={{ backgroundColor: theme.uiElementsColor, color: theme.textColor }}
    >
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
