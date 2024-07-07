import React, { useState } from "react";
import "./Profile.css";
import ProfileEvents from "./assets/ProfileEvents";
import UserPersonalInformation from "./assets/UserPersonalInformation";
import UserInfoRoot from "./assets/UserInfoRoot";
import UpdateInfo from "../UpdateInfo/UpdateInfo";
import { Outlet } from "react-router-dom";

const Profile = ({ singleUser }) => {
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <main className="userProfile_main">
      <section className="events">
        <ProfileEvents />
      </section>
      <section className="main_user">
        <UserInfoRoot singleUser={singleUser} />
        {updateModal ? <UpdateInfo updateModal={updateModal} setUpdateModal={setUpdateModal} /> : ""}
        <Outlet />
      </section>
      <section className="friend_related">
        <UserPersonalInformation singleUser={singleUser} setUpdateModal={setUpdateModal} />
      </section>
    </main>
  );
};

export default Profile;
