import { useTheme } from "../domain/theme";

export const ThemeEditor: React.FC = () => {
  const theme = useTheme();

  return (
    <div>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => theme.setPrimaryColor("blue")}
      ></button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => theme.setPrimaryColor("red")}
      ></button>
    </div>
  );
};
