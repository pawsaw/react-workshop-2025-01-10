import { AppHeader } from "./commponents/AppHeader";
import { BookList, OnBookClicked } from "./commponents/BookList";
import { exampleBooks } from "./data/exampleBooks";
import "./index.css";

function App() {
  const onBookClicked: OnBookClicked = (clickedBook) => {
    alert(clickedBook.price);
  };

  return (
    <div>
      <AppHeader />
      <BookList books={exampleBooks} onBookClicked={onBookClicked} />
    </div>
  );
}

export default App;
