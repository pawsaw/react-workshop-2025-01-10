import { Book } from "../../../domain/book";
import { BookListItem } from "./BookListItem";
import { OnBookClicked } from "./OnBookClicked";

export interface BookListProps {
  books: Book[];
  onBookClicked?: OnBookClicked;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  onBookClicked = () => {},
}) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.isbn}>
          <BookListItem book={book} onBookClicked={onBookClicked} />
        </li>
      ))}
    </ul>
  );
};
