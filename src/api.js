import axios from 'axios';

export const fetchReviews = () => {
    return axios("https://nc-games-2enb.onrender.com/api/reviews");
}