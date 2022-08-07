import React from "react";

const RedditPost = ({post}) => {

    return (
        <li>
            <h4>{post.data.title}</h4>
            <p>Hello!</p>            
        </li>
    )
}

export default RedditPost