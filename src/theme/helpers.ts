import { SELECTED_THEME_STORE_KEY } from "./constants";
import { TGetSavedTheme } from "./types";

export const getSavedTheme = (): TGetSavedTheme => {
  if (localStorage.getItem(SELECTED_THEME_STORE_KEY)) {
    if (localStorage.getItem(SELECTED_THEME_STORE_KEY) === "dark") {
      return "dark";
    } else {
      return "light";
    }
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};
