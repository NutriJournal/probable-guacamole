import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POST_COMMENTS } from '../../gql/queries.js';
import CommentCard from './CommentCard.js';

// Might be able to remove this file later since we are pulling the specific comments for each post with the query that is in [post].js.

const CommentList = () => {
    
    const {data, loading, error} = useQuery(GET_POST_COMMENTS);
    
    if (loading) {
        return "Loading..."
    }

    if (error) {
        return `Error: ${error}`
    }

    console.log("In CommentList", data)
    
    return (
        <div className="flex-row">
            {data.comments ? data.comments.map((comment) => {
                return <CommentCard data={comment} />
            }) : null}
        </div>
    )
}

export default CommentList;