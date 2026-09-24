import { useState } from "react";
import "./header.css";

function Header({ onMenuClick }) {
  const [searchText, setSearchText] = useState("");

  function handleNotifications() {
    alert("This feature will be added in the future.");
  }

  function handleSettings() {
    alert("This feature will be added in future!");
  }

  function handleLogout() {
    const confirmLogOut = confirm("ARE YOU SURE TO LOG OUT ?");

    if (confirmLogOut) {
      window.location.href = "/login";
    }
  }

  return (
    <header className="dashboard-header" id="dashboard-header">
      <div className="header-left" id="header-left">
        <div className="info-left-header" id="info-left-header">
          <span id="info-home">⌂</span>
          <span id="info-separator">/</span>
          <span id="info-current">Dashboard</span>
        </div>

        <h1 id="dashboard-title">
          Dashboard
        </h1>
      </div>

      <button
        id="menu-button"
        className="menu-button"
        type="button"
        aria-label="Toggle sidebar"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <div className="header-right" id="header-right">
        <div className="search-box" id="search-box">
          <span id="search-icon">
            🔎
          </span>

          <input
            type="search"
            id="search-input"
            className="search-input"
            placeholder="Type here..."
            aria-label="Search navigation"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

        <button
          id="logout-button"
          className="header-button"
          type="button"
          onClick={handleLogout}
        >
          👤 Log out
        </button>

        <button
          id="header-settings-button"
          className="icon-button"
          type="button"
          aria-label="Settings"
          onClick={handleSettings}
        >
          ⚙
        </button>

        <button
          id="notifications-button"
          className="icon-button"
          type="button"
          aria-label="Notifications"
          onClick={handleNotifications}
        >
          🔔
        </button>
      </div>
    </header>
  );
}

export default Header;