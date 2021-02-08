import './index.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';

const App = () => {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
