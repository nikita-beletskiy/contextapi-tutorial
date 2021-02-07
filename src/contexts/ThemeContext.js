import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      textColor: '#555',
      uiElementsColor: '#ddd',
      backgroundColor: '#eee'
    },
    dark: {
      textColor: '#ddd',
      uiElementsColor: '#333',
      backgroundColor: '#555'
    }
  });

  const toggleTheme = () =>
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
