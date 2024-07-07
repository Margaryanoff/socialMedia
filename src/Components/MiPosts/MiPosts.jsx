import React from "react";
import "./MiPosts.css";
import { useSelector } from "react-redux";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import MiPostsCard from "./MiPostsCard";
export default function MiPosts() {
    const { singleUser } = useSelector(selectSingleUser);
    const miposts = singleUser[0].posts;
    return (
        <div className="MiPosts">
            {miposts.map((post) => (
                <MiPostsCard
                    miposts={miposts}
                    singleUser={singleUser}
                    time={post.time}
                    title={post.title}
                    postImg={post.postImg}
                    key={post.postId}
                />
            ))}
        </div>
    );
}
