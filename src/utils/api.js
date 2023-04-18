import axios from 'axios';

const reviews = axios.create({
    baseURL: "https://nc-games-2enb.onrender.com/api/reviews"
})

export const fetchReviews = () => {
    return reviews
    .get(`/`)
    .then(({ data }) => {
        return data.reviews;
    })
}