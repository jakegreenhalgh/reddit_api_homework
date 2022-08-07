import React from "react";
import RedditPost from "./RedditPost";

const RedditList = ({posts}) => {

    const PostNodes = posts.map((post, index) => {
		return <RedditPost title={post.data.title} key={index} />;
	});

    return (
       <>
        {PostNodes}
        </>
    )
}

export default RedditList