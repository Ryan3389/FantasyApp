import {Link} from "react-router-dom";

function Navbar() {
    return(
        <header>
            <nav>
                <p>Fantasy App Logo</p>
                <div className="nav-links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/homeruns"}>Home Runs</Link>
                    <Link to={"hits"}>Hits</Link>
                    <Link to={"/years"}>Years</Link>
                    <Link to={"/hof"}>Hall of Fame</Link>
                    <Link to={"/predict"}>Predict</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
