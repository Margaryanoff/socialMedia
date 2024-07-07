import React from "react";
import { NavLink } from "react-router-dom";
import Loction from "../../../SVG/Loction";
import Work from "../../../SVG/Work";
import Study from "../../../SVG/Study";
import Position from "../../../SVG/Position";
import FacebookSVG from "../../../SVG/FacebookSVG";
import InstagramSVG from "../../../SVG/InstagramSVG";
import TwitterSVG from "../../../SVG/TwitterSVG";
import "../Profile.css";

const UserPersonalInformation = ({ singleUser, setUpdateModal }) => {
    return (
        <>
            <div className="update_personal_right">
                <h2>Personal Information</h2>
                <button onClick={() => setUpdateModal(true)}>Update</button>
            </div>
            <div className="name_nickname_right">
                <h2>
                    {singleUser[0]?.personalInfoChangable?.firstName}{" "}
                    {singleUser[0]?.personalInfoChangable?.lastName}
                </h2>
                <h4>
                    <NavLink to={"/"}>
                        @{singleUser[0].personalInfoChangable?.nickname}
                    </NavLink>
                </h4>
            </div>
            <p className="bio">
                {singleUser[0]?.personalInfo?.bio
                    ? singleUser[0]?.personalInfo?.bio
                    : `You have no bio yet`}
            </p>
            <ul className="personal_information_ul_right">
                <li>
                    <Loction /> <span>Living in</span>
                    {singleUser[0]?.personalInfo?.city ? (
                        singleUser[0]?.personalInfo?.city
                    ) : (
                        <NavLink>Add City</NavLink>
                    )}
                </li>
                <li>
                    <Study /> <span>Went to</span>
                    {singleUser[0]?.personalInfo?.education ? (
                        singleUser[0]?.personalInfo?.education
                    ) : (
                        <NavLink>Add School / University</NavLink>
                    )}
                </li>
                <li>
                    <Work /> <span>Works at</span>
                    {singleUser[0]?.personalInfo?.company ? (
                        singleUser[0]?.personalInfo?.company
                    ) : (
                        <NavLink>Add Company</NavLink>
                    )}
                </li>
                <li>
                    <Position /> <span>Works as</span>{" "}
                    {singleUser[0]?.personalInfo?.position ? (
                        singleUser[0]?.personalInfo?.position
                    ) : (
                        <NavLink>Add Position</NavLink>
                    )}
                </li>
            </ul>
            <div className="logindate_social">
                <h4>
                    <span>User Since :</span>
                    {singleUser[0]?.loginDate}
                </h4>
                <div className="socials">
                    <h3>Socials :</h3>
                    <div>
                        <FacebookSVG />
                        <InstagramSVG />
                        <TwitterSVG />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPersonalInformation;
