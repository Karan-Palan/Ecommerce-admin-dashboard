import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input
            type="text"
            placeholder="Search for data, users and more"
          />{" "}
          <img src={userImg} alt="" />
          <FaRegBell />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={653205}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-12}
            amount={false}
            value={2718}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={32}
            amount={false}
            value={19562}
            heading="Transactions"
            color="rgb(255, 196, 0)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> -{percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
          ${color} ${(percent / 100) * 360}deg, 
          rgba(255, 255, 255, 0.5) ${(percent / 100) * 360}deg
        )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
