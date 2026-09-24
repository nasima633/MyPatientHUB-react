import "./sidebar.css";

function Sidebar({ isOpen, searchText, onNavClick }) {

    const navItems = [
        {
            id: "nav-dashboard",
            label: "Dashboard",
            icon: "▣",
            page: "dashboard",
            active: true,
        },
        {
            id: "nav-appointments",
            label: "Appointments",
            icon: "▤",
            page: "appointments",
        },
        {
            id: "nav-find-doctor",
            label: "Find Doctor",
            icon: "♙",
            page: "find-doctor",
            href: "/find-doctor",
        },
        {
            id: "nav-find-clinic",
            label: "Find Clinic",
            icon: "🏥",
            page: "find-clinic",
            href: "/find-clinic",
        },
        {
            id: "nav-chat",
            label: "Chat",
            icon: "▤",
            page: "chat",
        },
        {
            id: "nav-marketplace",
            label: "Find MarketPlace",
            icon: "▤",
            page: "marketplace",
        },
        {
            id: "nav-pharmacy",
            label: "Find Pharmacy",
            icon: "▣",
            page: "pharmacy",
        },
        {
            id: "nav-dependents",
            label: "My Dependents",
            icon: "▤",
            page: "dependents",
        },
        {
            id: "nav-account",
            label: "My Account",
            icon: "⚒",
            page: "account",
        },
        {
            id: "nav-settings",
            label: "Settings",
            icon: "⚙",
            page: "settings",
        },
    ];


    const filteredItems = navItems.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <nav
            className={`sidebar-navigation ${isOpen ? "open" : ""}`}
            id="sidebar-navigation"
            aria-label="Main navigation"
        >

            <div
                id="sidebar-logo"
                className="sidebar-logo"
            >

                <div
                    id="logo-mark"
                    className="logo-mark"
                >
                    M<span>HUB</span>
                </div>

                <span id="brand-name">
                    MyPatientHUB
                </span>

            </div>


            {filteredItems.map((item) => (

                <a
                    key={item.id}
                    href={item.href || `#${item.page}`}
                    id={item.id}
                    className={`nav-item ${item.active ? "active" : ""}`}
                    data-page={item.page}
                    onClick={onNavClick}
                >

                    <span className="nav-icon">
                        {item.icon}
                    </span>

                    <span className="nav-label">
                        {item.label}
                    </span>

                </a>

            ))}


            <button
                id="help-button"
                className="help-button"
                type="button"
                aria-label="Help"
                onClick={() =>
                    alert("Help feature will be added in the future.")
                }
            >
                ?
            </button>

        </nav>
    );
}

export default Sidebar;