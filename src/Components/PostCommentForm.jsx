import { useState, useEffect } from 'react';
import { postNewComment } from '../utils/api';

export const PostCommentForm = ({review_id}) => {

const [username, setUsername] = useState('')
const [commentInput, setCommentInput] = useState('')
const [wholeComment, setWholeComment] = useState('')
const [disabledState, setDisabledState] = useState(false);
const [successfulComment, setSuccessfulComment] = useState();


const handleFormSubmit = (event) => {
    event.preventDefault();
    setWholeComment({
        username: username,
        body: commentInput
    })
}

useEffect(() => {
    if (wholeComment) {
        postNewComment(review_id, wholeComment)
        .then((response) => {
            setDisabledState(true);
            setSuccessfulComment({
                comment_id: response.comment_id,
                body: response.body,
                votes: response.votes,
                author: response.author,
                review_id: response.review_id,
                created_at: response.created_at
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}, [wholeComment, review_id])

    return (
        <div>
            <form id="postCommentForm" onSubmit={handleFormSubmit}>
                <label>Username: </label><input required disabled={disabledState} value={username} onChange={(event) => {setUsername(event.target.value)}}></input><br />
                <label>Comment: </label><textarea required value={commentInput} disabled={disabledState} onChange={(event) => {setCommentInput(event.target.value)}}></textarea><br />
                <button type="submit" disabled={disabledState}>Submit comment</button>
            </form>
            {
                successfulComment ? (<>                            <li key={successfulComment.comment_id} className="singleComment">
                                <p className="commentAuthor">{successfulComment.author} says...</p>
                                <p>{successfulComment.body}</p>
                                <p>Written at:- {successfulComment.created_at}</p>
                                <p>Current votes:- {successfulComment.votes}</p>
                            </li></>) : (
                                ""
                            )
            }
        </div>
    )
}