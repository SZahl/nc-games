
export const PostCommentButton = ({setPostForm}) => {
    return (
        <div>
            <button className="postCommentButton" onClick={() => {setPostForm(true)}}>Post a comment?</button>
        </div>
    )
}