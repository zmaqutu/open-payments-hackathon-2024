import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <h1 className="logo">Open Loans</h1>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Platform</a></li>
                </ul>
                <button className="btn">Login / Sign Up</button>
            </nav>
        </ div>
    )
}

export default NavBar;