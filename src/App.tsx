import { AppHeader } from "./commponents/AppHeader";
import { BookListItem } from "./commponents/BookListItem";
import { exampleBooks } from "./data/exampleBooks";
import "./index.css";

function App() {
  return (
    <div>
      <AppHeader />
      <BookListItem book={exampleBooks[0]} />
      <BookListItem book={exampleBooks[1]} />
    </div>
  );
}

export default App;
