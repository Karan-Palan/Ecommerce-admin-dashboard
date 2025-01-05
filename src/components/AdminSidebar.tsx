import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon2Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuGroups = [
    {
      title: "Dashboard",
      items: [
        { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
        { url: "/admin/product", text: "Products", Icon: RiShoppingBag3Fill },
        { url: "/admin/customer", text: "Customer", Icon: IoIosPeople },
        {
          url: "/admin/transaction",
          text: "Transaction",
          Icon: AiFillFileText,
        },
        {
          url: "/admin/coupon",
          text: "Issue Coupon",
          Icon: RiCoupon2Fill,
        },
      ],
    },
    {
      title: "Charts",
      items: [
        { url: "/admin/chart/bar", text: "Bar", Icon: FaChartBar },
        { url: "/admin/chart/pie", text: "Pie", Icon: FaChartPie },
        { url: "/admin/chart/line", text: "Line", Icon: FaChartLine },
      ],
    },
  ];

  return (
    <aside>
      <h2>Logo</h2>
      {menuGroups.map((group, index) => (
        <MenuGroup
          key={index}
          title={group.title}
          items={group.items}
          location={location}
        />
      ))}
    </aside>
  );
};

const MenuGroup = ({
  title,
  items,
  location,
}: {
  title: string;
  items: MenuItem[];
  location: Location;
}) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {items.map((item) => (
          <MenuItemComponent key={item.url} item={item} location={location} />
        ))}
      </ul>
    </div>
  );
};

interface MenuItem {
  url: string;
  text: string;
  Icon: IconType;
}
const MenuItemComponent = ({
  item,
  location,
}: {
  item: MenuItem;
  location: Location;
}) => {
  const isActive = location.pathname.includes(item.url);

  return (
    <li
      style={{
        backgroundColor: isActive ? "rgba(0,115,255,0.1)" : "white",
      }}
    >
      <Link
        to={item.url}
        style={{
          color: isActive ? "rgb(0,115,255)" : "black",
        }}
      >
        <item.Icon /> {item.text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
