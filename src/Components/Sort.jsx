
const Sort = () => {
    return (
        <div>
            <label>Sort reviews by:- <select>
                <option></option>
                <option value="date-asc">Date - asc</option>
                <option value="date-desc">Date - desc</option>
                <option value="comment-count-asc">Comment count - asc</option>
                <option value="comment-count-desc">Comment count - desc</option>
                <option value="vote-count-asc">Vote count - asc</option>
                <option value="vote-count-desc">Vote count - desc</option>
                </select ></label>
        </div>
    )
}

export default Sort;