import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ backgroundColor: "#222", padding: "12px" }}>
            <Link
                to="/"
                style={{
                    color: "#fff",
                    marginRight: "14px",
                    textDecoration: "none",
                }}>
                Home
            </Link>
            <Link
                to="/about"
                style={{
                    color: "#fff",
                    marginRight: "14px",
                    textDecoration: "none",
                }}>
                About
            </Link>
            <Link
                to="/services"
                style={{
                    color: "#fff",
                    marginRight: "14px",
                    textDecoration: "none",
                }}>
                Services
            </Link>
            <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}>
                Contact
            </Link>
        </nav>
    );
}

export default Navbar;
