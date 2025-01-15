import { useBooks } from "../../domain/book";
import { BookList } from "./BookList";

export const BookScreen: React.FC = () => {
  const { books, loading, reload } = useBooks();
  return (
    <div className="book-screen">
      <button onClick={reload}>Reload</button>
      <div>
        {loading ? <span>Loading...</span> : <BookList books={books!} />}
      </div>
    </div>
  );
};
