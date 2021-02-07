import './index.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <BookList />
    </div>
  );
};

export default App;
