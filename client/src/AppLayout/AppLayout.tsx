import React, { useState } from "react";
import {
  EditOutlined,
  BranchesOutlined,
  CloudFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import "./AppLayout.css";
import ManageDreams from "../ManageDreams/ManageDreams";
import WeaveDreams from "../WeaveDreams/WeaveDreams";

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
  getItem("Manage Dreams", "1", <EditOutlined />),
  getItem("Weave Dreams", "2", <BranchesOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative'}}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="AppLayout_logo">
          <CloudFilled className="AppLayout_logo-icon" />
          {!collapsed && <> Dream Weaver </>}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={(info) => setSelectedMenuItem(info.key)}
        />
      </Sider>
      {selectedMenuItem === "1" && <ManageDreams/>}
      {selectedMenuItem === "2" && <WeaveDreams/>}
    </Layout>
  );
};

export default AppLayout;
