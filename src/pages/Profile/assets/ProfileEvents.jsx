import React from "react";
import { NavLink } from "react-router-dom";
import Posts from "../../../SVG/Posts";
import Activity from "../../../SVG/Activity";
import Marketplace from "../../../SVG/Marketplace";
import Settings from "../../../SVG/Settings";
import Feed from "../../../SVG/Feed";
import ArrowRight from "../../../SVG/ArrowRight";
import "../Profile.css";

const ProfileEvents = () => {
  return (
    <div className="profile_events">
      <ul>
        <li>
          <NavLink to={"/posts"}>
            <Posts /> <p>Posts</p>
          </NavLink>
          <span className="eventSpans">
            <ArrowRight />
          </span>
        </li>
        <li>
          <NavLink to={"/activity"}>
            <Activity /> <p>Activity</p>
          </NavLink>
          <span className="eventSpans">
            <ArrowRight />
          </span>
        </li>
        <li>
          <NavLink to={"/marketplace"}>
            <Marketplace /> <p>Marketplace</p>
          </NavLink>
          <span className="eventSpans">
            <ArrowRight />
          </span>
        </li>
        <li>
          <NavLink to={"/feed"}>
            <Feed /> <p>Feed</p>
          </NavLink>
          <span className="eventSpans">
            <ArrowRight />
          </span>
        </li>
        <li>
          <NavLink to={"/settings"}>
            <Settings /> <p>Settings</p>
          </NavLink>
          <span className="eventSpans">
            <ArrowRight />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileEvents;
