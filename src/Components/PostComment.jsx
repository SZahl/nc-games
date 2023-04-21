import { useState } from 'react';
import { PostCommentButton } from './PostCommentButton';
import { PostCommentForm } from './PostCommentForm';

export const PostComment = ({review_id}) => {

    const [postForm, setPostForm] = useState(false);

    return (
        <div>
            {
            postForm ? <PostCommentForm review_id={review_id}/> : <PostCommentButton setPostForm={setPostForm}/>
            }
        </div>
    )
}

