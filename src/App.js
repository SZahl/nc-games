import './App.css';
import DetailedReview from './Components/DetailedReview.jsx';
import Header from './Components/Header.jsx';
import Reviews from './Components/Reviews.jsx';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      <Route path="/" element={<Reviews />} />
      <Route path="/reviews/:review_id" element={<DetailedReview />} />

      </Routes>
    </div>
  );
}

export default App;
