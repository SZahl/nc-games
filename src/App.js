import './App.css';
import DetailedReview from './Components/DetailedReview.jsx';
import Header from './Components/Header.jsx';
import Reviews from './Components/Reviews.jsx';
import { Route, Routes } from "react-router-dom";
import Users from './Components/Users';
import { useState } from 'react';
import { fetchUsers } from './utils/api';


function App() {

const [loggedInUser, setLoggedInUser] = useState(null)

const signOut = () => {
  setLoggedInUser(null);
}

const pretendToBeUser = (username) => {
  fetchUsers().then((response) => {
    for (let i = 0; i < response.length; i++) {
      if(response[i].username === username) {
        setLoggedInUser({
          username: response[i].username,
          avatar_url: response[i].avatar_url
        })
      }
    }
  })
  .catch((error) => {
    console.log('error', error)
  })
}

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} signOut={signOut} />
      <Routes>

      <Route path="/" element={<Reviews />} />
      <Route path="/reviews/:review_id" element={<DetailedReview loggedInUser={loggedInUser} />} />
      <Route path="/users" element={<Users pretendToBeUser={pretendToBeUser}/>} />

      </Routes>
    </div>
  );
}

export default App;
