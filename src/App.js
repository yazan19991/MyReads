import "./App.css";
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  Link,
  BrowserRouter,
} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListShelf from "./components/ListShelf";
import SearchBook from "./components/SearchBook";
import NotFound from "./components/NotFound";

function App() {
  let navigate = useNavigate();

  const [allBooks, setAllBooks] = useState([]);

  const [showSearchPage, setShowSearchpage] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllBooks = async () => {
      setLoading(true);
      const res = await BooksAPI.getAll();
      setAllBooks(res);
      setLoading(false);
    };
    getAllBooks();
  }, []);

  const handleChange = (shelf, book) => {
    setLoading(true);
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setAllBooks([...allBooks.filter((b) => b.id !== book.id), book]);
      setLoading(false);
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {loading ? (
                <div className="loader-container">
                  <div className="spinner"></div>
                </div>
              ) : (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <ListShelf books={allBooks} handleChange={handleChange} />
                  <div className="open-search">
                    <Link to="/search">Add new book</Link>
                  </div>
                </div>
              )}
            </div>
          }
        />
        <Route
          path="/search"
          element={<SearchBook books={allBooks} handleChange={handleChange} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
