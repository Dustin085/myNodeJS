function Navbar() {
    return (
        <header className="navbar">
            <h1 className="logo">
                <a href="/" className="link">Net Ninja Demo</a>
            </h1>
            <div className="link-box">
                <a href="/" className="link">Home</a>
                <a href="/create" className="link" style={{
                    color: "white",
                    backgroundColor: "rgb(163, 71, 86)",
                    padding: "8px 16px",
                    borderRadius: "10px"
                }}>New Blog</a>
            </div>
        </header>
    );
}

export default Navbar;