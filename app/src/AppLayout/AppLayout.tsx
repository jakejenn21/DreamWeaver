import React, { useState } from "react";
import {
  PlusCircleOutlined,
  EditOutlined,
  BranchesOutlined,
  CloudFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import './AppLayout.css';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Create Dream", "1", <PlusCircleOutlined />),
  getItem("Manage Dreams", "2", <EditOutlined />),
  getItem("Weave Dreams", "3", <BranchesOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="AppLayout_logo">
            <CloudFilled className="AppLayout_logo-icon"/>
            {!collapsed && <> Dream Weaver </>}
            </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default AppLayout;
