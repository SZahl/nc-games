import { Link } from "react-router-dom";

const ReviewCard = ({reviews}) => {

    return (
        <>
        <h3>Recent Reviews</h3>
        <ul id="topReviews">
            {
                reviews.map((eachReview) => {
                    return (
                        <li key={eachReview.review_id} className="singleReview">
                            <Link to={`/reviews/${eachReview.review_id}`}>
                            <p className="reviewTitle">{eachReview.title}</p>
                            </Link>
                            <p>by {eachReview.owner}</p>
                            <p>{eachReview.review_body.length > 200 ? `${eachReview.review_body.substring(0, 200)}...` : eachReview.review_body}</p>
                            <p>Posted at {eachReview.created_at}</p>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default ReviewCard;