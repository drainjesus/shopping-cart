import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css"; // Corrected import

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Kadayawan Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="dashboard-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="dashboard-link">
              Order
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
