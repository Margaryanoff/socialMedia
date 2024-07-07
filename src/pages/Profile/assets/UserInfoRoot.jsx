import React from "react";

const UserInfoRoot = ({ singleUser }) => {
  return (
    <div className="user_header_main">
      <div
        className="user_images_pfp_bg"
        style={{
          background: `url(${singleUser[0]?.bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="pfp_names_follows">
          <img src={singleUser[0]?.profileImage} alt="" />
          <h2>
            {singleUser[0]?.personalInfoChangable?.firstName} {singleUser[0]?.personalInfoChangable?.lastName}
          </h2>
          <div>
            <span>
              <h4>Posts</h4>
              <p>{singleUser[0]?.posts?.length}</p>
            </span>
            <span>
              <h4>Followers</h4>
              <p>{singleUser[0]?.followers?.length}</p>
            </span>
            <span>
              <h4>Following</h4>
              <p>{singleUser[0]?.following?.length}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoRoot;
