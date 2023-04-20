
const UsersCard = ({users}) => {

    return (
        <>
            <ul className="allUsers">
                {
                    users.map((eachUser) => {
                        return (
                            <li key={eachUser.username} className="singleUser">
                                <img src={eachUser.avatar_url} alt="users Avatar" className="usersAvatar"/>
                                <p>{eachUser.username}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default UsersCard;