import { useState } from "react";
import { AppHeader } from "./commponents/AppHeader";
import { Counter, CounterProps } from "./commponents/Counter";

import "./index.css";
import { ThemeProvider } from "./domain/theme";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  const onCountChanged: CounterProps["onCountChanged"] = (count) =>
    setCount(count);

  return (
    <>
      <ThemeProvider>
        <AppHeader count={count} />
        <Counter count={count} onCountChanged={onCountChanged} />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
