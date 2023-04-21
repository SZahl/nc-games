
export const SignedInUser = ({ loggedInUser, signOut }) => {

    if(!loggedInUser) {
        return (
            <section>
                <p>Select a user from our users page!</p>
            </section>
        )
    }

console.log(loggedInUser)
    
    return (
        <section className="userProfile">
            <img src={loggedInUser.avatar_url} alt="signed in users avatar" />
            <p>You are signed in as :- {loggedInUser.username}</p>
            <button className="signOutButton" onClick={signOut}>Sign out</button>
        </section>
    )
}