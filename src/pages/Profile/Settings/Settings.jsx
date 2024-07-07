import { NavLink, Outlet } from "react-router-dom";
import "./Settings.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectSingleUser } from "../../../store/singleUser/singleUserSlice";

const Settings = () => {
    const { singleUser } = useSelector(selectSingleUser);
    return (
        <main className="settings_main">
            <div className="container">
                <div className="settings_div_main">
                    <section className="section_options">
                        <ul>
                            <li>
                                <NavLink to="/settings">Current Page</NavLink>
                            </li>
                            <li>
                                <NavLink to={"changeImage"}>
                                    Change profile/ background image
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"changeInfo"}>Change Personal info</NavLink>
                            </li>
                            <li>
                                <NavLink to={"changePassword"}>Change Password</NavLink>
                            </li>
                        </ul>
                    </section>
                    <section className="section_outlet">
                        <Outlet />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Settings;
