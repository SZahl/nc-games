
const CommentCard = ({ currentComments }) => {

    if(!currentComments) return <p>This review has no comments</p>;
    return (
        <div>
            <h3>Most recent comments</h3>
            <ul id="reviewComments">
                {
                    currentComments.map((eachComment) => {
                        return (
                            <li key={eachComment.comment_id} className="singleComment">
                                <p className="commentAuthor">{eachComment.author} says...</p>
                                <p>{eachComment.body}</p>
                                <p>Written at:- {eachComment.created_at}</p>
                                <p>Current votes:- {eachComment.votes}</p>
                                <p></p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CommentCard;
