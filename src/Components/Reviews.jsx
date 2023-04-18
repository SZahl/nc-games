
const BriefReviewInfo = ({reviews}) => {

    return (
        <>
        <h3>Recent Reviews</h3>
        <ul id="topReviews">
            {
                reviews.map((eachReview) => {
                    return (
                        <li key={eachReview.review_id} className="singleReview">
                            <p className="reviewTitle">{eachReview.title}</p>
                            <p>by {eachReview.owner}</p>
                            <p>{eachReview.review_body.length > 250 ? `${eachReview.review_body.substring(0, 250)}...` : eachReview.review_body}</p>
                            <p>Posted at {eachReview.created_at}</p>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default BriefReviewInfo;