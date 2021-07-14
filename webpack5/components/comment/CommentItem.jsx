import React from 'react'

const CommentItem = ({userid,content,date}) => {
    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">{content}</li>
                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}

export default CommentItem