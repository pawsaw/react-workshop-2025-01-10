import { useBooks } from "../../domain/book";
import { useTheme } from "../../domain/theme";

export interface AppHeaderProps {
  count: number;
}

export const AppHeader = ({ count }: AppHeaderProps) => {
  const { books } = useBooks();
  const { primaryColor } = useTheme();
  return (
    <h1 className="app-header" style={{ color: primaryColor }}>
      Bookmonkey ({books?.length ?? 0} books) (counter value: {count})
    </h1>
  );
};
