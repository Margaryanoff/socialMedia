import React from "react";
import { NavLink } from "react-router-dom";

const UPMUserSection = ({ singleUser }) => {
  return (
    <div
      className="prsonal_relcative_div"
      style={{
        background: `url(${singleUser[0]?.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="background_image_nickname">
        <img src={singleUser[0]?.profileImage} alt="/" />
        <h2>@{singleUser[0]?.personalInfoChangable?.nickname}</h2>
        <span>
          <p>
            <span>Posts</span> {singleUser[0]?.posts?.length}
          </p>
          <p>
            <span>Followers</span> {singleUser[0]?.followers?.length}
          </p>
          <p>
            <span>Follwing</span> {singleUser[0]?.following?.length}
          </p>
        </span>
        <NavLink to={"profile"}>Go To Profile</NavLink>
      </div>
    </div>
  );
};

export default UPMUserSection;
