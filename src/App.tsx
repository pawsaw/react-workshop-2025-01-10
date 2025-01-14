import { BookList } from "./commponents/BookList";
import { useBooks } from "./domain/book";

import "./index.css";

function App() {
  const { books, loading, reload } = useBooks();
  return (
    <>
      <button onClick={reload}>Reload</button>
      <div>
        {loading ? <span>Loading...</span> : <BookList books={books!} />}
      </div>
    </>
  );
}

export default App;
