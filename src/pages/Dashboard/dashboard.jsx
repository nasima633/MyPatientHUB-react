import "./dashboard.css";

import promotionByClinics from "../../assets/images/promotion_by_clinics.png";
import promotionByPharmacies from "../../assets/images/promotion_by_pharmacies.png";
import smartMarketUsageByApp from "../../assets/images/smart_market_usage_by_app.png";
import healthIndex from "../../assets/images/health_index.png";

function Dashboard() {
    return (
        <>
            <section className="dashboard-section">

                <h2 id="dashboard-welcome-txt">
                    Welcome to MyPatientHUB!
                </h2>

                <div className="dashboard-cards">

                    <div className="cards">
                        <img
                            src={promotionByClinics}
                            alt="Promotion by clinics"
                        />
                    </div>

                    <div className="cards">
                        <img
                            src={promotionByPharmacies}
                            alt="Promotion by pharmacies"
                        />
                    </div>

                    <div className="cards">
                        <img
                            src={smartMarketUsageByApp}
                            alt="Smart market usage by app"
                        />
                    </div>

                    <div className="cards">
                        <img
                            src={healthIndex}
                            alt="Health index"
                        />
                    </div>

                </div>

            </section>
        </>
    );
}

export default Dashboard;