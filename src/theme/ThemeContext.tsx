import { createContext } from "react";
import { IThemeContext } from "./types";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  changeTheme: () => null
});
