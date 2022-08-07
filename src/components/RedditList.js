import React from "react";
import RedditPost from "./RedditPost";

const RedditList = ({posts}) => {

    const PostNodes = posts.map((post, index) => {
		return <RedditPost post={post} key={index} />;
	});

    return (
        <ul>{PostNodes}</ul>
    )
}

export default RedditList