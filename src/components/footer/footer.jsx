import "./footer.css";

function Footer() {
    return (
        <footer className="dashboard-footer">

            <p id="copyright-text">
                Copyright © 2026{" "}
                <strong>MyPatientHUB</strong>
                {" "}Made with
                <span id="heart-icon">♥</span>
                for better healthcare.
            </p>

            <nav id="footer-navigation">

                <a href="#">
                    About Us
                </a>

                <a href="#">
                    Blog
                </a>

                <a href="#">
                    Contact
                </a>

            </nav>

        </footer>
    );
}

export default Footer;