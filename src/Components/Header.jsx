import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/' className="homeLink">
            <h1>NC Games!</h1>
            </Link>
            <h2>Read all about the good, the bad, and the ugly!</h2>
        </div>
    )
}

export default Header;