import React, { useState } from "react";
import "./PostsCard.css";
import LikeSvg from "../../SVG/LikeSvg";
import Coment from "../../SVG/Coment";
import Share from "../../SVG/Share";
import Globe from "../../SVG/Globe";
import davo from "../../images/icon6.png";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPatchAddNewComment,
    fetchPatchIncreaseLikes,
} from "../../store/allPosts/API";
import { selectAllPosts } from "../../store/allPosts/allPostsSlice.js";
import Remove from "../../SVG/Remove";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice.js";
import { useNavigate } from "react-router-dom";
const PostsCard = ({
    id,
    time,
    postImg,
    title,
    postLikes,
    postComments,
    nickname,
    userImg,
    postId,
    comments,
}) => {
    const [commentModal, setCommentModal] = useState(false);
    const { allPosts } = useSelector(selectAllPosts);
    const { singleUser } = useSelector(selectSingleUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="PostsCard" key={id}>
            <div className="post_user_info">
                <div
                    className="user_img"
                    style={{ backgroundImage: `url(${userImg ? userImg : davo})` }}
                ></div>
                <div className="user_post_info">
                    <h3>{nickname}</h3>
                    <p>
                        <Globe />
                        {time}
                    </p>
                </div>
            </div>
            <div className="post_title">
                <p>{title}</p>
                {postImg && (
                    <div
                        className="title_img_bg"
                        style={{ backgroundImage: `url(${postImg})` }}
                    ></div>
                )}
            </div>
            <div className="like_icon_div">
                <div className="postActions">
                    <div
                        onClick={() =>
                            dispatch(
                                fetchPatchIncreaseLikes({
                                    id: id,
                                    data: { postLikes: postLikes + 1 },
                                })
                            )
                        }
                    >
                        <LikeSvg />
                        <p> {postLikes} | Likes </p>
                    </div>
                    <div
                        onClick={() => {
                            setCommentModal(!commentModal);
                        }}
                    >
                        <Coment />
                        <p> {postComments} | Comments</p>
                    </div>
                </div>
                <div className="share">
                    <Share />
                    <p>| Share</p>
                </div>
                <div
                    className="comments"
                    style={{
                        visibility: commentModal ? "visible" : "hidden",
                        opacity: commentModal ? 1 : 0,
                    }}
                >
                    <div className="comment_writing_section">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const {
                                    comment: { value: comment },
                                } = e.target;
                                const newObj = {
                                    time: new Date().toLocaleDateString(),
                                    postId,
                                    id: new Date().getTime().toString(),
                                    comment,
                                    img: userImg,
                                    nickname:
                                        singleUser[0]?.personalInfoChangable.nickname,
                                };
                                const commentedPost = allPosts.find(
                                    (post) => post.postId === newObj.postId
                                );
                                dispatch(
                                    fetchPatchAddNewComment({
                                        data: [...commentedPost?.comments, newObj],
                                        postId: id,
                                    })
                                );
                            }}
                        >
                            <textarea
                                name="comment"
                                rows={"5"}
                                placeholder="Write Your Comment here"
                            ></textarea>
                            <button>Send</button>
                        </form>
                        <span onClick={() => setCommentModal(false)}>
                            <Remove />
                        </span>
                    </div>
                    <div className="comment_reading_section">
                        {comments?.map((comment) => {
                            return (
                                <div className="each_comment" key={comment.id}>
                                    <div className="comment_nick_img">
                                        <img src={comment?.img} alt="/" />
                                        <div>
                                            <h3>{comment.nickname}</h3>
                                            <p>{comment.time}s</p>
                                        </div>
                                    </div>
                                    <p>{comment?.comment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsCard;
