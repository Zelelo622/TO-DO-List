import { ReactElement } from "react";
import { Flex, Menu } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { SidebarContainer } from "./styles";
import { ThemeSwitcher } from "src/theme/ThemeSwitcher";

export const Sidebar = (): ReactElement => (
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
            label: "Задачи"
          }
        ]}
      />
      <Flex align="center" justify="center">
        <ThemeSwitcher />
      </Flex>
    </Flex>
  </SidebarContainer>
);
