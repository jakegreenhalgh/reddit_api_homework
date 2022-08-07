import React, { useEffect, useState } from "react";
import RedditList from "../components/RedditList";

const RedditContainer = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = function () {
		fetch("https://www.reddit.com/r/ukpolitics/.json")
			.then((res) => res.json())
			.then((reddit) => setPosts(reddit.data.children));
	};


	return (
		<>
			<h1>UK Politics Subreddit</h1>

			<h2>List of Posts</h2>
			<RedditList posts={posts} />
		</>
	);
};

export default RedditContainer