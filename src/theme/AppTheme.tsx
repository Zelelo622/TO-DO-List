import { PropsWithChildren, ReactElement, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { getSavedTheme } from "./helpers";
import { TGetSavedTheme } from "./types";
import { SELECTED_THEME_STORE_KEY } from "./constants";
import { ThemeContext } from "./ThemeContext";

export const AppTheme = ({ children }: PropsWithChildren): ReactElement => {
  const storedTheme = getSavedTheme();
  const [themeMode, setThemeMode] = useState<TGetSavedTheme>(storedTheme);

  const changeTheme = (): void => {
    if (storedTheme === "light") {
      setThemeMode("dark");
      localStorage.setItem(SELECTED_THEME_STORE_KEY, "dark");
    } else {
      setThemeMode("light");
      localStorage.setItem(SELECTED_THEME_STORE_KEY, "light");
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        cssVar: true
      }}>
      <ThemeContext.Provider value={{ theme: themeMode, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};
