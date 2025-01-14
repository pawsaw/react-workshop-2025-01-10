import { useState } from "react";
import { AppHeader } from "./commponents/AppHeader";
import { BookList } from "./commponents/BookList";
import { Counter, CounterProps } from "./commponents/Counter";
import { useBooks } from "./domain/book";

import "./index.css";
import { ThemeEditor } from "./commponents/ThemeEditor";
import { ThemeProvider } from "./domain/theme";

function App() {
  const { books, loading, reload } = useBooks();
  const [count, setCount] = useState(0);
  const onCountChanged: CounterProps["onCountChanged"] = (count) =>
    setCount(count);

  return (
    <>
      <ThemeProvider>
        <AppHeader count={count} />
        <ThemeEditor />
        <Counter count={count} onCountChanged={onCountChanged} />
        <button onClick={reload}>Reload</button>
        <div>
          {loading ? <span>Loading...</span> : <BookList books={books!} />}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
