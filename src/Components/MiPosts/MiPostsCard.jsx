import React from "react";
import "./MiPostsCard.css";
import LikeSvg from "../../SVG/LikeSvg";
import Coment from "../../SVG/Coment";
import Share from "../../SVG/Share";
import Send from "../../SVG/Send";

export default function MiPostsCard({ time, postImg, title, singleUser }) {
    return (
        <div className="PostsCard">
            <div className="post_user_info">
                <div
                    className="user_img"
                    style={{ backgroundImage: `url(${singleUser[0].profileImage})` }}
                ></div>
                <div className="user_post_info">
                    <h3>
                        {singleUser[0]?.personalInfoChangable?.firstName} {singleUser[0]?.personalInfoChangable?.lastName}
                    </h3>
                    <p>{time}</p>
                </div>
            </div>
            <div className="post_title">
                <p>{title}</p>
                <div
                    className="title_img_bg"
                    style={{ backgroundImage: `url(${postImg})` }}
                >
                    {/* <img src={postImg} alt="" /> */}
                </div>
            </div>
            <div className="like_icon_div">
                <h3>
                    <LikeSvg /> Like
                </h3>
                <h3>
                    <Coment />
                    Comment
                </h3>
                <h3>
                    <Share />
                    Share
                </h3>
                <h3>
                    <Send />
                    Send
                </h3>
            </div>
        </div>
    );
}
