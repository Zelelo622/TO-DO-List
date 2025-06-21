export type TGetSavedTheme = "light" | "dark";

export interface IThemeContext {
  theme: TGetSavedTheme;
  changeTheme: () => void;
}
