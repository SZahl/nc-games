import ReviewCard from "./ReviewCard";
import { useState, useEffect } from 'react'; 
import Sort from "./Sort";
import UsersButton from "./UsersButton";
import { fetchReviews } from "../utils/api";
import { CategoryFilter } from "./CategoryFilter";

const Reviews = () => {

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
            <CategoryFilter />
            <UsersButton />
            <ReviewCard reviews={currentReviews}/>
        </div>
    )
}

export default Reviews;