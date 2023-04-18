import BriefReviewInfo from "./BriefReviewInfo";
import { useState, useEffect } from 'react'; 
import Sort from "./Sort";
import UsersButton from "./UsersButton";
import { fetchReviews } from "../api";

const ReviewParent = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentReviews, setCurrentReviews] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchReviews().then((response) => {
            setIsLoading(false);
            setCurrentReviews(response.data.reviews);
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