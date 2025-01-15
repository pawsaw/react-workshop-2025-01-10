import { useDispatch, useSelector } from "react-redux";
import {
  counterSelector,
  decrement,
  increment,
} from "../domain/counter/store/counterSlice";

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(counterSelector);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
