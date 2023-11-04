import BookCard from "./BookCard";
import PropTypes from "prop-types";
const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      {props.books.length ? (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => {
              return (
                <li key={book.id}>
                  <BookCard
                    book={book}
                    bookTitle={book.title}
                    author={book.authors}
                    bookShelf={book.shelf}
                    imgURL={book.imageLinks.smallThumbnail}
                    handleChange={props.handleChange}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <h4>There is no {props.shelfTitle.toLowerCase()} books</h4>
      )}
    </div>
  );
};

BookCard.propsTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Shelf;
