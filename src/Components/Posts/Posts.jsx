import React from "react";
import "./Posts.css";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../store/allPosts/allPostsSlice";
import PostsCard from "./PostsCard";

export default function Posts() {
    const { allPosts } = useSelector(selectAllPosts);
    return (
      <div className="Posts">
        {allPosts?.toReversed()?.map((post) => (
          <PostsCard {...post} key={post.postId} />
        ))}
      </div>
    );
}
