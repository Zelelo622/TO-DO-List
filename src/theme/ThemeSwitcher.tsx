import { ReactElement, useContext } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { ThemeContext } from "./ThemeContext";
import { ThemeSwitcherStyled, ToggleCircle } from "./styles";

export const ThemeSwitcher = (): ReactElement => {
  const ctx = useContext(ThemeContext);

  return (
    <ThemeSwitcherStyled onClick={() => ctx.changeTheme()}>
      <div className="icon-wrapper">
        <SunOutlined style={{ fontSize: "16px" }} />
      </div>
      <div className="icon-wrapper">
        <MoonOutlined style={{ fontSize: "16px" }} />
      </div>
      <ToggleCircle isDark={ctx.theme === "dark"} />
    </ThemeSwitcherStyled>
  );
};
