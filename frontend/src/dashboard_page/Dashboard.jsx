import { useState } from "react";
import "./Dashboard.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import PriceList from "./price_list/PriceList";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
      </div>

      <div className="dashboard-body">
        <Menu isOpen={menuOpen} />

        <div
          className="dashboard-content"
          onClick={() => setMenuOpen(false)}
        >
          <PriceList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
