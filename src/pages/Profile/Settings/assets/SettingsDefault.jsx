import React from "react";
import { useSelector } from "react-redux";
import { selectSingleUser } from "../../../../store/singleUser/singleUserSlice";

const SettingsDefault = () => {
    const { singleUser } = useSelector(selectSingleUser);
    return (
        <div className="singleUserDefault_main">
            <div
                style={{
                    background: `url(${singleUser[0]?.bgImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="div_bg_image"
            ></div>
            <div className="user_pfp_more">
                <img src={singleUser[0].profileImage} alt="" />
                <h1>@{singleUser[0]?.personalInfoChangable?.nickname}</h1>
                <div>
                    <span>
                        <p>Posts</p>
                        <h3>{singleUser[0]?.posts.length}</h3>
                    </span>
                    <span>
                        <p>Followers</p>
                        <h3>{singleUser[0]?.followers.length}</h3>
                    </span>
                    <span>
                        <p>Follwings</p>
                        <h3>{singleUser[0]?.followRequests.length}</h3>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SettingsDefault;
