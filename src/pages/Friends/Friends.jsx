import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import "./Friends.css";
import { selectUsers } from "../../store/users/usersSlice";
import davo from "../../images/icon6.png";
import { useNavigate } from "react-router-dom";
import { fetchPatchHandleRequest } from "../../store/users/API";

// [].filter((user) => {
//     return search.toLowerCase() === ""
//         ? user
//         : user?.personalInfoChangable?.nickname.toLowerCase().includes(search) ||
//               user?.personalInfoChangable?.nickname.toUpperCase().includes(search);
// });

const Friends = () => {
  //   const { singleUserRequest } = useSelector(selectUsers);
  const { singleUser } = useSelector(selectSingleUser);
  const allUsers = useSelector(selectUsers);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handlerFriendRequest = (user) => {
    // followRequests;

    dispatch(fetchPatchHandleRequest({ singleUserId: singleUser[0]?.id, friend: user }));
  };

  return (
    <main className="friends_main">
      <div className="container">
        <div className="frineds_main_div">
          <section className="section_existing_friends">
            <div>
              <img src={davo} alt="" />
              <h2>Nickname</h2>
              <button>Unfollow</button>
            </div>
          </section>
          <section>
            <div className="friends_main">
              <div className="allFriends">
                {allUsers?.dataUsers?.map((user) => {
                  return (
                    <div className="each_friend" key={user.id}>
                      <div className="logo_friend_info">
                        <div
                          className="friend_bg"
                          style={{
                            backgroundImage: `url(${user.profileImage})`,
                          }}
                        ></div>
                        <div className="friend_name_count">
                          <p className="friend_nickname">{user?.personalInfoChangable?.nickname}</p>
                          <p className="each_friend_count">{allUsers.dataUsers.length} friends</p>
                        </div>
                        <p>{user.id}</p>
                      </div>
                      {user?.followRequests?.includes(singleUser[0]?.id) ? (
                        <button>Cancel Request</button>
                      ) : (
                        <button onClick={() => handlerFriendRequest(user)}>Send a Request</button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Friends;
