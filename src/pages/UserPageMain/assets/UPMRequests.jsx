import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Approve from "../../../SVG/Approve";
import Reject from "../../../SVG/Reject";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../../store/users/usersSlice";
import { handleRejectedFriendRequest } from "../../../store/singleUser/API";

const UPMRequests = ({ singleUser }) => {
  const { dataUsers } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const requestedUsers = dataUsers?.filter((user) => singleUser[0]?.followRequests?.includes(user.id));

  const handleReject = (id) => {
    let newArr = singleUser[0]?.followRequests?.filter((elm) => elm !== id);
    dispatch(handleRejectedFriendRequest({ id: singleUser[0].id, data: newArr }));
  };
  return (
    <div className="requests_main">
      <div className="requests_title">
        <h2>Friend Requests</h2>
        <NavLink to={"notifications"}>See All</NavLink>
      </div>
      <div className="request_users">
        {requestedUsers.map((elm) => {
          return (
            <div key={elm.id}>
              <div className="image_nickname_request">
                <img src={elm?.profileImage} alt="/" />
                <h3>@{elm.personalInfoChangable?.nickname}</h3>
                <p>{elm.id}</p>
              </div>
              <div className="approve_reject">
                <span>
                  <Approve />
                </span>
                <span onClick={() => handleReject(elm.id)}>
                  <Reject />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UPMRequests;
