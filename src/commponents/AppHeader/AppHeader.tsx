import { useSelector } from "react-redux";
import { useBooks } from "../../domain/book";
import { useTheme } from "../../domain/theme";
import { counterSelector } from "../../domain/counter/store/counterSlice";

export const AppHeader = () => {
  const { books } = useBooks();
  const { primaryColor } = useTheme();
  const { count } = useSelector(counterSelector);
  return (
    <h1 className="app-header" style={{ color: primaryColor }}>
      Bookmonkey ({books?.length ?? 0} books) (counter value: {count})
    </h1>
  );
};
