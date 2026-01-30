import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import {
  FaFileInvoice,
  FaUsers,
  FaBuilding,
  FaBook,
  FaTags,
  FaLayerGroup,
  FaExclamationCircle,
  FaFileAlt,
  FaWarehouse,
  FaUserFriends,
  FaExchangeAlt,
  FaSignOutAlt
} from "react-icons/fa";

function Menu({ isOpen }) {
  return (
    <aside className={`side-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-title">Menu</div>

      <MenuItem icon={<FaFileInvoice />} color="#00bcd4" label="Invoices" />
      <MenuItem icon={<FaUsers />} color="#4caf50" label="Customers" />
      <MenuItem icon={<FaBuilding />} color="#03a9f4" label="My Business" />
      <MenuItem icon={<FaBook />} color="#00acc1" label="Invoice Journal" />
      <MenuItem icon={<FaTags />} color="#2ecc71" label="Price List" active />
      <MenuItem icon={<FaLayerGroup />} color="#26c6da" label="Multiple Invoicing" />
      <MenuItem icon={<FaExclamationCircle />} color="#ec407a" label="Unpaid Invoices" />
      <MenuItem icon={<FaFileAlt />} color="#fbc02d" label="Offer" />
      <MenuItem icon={<FaWarehouse />} color="#80cbc4" label="Inventory Control" />
      <MenuItem icon={<FaUserFriends />} color="#42a5f5" label="Member Invoicing" />
      <MenuItem icon={<FaExchangeAlt />} color="#90caf9" label="Import / Export" />
      <MenuItem icon={<FaSignOutAlt />} color="#b0bec5" label="Log out" />
    </aside>
  );
}

export default Menu;
