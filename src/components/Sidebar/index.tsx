import { ReactElement } from "react";
import { Flex, Menu } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { SidebarContainer } from "./styles";
import { ThemeSwitcher } from "src/theme/ThemeSwitcher";
import { ROUTES } from "src/router/constants";

export const Sidebar = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <SidebarContainer collapsed={true} collapsedWidth={86}>
      <Flex
        style={{ height: "100%", padding: "16px 0" }}
        vertical
        justify="space-between"
        align="center">
        <Menu
          style={{ background: "var(--ant-color-primary-bg)" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <CheckSquareTwoTone />,
              label: "Задачи",
              onClick: () => navigate(ROUTES.root.path)
            }
          ]}
        />
        <Flex align="center" justify="center">
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </SidebarContainer>
  );
};
