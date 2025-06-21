import { Layout } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "src/components";

export const LayoutPages = (): ReactElement => (
  <Layout style={{ height: "100vh" }}>
    <Layout>
      <Sidebar />
      <Layout.Content
        style={{
          overflow: "auto",
          height: "100%",
          background: "var(--ant-color-bg-container)",
          padding: "16px"
        }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  </Layout>
);
