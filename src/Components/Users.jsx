import UsersCard from "./UsersCard";
import { useState, useEffect } from 'react';
import { fetchUsers } from "../utils/api";


const Users = ({ pretendToBeUser }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentUsers, setCurrentUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers().then((response) => {
            setIsLoading(false);
            setCurrentUsers(response);
        })
        .catch((error) => {
            console.log('error', error)
        })
    }, [])


    if (isLoading) {
        return <h3>Users Loading...</h3>;
      }
    return (
        <div>
            <h3 id="currentUsersHeader">Our current users</h3>
            <UsersCard users={currentUsers} pretendToBeUser={pretendToBeUser}/>
        </div>
    )
}

export default Users;