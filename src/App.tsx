import { AppHeader } from "./commponents/AppHeader";
import { BookListItem, BookListItemProps } from "./commponents/BookListItem";
import { exampleBooks } from "./data/exampleBooks";
import "./index.css";

function App() {
  const onBookClicked: BookListItemProps["onBookClicked"] = (clickedBook) => {
    alert(clickedBook.price);
  };

  return (
    <div>
      <AppHeader />
      <BookListItem book={exampleBooks[0]} onBookClicked={onBookClicked} />
      <BookListItem book={exampleBooks[1]} onBookClicked={onBookClicked} />
    </div>
  );
}

export default App;
