import Shelf from "./Shelf";
import PropTypes from "prop-types";
const ListShelf = (props) => {
  const filterBooksByShelf = (shelf) => {
    const booksByShelf = props.books.filter((book) => {
      return book.shelf === shelf;
    });
    return booksByShelf;
  };

  const bookCurrRead = filterBooksByShelf("currentlyReading");
  const bookWantRead = filterBooksByShelf("wantToRead");
  const bookRead = filterBooksByShelf("read");

  return (
    <div className="list-books-content">
      <div>
        <Shelf
          books={bookCurrRead}
          handleChange={props.handleChange}
          shelfTitle="Currently Reading"
        />
        <Shelf
          books={bookWantRead}
          handleChange={props.handleChange}
          shelfTitle="Want to Read"
        />
        <Shelf
          books={bookRead}
          handleChange={props.handleChange}
          shelfTitle="Read"
        />
      </div>
    </div>
  );
};

ListShelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ListShelf;
