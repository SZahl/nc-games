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

export const fetchReviewByID = (review_id) => {
    return reviews
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
        return data.review[0]
    })
}


export const fetchComments = (review_id) => {
    return reviews
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
        return data.comments
    })
}

export const addVotes = (review_id) => {
    const increment = { inc_votes: 1 };
    return reviews
    .patch(`/reviews/${review_id}`, increment)
    .then(() => {
        return;
    })
}

export const postNewComment = (review_id, wholeComment) => {
    return reviews
    .post(`reviews/${review_id}/comments`, wholeComment)
    .then((response) => {
        return response.data.comment
    })
}