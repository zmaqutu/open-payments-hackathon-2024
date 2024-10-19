function NavBar() {
    return (
        <div className="nav-bar">
            <h1 className="logo">Open Loans</h1>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Platform</a></li>
            </ul>
            <button className="btn">Login / Sign Up</button>
        </ div>
    )
}

export default NavBar;