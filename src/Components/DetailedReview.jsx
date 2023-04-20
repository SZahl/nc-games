import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviewByID, addVotes } from '../utils/api'
import Comments from '../Components/Comments.jsx'

const DetailedReview = () => {

    const { review_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [currentReviewByID, setCurrentReviewByID] = useState([]);
    const [currentVotes, setCurrentVotes] = useState();
    const [buttonDisable, setButtonDisable] = useState(false);
    const [voteCastText, setVoteCastText] = useState()
    
    useEffect(() => {
    setIsLoading(true);
    fetchReviewByID(review_id).then((response) => {
        setIsLoading(false);
        setCurrentReviewByID(response);
        setCurrentVotes(response.votes)
    })
    .catch((error) => {
        console.log('error', error)
    })
}, [review_id]);

if (isLoading) {
    return <h3>Reviews Loading...</h3>;
  }

  const handleAddedVotes= () => {
    setCurrentVotes((currentVotes) => currentVotes + 1);

    addVotes(review_id).then(() => {
        setButtonDisable(true);
        setVoteCastText('Your vote has been added!')
    })
    .catch((error) => {
        setCurrentVotes((currentVotes) => currentVotes - 1)
        setVoteCastText('Error, please try again!')
    })
  }

    return (
        <div>
            <p className='reviewTitle'>{currentReviewByID.title}</p>
            <p>Designed by {currentReviewByID.designer}</p>
            <p>Written by {currentReviewByID.owner}</p>
            <p>{currentReviewByID.review_body}</p>
            <p>Category :- {currentReviewByID.category}</p>
            <p>Posted at {currentReviewByID.created_at}</p>
            <p>Current votes :- {currentVotes}</p>
            <button className="voteButton" disabled={buttonDisable} onClick={handleAddedVotes}>Vote for this review!</button><br />
            <p>{voteCastText}</p>
            <img src={currentReviewByID.review_img_url} alt='gameplay depiction'/>
            <Comments review_id={review_id}/>
        </div>
    )
}

export default DetailedReview;