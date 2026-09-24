import { useState } from "react";

import Header from "../header/header";

import Sidebar from "../sidebar/sidebar";

import Footer from "../footer/footer";

import "./pageLayout.css";

function PageLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [searchText, setSearchText] = useState("");

    function handleMenuClick() {
        setSidebarOpen(!sidebarOpen);
    }

    function handleSearchChange(value) {
        setSearchText(value);
    }

    function handleNavClick() {
        if (window.innerWidth <= 900) {
            setSidebarOpen(false);
        }
    }

    return (
        <div className="page-layout">

            <Header
                onMenuClick={handleMenuClick}
                searchText={searchText}
                onSearchChange={handleSearchChange}
            />

            <Sidebar
                isOpen={sidebarOpen}
                searchText={searchText}
                onNavClick={handleNavClick}
            />

            <main className="page-content">
                {children}
            </main>

            <Footer />

        </div>
    );
}

export default PageLayout;