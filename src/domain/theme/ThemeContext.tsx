import React, { CSSProperties, useContext, useState } from "react";
import { Theme } from "./Theme";

const ThemeContext = React.createContext<Theme>({
  primaryColor: "blue",
  setPrimaryColor: () => {},
});

export const useTheme = () => useContext<Theme>(ThemeContext);

export interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [primaryColor, setPrimaryColor] =
    useState<CSSProperties["color"]>("blue");
  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
