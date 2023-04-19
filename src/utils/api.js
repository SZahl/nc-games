import axios from 'axios';

const reviews = axios.create({
    baseURL: "https://nc-games-2enb.onrender.com/api/"
})

export const fetchReviews = () => {
    return reviews
    .get(`/reviews`)
    .then(({ data }) => {
        return data.reviews;
    })
}

const fetchReviewByID = (review_id) => {
    return reviews
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
        return data.review[0]
    })
}
export default fetchReviewByID;


export const fetchComments = (review_id) => {
    return reviews
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
        return data.comments
    })
}