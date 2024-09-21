import { Outlet, useNavigate } from "react-router-dom";
import { TabBar, Badge } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import "./index.scss";

const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "消息",
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "personalCenter",
    title: "我的",
    icon: <UserOutline />,
  },
];

const Layout = () => {
  const navigate = useNavigate();
  const onTabChange = (key) => {
    navigate(key);
  };

  return (
    <div>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <TabBar onChange={onTabChange}>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            ></TabBar.Item>
          ))}
        </TabBar>
      </div>
    </div>
  );
};
export default Layout;
