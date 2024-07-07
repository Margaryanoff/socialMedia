import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchDeleteSingleUser } from "../../../store/singleUser/API";
import logo from "../../../images/loogggggoooo.png";
import Friends from "../../../SVG/Friends";
import Homepage from "../../../SVG/Homepage";
import Story from "../../../SVG/Story";
import Search from "../../../SVG/Search";
import Messages from "../../../SVG/Messages";
import Notification from "../../../SVG/Notification";
import ChevronDown from "../../../SVG/ChevronDown";
import { selectUsers } from "../../../store/users/usersSlice";
import ProfileSVG from "../../../SVG/ProfileSVG";

const NavigationPathsUser = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataUsers } = useSelector(selectUsers);

  const filterData = dataUsers.filter((user) => user?.personalInfoChangable?.nickname?.toLowerCase().includes(searchUser.toLowerCase()));


  return (
    <nav className="user_navigation">
      <div className="containerNav">
        <NavLink to={"/"}>
          <img src={logo} alt="/" />
        </NavLink>
        <div className="home_stories_friends">
          <NavLink to={"/"}>
            <Homepage />
            <p>Homepage</p>
          </NavLink>
          <NavLink className="friends" to={"friends"}>
            <Friends />
            <p>Friends</p>
          </NavLink>
          <NavLink to={"stroies"}>
            <Story />
            <p>Story</p>
          </NavLink>
        </div>
        <span className="searchSpan">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              if (e.target.value) {
                setSearchModal(true);
                setSearchUser(e.target.value);
              } else {
                setSearchModal(false);
              }
            }}
            onBlur={(e) => setSearchModal(false)}
          />
          <Search />
          <div className={searchModal ? "search_modal_active search_modal" : "search_modal"}>
            <div className="filter_user">
              {filterData.map((user) => {
                return (
                  <NavLink to={`${user.id}`} key={user.id}>
                    <div className="each_filter_user">
                      <div
                        className="filter_img"
                        style={{
                          backgroundImage: `url(${user?.profileImage})`,
                        }}
                      ></div>
                      <h1>{user?.personalInfoChangable?.nickname}</h1>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </span>
        <div className="user_root_options">
          <NavLink to={"messages"}>
            <Messages />
          </NavLink>
          <NavLink to={"notifications"}>
            <Notification />
          </NavLink>
          <div>
            <span onClick={() => setModal(!modal)}>
              <img src={user[0]?.profileImage} alt="/" />
              <ChevronDown />
              <ul className={modal ? "active_modal_nav" : ""}>
                <NavLink to={"profile"}>
                  <li>Profile</li>
                </NavLink>
                <NavLink to={"settings"}>
                  <li>Settings</li>
                </NavLink>
                <button
                  onClick={() => {
                    dispatch(fetchDeleteSingleUser(user[0]));
                    navigate("/");
                  }}
                >
                  Log out
                </button>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationPathsUser;
