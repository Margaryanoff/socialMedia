import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "../Components/WelcomePage/WelcomePage";
import Layout from "../Layout/Layout";
import Register from "../Components/Register/Register";
import About from "../Components/About/About";
import Contacts from "../Components/Contacts/Contacts";
import Privacy from "../Components/Cooperation/Cooperation";
import Error from "../Components/Error/Error";
import UserPage from "../Components/UserPage/UserPage";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../store/singleUser/singleUserSlice";
import { fetchGetSingleUser } from "../store/singleUser/API";
import Feed from "../pages/Feed/Feed";
import Notifications from "../pages/Notifications/Notifications";
import Profile from "../pages/Profile/Profile";
import Activity from "../pages/Profile/Activity/Activity";
import Marketplace from "../pages/Profile/Marketplace/Marketplace";
import Posts from "../pages/Profile/Posts/Posts";
import UserPageMain from "../pages/UserPageMain/UserPageMain";
import { fetchGetUsers } from "../store/users/API";
import Messages from "../pages/Messages/Messages";
import Story from "../pages/Story/Story";
import Friends from "../pages/Friends/Friends";
import { fetchGetAllPosts } from "../store/allPosts/API";
import Settings from "../pages/Profile/Settings/Settings";
import SearchUser from "../Components/Navigation/SearchUser/SearchUser";
import MiPosts from "../Components/MiPosts/MiPosts";
import SettingsChangeImage from "../pages/Profile/Settings/assets/SettingsChangeImage";
import SettingsChangeInfo from "../pages/Profile/Settings/assets/SettingsChangeInfo";
import SettingsChangePassword from "../pages/Profile/Settings/assets/SettingsChangePassword";
import SettingsDefault from "../pages/Profile/Settings/assets/SettingsDefault";

function AppRouter() {
  const { singleUser } = useSelector(selectSingleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetSingleUser());
    dispatch(fetchGetUsers());
    dispatch(fetchGetAllPosts());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {singleUser?.length ? (
          <>
            <Route path="/" element={<UserPage />}>
              <Route index element={<UserPageMain singleUser={singleUser} />} />
              <Route path="feed" element={<Feed />} />
              <Route path="/:id" element={<SearchUser />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile" element={<Profile singleUser={singleUser} />}>
                <Route index element={<MiPosts />} />
                <Route />
                <Route />
                <Route path="posts" element={<Posts />} />
              </Route>
              <Route path="settings" element={<Settings />}>
                <Route index element={<SettingsDefault />} />
                <Route path="changeImage" element={<SettingsChangeImage />} />
                <Route path="changeInfo" element={<SettingsChangeInfo />} />
                <Route path="changePassword" element={<SettingsChangePassword />} />
              </Route>
              <Route path="activity" element={<Activity />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="messages" element={<Messages />} />
              <Route path="friends" element={<Friends />} />
              <Route path="stroies" element={<Story />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="cooperation" element={<Privacy />} />
          </>
        )}
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
