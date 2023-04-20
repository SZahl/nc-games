import { Link } from "react-router-dom";

const UsersButton = () => {
    return (
        <div>
            <Link to='/users' className="usersLink">
            <p>View all of our active users</p>
            </Link>
        </div>
    )
}

export default UsersButton;