import { FormatDate } from "../utils/FormatDate";
import { PostComment } from "./PostComment";

const CommentCard = ({ currentComments, review_id }) => {

    if(!currentComments) return <p>This review has no comments</p>;
    return (
        <div>
            <h3>Most recent comments</h3>
            <PostComment review_id={review_id}/>
            <ul id="reviewComments">
                {
                    currentComments.map((eachComment) => {
                        return (
                            <li key={eachComment.comment_id} className="singleComment">
                                <p className="commentAuthor">{eachComment.author} says...</p>
                                <p>{eachComment.body}</p>
                                <p>Posted at:- <FormatDate date={eachComment.created_at}/></p>
                                <p>Current votes:- {eachComment.votes}</p>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CommentCard;
