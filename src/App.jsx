import { useState } from "react";

import Login from "./pages/Login/login";

import PageLayout from "./components/pageLayout/pageLayout";

import Dashboard from "./pages/Dashboard/dashboard";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLoginSuccess() {
        setLoggedIn(true);
    }

    if (!loggedIn) {
        return (
            <Login
                onLoginSuccess={handleLoginSuccess}
            />
        );
    }

    return (
        <PageLayout>
            <Dashboard />
        </PageLayout>
    );
}

export default App;