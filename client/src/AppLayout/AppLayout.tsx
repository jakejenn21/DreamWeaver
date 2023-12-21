import React, { useState } from "react";
import {
  PlusCircleOutlined,
  EditOutlined,
  BranchesOutlined,
  CloudFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import "./AppLayout.css";
import CreateDream from "../CreateDream/CreateDream";
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
  getItem("Create Dream", "1", <PlusCircleOutlined />),
  getItem("Manage Dreams", "2", <EditOutlined />),
  getItem("Weave Dreams", "3", <BranchesOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
      {selectedMenuItem === "1" && <CreateDream/>}
      {selectedMenuItem === "2" && <ManageDreams/>}
      {selectedMenuItem === "3" && <WeaveDreams/>}
    </Layout>
  );
};

export default AppLayout;
