import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);
  };

  return <button onClick={increment}>{count}</button>;
};
