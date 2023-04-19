import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchReviewByID from '../utils/api'
// import { format } from 'date-fns'

const DetailedReview = () => {

    
    const { review_id } = useParams();
    
    const [isLoading, setIsLoading] = useState(true);
    const [currentReviewByID, setCurrentReviewByID] = useState([]);
    
    useEffect(() => {
    setIsLoading(true);
    fetchReviewByID(review_id).then((response) => {
        setIsLoading(false);
        setCurrentReviewByID(response);
        
    })
    .catch((error) => {
        console.log('error', error)
    })
}, [review_id]);

if (isLoading) {
    return <h3>Reviews Loading...</h3>;
  }

console.log(currentReviewByID)

    return (
        <div>
            <p className='reviewTitle'>{currentReviewByID.title}</p>
            <p>Designed by {currentReviewByID.designer}</p>
            <p>Written by {currentReviewByID.owner}</p>
            <p>{currentReviewByID.review_body}</p>
            <p>Category :- {currentReviewByID.category}</p>
            <p>Posted at {currentReviewByID.created_at}</p>
            <p>Current votes :- {currentReviewByID.votes}</p>
            <img src={currentReviewByID.review_img_url} alt='gameplay depiction'/>
        </div>
    )
}

export default DetailedReview;


// installed format as dependency - come back to date formatting