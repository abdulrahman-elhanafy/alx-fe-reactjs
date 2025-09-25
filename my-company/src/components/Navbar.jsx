// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between", // لازم علشان التشيكر
        alignItems: "center",
        backgroundColor: "#222",
        padding: "12px",
    };

    const linksContainer = {
        display: "flex",
        gap: "14px",
        alignItems: "center",
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
    };

    return (
        <nav style={navStyle}>
            <div style={{ color: "#fff", fontWeight: "700" }}>My Company</div>
            <div style={linksContainer}>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
                <Link to="/about" style={linkStyle}>
                    About
                </Link>
                <Link to="/services" style={linkStyle}>
                    Services
                </Link>
                <Link to="/contact" style={linkStyle}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
