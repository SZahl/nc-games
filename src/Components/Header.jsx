import { Link } from "react-router-dom";
import { SignedInUser } from "./SignedInUser";

const Header = ({ loggedInUser, signOut }) => {
    return (
        <header className="headerContainer">
            <SignedInUser loggedInUser={loggedInUser} signOut={signOut}/>
            <section className="headerText" >
            <Link to='/' className="homeLink">
            <h1 className="mainHeader" >NC Games!</h1>
            </Link>
            <h2 className="headerMessage">Read all about the good, the bad, and the ugly!</h2>
            </section>
        </header>
    )
}

export default Header;