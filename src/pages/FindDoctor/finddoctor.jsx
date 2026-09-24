
import { useState } from "react";

import "./finddoctor.css";

function FindDoctor() {

    // Controls which Special Service dropdown is open.
    const [openService, setOpenService] = useState(null);

    // Controls which Specialty dropdown is open.
    const [openSpecialty, setOpenSpecialty] = useState(null);

    // Stores the doctor's name or speciality entered by the user.
    const [doctorName, setDoctorName] = useState("");

    // Stores the location entered by the user.
    const [location, setLocation] = useState("");


    // Opens one Special Service and closes the others.
    function handleServiceClick(serviceName) {

        if (openService === serviceName) {
            setOpenService(null);
        } else {
            setOpenService(serviceName);
        }

    }


    // Opens one Specialty and closes the others.
    function handleSpecialtyClick(specialtyName) {

        if (openSpecialty === specialtyName) {
            setOpenSpecialty(null);
        } else {
            setOpenSpecialty(specialtyName);
        }

    }


    // Handles the Current Location button.
    function handleCurrentLocation() {

        alert("google maps will be add in the future!! 😊");

    }


    // Handles the Doctor Search button.
    function handleDoctorSearch() {

        const trimmedDoctorName = doctorName.trim();

        const trimmedLocation = location.trim();


        if (
            trimmedDoctorName === "" &&
            trimmedLocation === ""
        ) {

            alert(
                "Please enter a doctor name, speciality, or location."
            );

            return;
        }


        if (
            trimmedDoctorName !== "" &&
            trimmedLocation !== ""
        ) {

            alert(
                "Searching for " +
                trimmedDoctorName +
                " near " +
                trimmedLocation +
                "."
            );

        } else if (trimmedDoctorName !== "") {

            alert(
                "Searching for " +
                trimmedDoctorName +
                "."
            );

        } else {

            alert(
                "Searching near " +
                trimmedLocation +
                "."
            );

        }

    }


    return (
        <main className="find-doctor-main">

            {/* =========================
                DOCTOR SEARCH HERO
            ========================== */}

            <section className="doctor-hero">

                <div className="doctor-hero-content">

                    <h2>
                        Find a Doctor
                    </h2>

                    <p>
                        Search Doctors and schedule an appointment
                    </p>


                    <div className="doctor-search">

                        <input
                            type="text"
                            placeholder="Search a doctor by name, speciality"
                            value={doctorName}
                            onChange={(event) =>
                                setDoctorName(event.target.value)
                            }
                        />


                        <input
                            type="text"
                            placeholder="Zip Code or Neighborhood"
                            value={location}
                            onChange={(event) =>
                                setLocation(event.target.value)
                            }
                        />


                        <button
                            type="button"
                            id="current-button"
                            className="current-button"
                            onClick={handleCurrentLocation}
                        >
                            Current
                        </button>


                        <button
                            type="button"
                            id="doctor-search-button"
                            className="doctor-search-button"
                            onClick={handleDoctorSearch}
                        >
                            SEARCH
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                SPECIAL SERVICES
            ========================== */}

            <section className="doctor-section">

                <h2>
                    Special Services
                </h2>


                <div className="services-grid">


                    {/* PRIMARY CARE */}

                    <div
                        className={`service-item ${
                            openService === "primary"
                                ? "open"
                                : ""
                        }`}
                    >

                        <div className="service-card">

                            <div className="service-icon primary-icon">
                                ❤
                            </div>


                            <div className="service-text">

                                <h3>
                                    Primary Care and Internal MD
                                </h3>

                                <p>
                                    Find doctors for general health
                                    and internal medicine.
                                </p>

                            </div>


                            <button
                                type="button"
                                className="dropdown-button"
                                onClick={() =>
                                    handleServiceClick("primary")
                                }
                                aria-label="Open Primary Care details"
                            >
                                ↓
                            </button>

                        </div>


                        <div className="service-dropdown">

                            <p>
                                Primary care doctors provide general
                                healthcare, regular checkups, and
                                internal medicine services.
                            </p>

                        </div>

                    </div>


                    {/* EMERGENCY CARE */}

                    <div
                        className={`service-item ${
                            openService === "emergency"
                                ? "open"
                                : ""
                        }`}
                    >

                        <div className="service-card">

                            <div className="service-icon emergency-icon">
                                ✚
                            </div>


                            <div className="service-text">

                                <h3>
                                    Emergency Care
                                </h3>

                                <p>
                                    Find doctors and services for
                                    urgent medical situations.
                                </p>

                            </div>


                            <button
                                type="button"
                                className="dropdown-button"
                                onClick={() =>
                                    handleServiceClick("emergency")
                                }
                                aria-label="Open Emergency Care details"
                            >
                                ↓
                            </button>

                        </div>


                        <div className="service-dropdown">

                            <p>
                                Emergency care is available for
                                urgent and serious medical needs.
                            </p>

                        </div>

                    </div>


                    {/* IMAGING SERVICES */}

                    <div
                        className={`service-item ${
                            openService === "imaging"
                                ? "open"
                                : ""
                        }`}
                    >

                        <div className="service-card">

                            <div className="service-icon imaging-icon">
                                ◉
                            </div>


                            <div className="service-text">

                                <h3>
                                    Imaging Services
                                </h3>

                                <p>
                                    Find imaging and diagnostic
                                    services near you.
                                </p>

                            </div>


                            <button
                                type="button"
                                className="dropdown-button"
                                onClick={() =>
                                    handleServiceClick("imaging")
                                }
                                aria-label="Open Imaging Services details"
                            >
                                ↓
                            </button>

                        </div>


                        <div className="service-dropdown">

                            <p>
                                Imaging services include diagnostic
                                procedures used to help doctors
                                understand medical conditions.
                            </p>

                        </div>

                    </div>


                    {/* URGENT CARE */}

                    <div
                        className={`service-item ${
                            openService === "urgent"
                                ? "open"
                                : ""
                        }`}
                    >

                        <div className="service-card">

                            <div className="service-icon urgent-icon">
                                !
                            </div>


                            <div className="service-text">

                                <h3>
                                    Urgent Care
                                </h3>

                                <p>
                                    Find healthcare for conditions
                                    that need quick attention.
                                </p>

                            </div>


                            <button
                                type="button"
                                className="dropdown-button"
                                onClick={() =>
                                    handleServiceClick("urgent")
                                }
                                aria-label="Open Urgent Care details"
                            >
                                ↓
                            </button>

                        </div>


                        <div className="service-dropdown">

                            <p>
                                Urgent care provides quick medical
                                attention for conditions that are
                                not life-threatening emergencies.
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    SPECIALTIES
                ========================== */}

                <div className="specialty-section">

                    <h2>
                        Find Doctors By Specialty
                    </h2>

                    <p className="specialty-description">
                        Search for doctors based on their medical specialty.
                    </p>


                    <div className="specialty-grid">


                        {/* ANESTHESIOLOGY */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "anesthesiology"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick(
                                        "anesthesiology"
                                    )
                                }
                            >
                                <span>
                                    Anesthesiology
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in anesthesia
                                    and pain management.
                                </p>

                            </div>

                        </div>


                        {/* DERMATOLOGY */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "dermatology"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick(
                                        "dermatology"
                                    )
                                }
                            >
                                <span>
                                    Dermatology
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in skin,
                                    hair, and nail conditions.
                                </p>

                            </div>

                        </div>


                        {/* EMERGENCY MEDICINE */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "emergency-medicine"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick(
                                        "emergency-medicine"
                                    )
                                }
                            >
                                <span>
                                    Emergency medicine
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors trained to handle urgent
                                    and emergency medical conditions.
                                </p>

                            </div>

                        </div>


                        {/* NEUROLOGY */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "neurology"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick("neurology")
                                }
                            >
                                <span>
                                    Neurology
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in the brain,
                                    nerves, and nervous system.
                                </p>

                            </div>

                        </div>


                        {/* CONSULTATION */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "consultation"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick(
                                        "consultation"
                                    )
                                }
                            >
                                <span>
                                    Consultation
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Find doctors available for
                                    medical consultations.
                                </p>

                            </div>

                        </div>


                        {/* OPHTHALMOLOGY */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "ophthalmology"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick(
                                        "ophthalmology"
                                    )
                                }
                            >
                                <span>
                                    Ophthalmology
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in eye and
                                    vision care.
                                </p>

                            </div>

                        </div>


                        {/* CARDIOLOGY */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "cardiology"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick("cardiology")
                                }
                            >
                                <span>
                                    Cardiology
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in heart
                                    and cardiovascular health.
                                </p>

                            </div>

                        </div>


                        {/* PEDIATRICS */}

                        <div
                            className={`specialty-item ${
                                openSpecialty === "pediatrics"
                                    ? "open"
                                    : ""
                            }`}
                        >

                            <button
                                type="button"
                                className="specialty-button"
                                onClick={() =>
                                    handleSpecialtyClick("pediatrics")
                                }
                            >
                                <span>
                                    Pediatrics
                                </span>

                                <span className="specialty-arrow">
                                    ↓
                                </span>

                            </button>


                            <div className="specialty-content">

                                <p>
                                    Doctors specializing in the health
                                    and medical care of children.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default FindDoctor;
