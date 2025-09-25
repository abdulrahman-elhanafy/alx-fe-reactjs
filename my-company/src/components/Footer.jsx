function Footer() {
    return (
        <footer
            style={{
                textAlign: "center",
                padding: "12px",
                backgroundColor: "#f1f1f1",
                color: "black",
            }}>
            <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
