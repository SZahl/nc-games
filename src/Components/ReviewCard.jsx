import BriefReviewInfo from "./Reviews";
import { useState, useEffect } from 'react'; 
import Sort from "./Sort";
import UsersButton from "./UsersButton";
import { fetchReviews } from "../utils/api";

const ReviewParent = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentReviews, setCurrentReviews] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchReviews().then((response) => {
            setIsLoading(false);
            setCurrentReviews(response);
        })
        .catch((error) => {
            console.log('error', error)
        })
    }, []);

    if (isLoading) {
        return <h3>Reviews Loading...</h3>;
      }

    return (
        <div>
            <Sort />
            <UsersButton />
            <BriefReviewInfo reviews={currentReviews}/>
        </div>
    )
}

export default ReviewParent;