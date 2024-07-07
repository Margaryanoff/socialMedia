import "./UserPageMain.css";
import React from "react";
import ProfileEvents from "../Profile/assets/ProfileEvents";
import "../Profile/Profile.css";
import UPMUserSection from "./assets/UPMUserSection";
import UPMRequests from "./assets/UPMRequests";
import UPMUpcomingBirthdays from "./assets/UPMUpcomingBirthdays";
import UPMAds from "./assets/UPMAds";
import UserStory from "../../Components/UserPageStorys/UserPageStorys";
import UserPageOpinion from "../../Components/UserPageOpinion/UserPageOpinion";
import Posts from "../../Components/Posts/Posts";

const UserPageMain = ({ singleUser }) => {
  return (
    <main className="userPage_main">
      <section className="userPage_personal">
        <div className="userpage_main_div">
          <UPMUserSection singleUser={singleUser} />
        </div>
        <ProfileEvents />
      </section>
      <section className="userPage_feed">
        <UserStory />
        <UserPageOpinion />
        <Posts />
      </section>
      <section className="userPage_add_friends">
        <UPMRequests singleUser={singleUser} />
        <UPMUpcomingBirthdays />
        <UPMAds />
      </section>
    </main>
  );
};

export default UserPageMain;
