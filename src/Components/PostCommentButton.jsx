
export const PostCommentButton = ({setPostForm}) => {
    return (
        <div>
            <button onClick={() => {setPostForm(true)}}>Post a comment?</button>
        </div>
    )
}