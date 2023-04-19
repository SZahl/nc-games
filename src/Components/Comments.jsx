import { useState, useEffect } from 'react';
import { fetchComments } from "../utils/api"
import CommentCard from './CommentCard.jsx'

const Comments = ({ review_id }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentComments, setCurrentComments] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchComments(review_id).then((response) => {
            setIsLoading(false);
            setCurrentComments(response);
        })
        .catch((error) => {
            console.log('error', error);
        })
    }, [review_id])

    if (isLoading) {
        return <h3>Comments Loading...</h3>;
      }

    return (
        <div>
        <CommentCard currentComments={currentComments}/>
        </div>
    )
}

export default Comments;