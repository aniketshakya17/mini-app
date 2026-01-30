import { useState } from "react";
import "./Dashboard.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import PriceList from "./price_list/PriceList";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />

      <div className="dashboard-body">
        <Menu isOpen={menuOpen} />

        <div className="dashboard-content">
          <PriceList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
