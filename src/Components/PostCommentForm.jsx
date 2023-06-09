import { useState } from 'react';
import { postNewComment } from '../utils/api';

export const PostCommentForm = ({review_id}) => {

const [username, setUsername] = useState('')
const [commentInput, setCommentInput] = useState('')
const [disabledState, setDisabledState] = useState(false);
const [successfulComment, setSuccessfulComment] = useState('');
const [errorMessage, setErrorMessage] = useState('');



const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('')
    const wholeComment = {
        username: username,
        body: commentInput
    }
    setSuccessfulComment({
        username: username,
        body: commentInput,
        votes: 0
    })
    postNewComment(review_id, wholeComment)
        .then(() => {
            setDisabledState(true);
            setUsername('')
            setCommentInput('')
    })
        .catch((error) => {
            console.log('error', error)
            setErrorMessage(error.response.data.message)
            setSuccessfulComment('')
            setUsername('')
            setCommentInput('')
        })
    }    

    return (
        <div>
            <form id="postCommentForm" onSubmit={handleFormSubmit}>
                <label>Username: <input required disabled={disabledState} value={username} onChange={(event) => {setUsername(event.target.value)}}></input></label><br />
                <label>Comment: <textarea required value={commentInput} disabled={disabledState} onChange={(event) => {setCommentInput(event.target.value)}}></textarea></label><br />
                <button className= "submitCommentButton" type="submit" disabled={disabledState}>Submit comment</button>
            </form>
            <p id="commentErrorText">{errorMessage}</p>
            {
                successfulComment ? (<>                            <li key={successfulComment.comment_id} className="singleComment">
                                <p className="commentAuthor">{successfulComment.username} says...</p>
                                <p>{successfulComment.body}</p>
                                <p>Posted just now!</p>
                                <p>Current votes:- {successfulComment.votes}</p>
                            </li></>) : (
                                ""
                            )
            }
        </div>
    )
}