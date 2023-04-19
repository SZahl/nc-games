
const CommentCard = ({ currentComments }) => {

    if(!currentComments) return;
    return (
        <div>
            <h3>Most recent comments</h3>
            <ul id="reviewComments">
                {
                    currentComments.map((eachComment) => {
                        return (
                            <li key={eachComment.comment_id} className="singleComment">
                                <p>{eachComment.author}</p>
                                <p>{eachComment.body}</p>
                                <p>{eachComment.created_at}</p>
                                <p>{eachComment.votes}</p>
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
