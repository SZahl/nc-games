
const UsersCard = ({users, pretendToBeUser}) => {

    return (
        <>
            <ul className="allUsers">
                {
                    users.map((eachUser) => {
                        return (
                            <li key={eachUser.username} className="singleUser">
                                <img src={eachUser.avatar_url} alt="users Avatar" className="usersAvatar"/>
                                <p>{eachUser.username}</p>
                                <button className="pretendToBeUserButton" onClick={() => {pretendToBeUser(eachUser.username)}}>Pretend to be {eachUser.username}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default UsersCard;