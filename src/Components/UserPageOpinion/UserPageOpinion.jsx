import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserPageOpinion.css";
import PhotoSVG from "../../SVG/PhotoSVG";
import VideoSVG from "../../SVG/VideoSVG";
import EventSVG from "../../SVG/EventSVG";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import { nanoid } from "@reduxjs/toolkit";
import { fetchPostUserStatus } from "../../store/allPosts/API";
import EventModal from "../EventModal/EventModal";
import { fetchPatchSingleUserNewPost } from "../../store/singleUser/API";

function UserPageOpinion() {
    const [newImg, setNewImg] = useState("");
    const dispatch = useDispatch();
    const newImgFile = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setNewImg(reader.result);
        };
    };
    const { singleUser } = useSelector(selectSingleUser);
    const [eventModal, setEventModal] = useState(false);
    const newPostValue = (e) => {
        e.preventDefault();
        const {
            title: { value: title },
        } = e.target;
        const newObj = {
            postId: nanoid(),
            title,
            postImg: newImg,
            time: new Date().toLocaleDateString(),
            nickname: singleUser[0]?.nickname,
            userId: singleUser[0]?.id,
            userImg: singleUser[0]?.profileImage,
            postLikes: 0,
            postComments: 0,
        };
        dispatch(fetchPatchSingleUserNewPost(singleUser[0], newObj));
        dispatch(fetchPostUserStatus(newObj));
        e.target.reset();
    };

    return (
        <div className="opinion_main">
            <div className="opinion_logo">
                <img src={singleUser[0].profileImage} alt="" />
            </div>
            <form onSubmit={(e) => newPostValue(e)} className="opinion_form">
                <div className="opinion_options_status">
                    <textarea
                        name="title"
                        placeholder="What's on your mind...?"
                    ></textarea>
                    <div className="message_select">
                        <label>
                            <PhotoSVG /> <p>Photo</p>
                            <input
                                className="postImage"
                                type="file"
                                name="postImage"
                                onChange={newImgFile}
                            />
                        </label>
                        <label>
                            <VideoSVG /> <p>Video</p>
                            <input type="file" name="postImage" className="postVideo" />
                        </label>
                    </div>
                </div>
                <div className="opinion_send">
                    <button>Upload</button>
                </div>
            </form>
            {eventModal && (
                <EventModal
                    newImgFile={newImgFile}
                    setNewImg={setNewImg}
                    setEventModal={setEventModal}
                />
            )}
            <p onClick={() => setEventModal(true)} className="event_portal">
                <EventSVG /> Event
            </p>
        </div>
    );
}

export default UserPageOpinion;
