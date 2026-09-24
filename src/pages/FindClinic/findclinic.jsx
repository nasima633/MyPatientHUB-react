
import { useState } from "react";

import "./findclinic.css";

function FindClinic() {

    const [clinicSearch, setClinicSearch] = useState("");

    const [locationFilter, setLocationFilter] = useState("all");

    const clinics = [
        {
            name: "Kabul Medical Center",
            location: "Kabul",
            services: [
                "General Medicine",
                "Laboratory",
                "Consultation"
            ],
            rating: "4.8"
        },
        {
            name: "City Health Clinic",
            location: "Kabul",
            services: [
                "Family Medicine",
                "Pediatrics",
                "Pharmacy"
            ],
            rating: "4.6"
        },
        {
            name: "Herat Family Clinic",
            location: "Herat",
            services: [
                "Family Medicine",
                "Pediatrics",
                "Dental"
            ],
            rating: "4.7"
        },
        {
            name: "Mazar Health Center",
            location: "Mazar-e-Sharif",
            services: [
                "Diagnostics",
                "Laboratory",
                "General Medicine"
            ],
            rating: "4.5"
        }
    ];


    const filteredClinics = clinics.filter((clinic) => {

        const nameMatches = clinic.name
            .toLowerCase()
            .includes(clinicSearch.trim().toLowerCase());

        const locationMatches =
            locationFilter === "all" ||
            clinic.location === locationFilter;

        return nameMatches && locationMatches;

    });


    function handleViewClinic() {
        alert("Clinic details will be added in the future.");
    }


    return (
        <main className="find-clinic-main">

            <section className="clinic-section">

                <div className="page-heading">

                    <h2>
                        Find Clinic
                    </h2>

                    <p>
                        Find the right clinic for your healthcare needs.
                    </p>

                </div>


                <div className="clinic-search-card">

                    <div className="search-field">

                        <label htmlFor="clinic-search">
                            Clinic Name
                        </label>

                        <input
                            type="text"
                            id="clinic-search"
                            placeholder="Search clinic by name"
                            value={clinicSearch}
                            onChange={(event) =>
                                setClinicSearch(event.target.value)
                            }
                        />

                    </div>


                    <div className="search-field">

                        <label htmlFor="location-filter">
                            Location
                        </label>

                        <select
                            id="location-filter"
                            value={locationFilter}
                            onChange={(event) =>
                                setLocationFilter(event.target.value)
                            }
                        >

                            <option value="all">
                                All Locations
                            </option>

                            <option value="Kabul">
                                Kabul
                            </option>

                            <option value="Herat">
                                Herat
                            </option>

                            <option value="Mazar-e-Sharif">
                                Mazar-e-Sharif
                            </option>

                            <option value="Kandahar">
                                Kandahar
                            </option>

                        </select>

                    </div>


                    <button
                        type="button"
                        id="search-clinic-button"
                        onClick={() => {
                            setClinicSearch(clinicSearch);
                        }}
                    >
                        SEARCH
                    </button>

                </div>


                <div className="results-header">

                    <div>

                        <h3>
                            Available Clinics
                        </h3>

                        <p>
                            Find clinics that match your needs.
                        </p>

                    </div>

                    <span id="results-count">
                        {filteredClinics.length} Clinics
                    </span>

                </div>


                <div className="clinic-grid">

                    {filteredClinics.map((clinic) => (

                        <div
                            className="clinic-card"
                            key={clinic.name}
                        >

                            <div className="clinic-card-top">

                                <div className="clinic-icon">
                                    🏥
                                </div>

                                <span className="verified">
                                    Verified
                                </span>

                            </div>


                            <h3>
                                {clinic.name}
                            </h3>


                            <p className="clinic-location">
                                📍 {clinic.location}
                            </p>


                            <div className="clinic-services">

                                {clinic.services.map((service) => (

                                    <span key={service}>
                                        {service}
                                    </span>

                                ))}

                            </div>


                            <div className="clinic-card-bottom">

                                <span className="rating">
                                    ⭐ {clinic.rating}
                                </span>


                                <button
                                    type="button"
                                    className="view-clinic"
                                    onClick={handleViewClinic}
                                >
                                    View Clinic
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default FindClinic;

