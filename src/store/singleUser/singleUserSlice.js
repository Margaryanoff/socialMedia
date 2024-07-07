import { createSlice } from "@reduxjs/toolkit";
import {
  fetchChangeSinglUserPersonalInfo,
  fetchDeleteSingleUser,
  fetchGetSingleUser,
  fetchPatchSingleUserNewPost,
  fetchPatchUserImage,
  fetchPatchUserNewPassword,
  fetchPatchUserSocialInfo,
  fetchPostSingleUser,
  handleRejectedFriendRequest,
} from "./API";

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState: {
    singleUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostSingleUser.fulfilled, (state, { payload }) => {
        state.singleUser[0] = payload;
      })
      .addCase(fetchGetSingleUser.fulfilled, (state, { payload }) => {
        state.singleUser = payload;
      })
      .addCase(fetchDeleteSingleUser.fulfilled, (state) => {
        state.singleUser = [];
      })
      .addCase(fetchPatchSingleUserNewPost.fulfilled, (state, { payload }) => {
        state.singleUser[0].posts.push(payload);
      })
      .addCase(fetchChangeSinglUserPersonalInfo.fulfilled, (state, { payload }) => {
        state.singleUser = [payload];
      })
      .addCase(fetchPatchUserSocialInfo.fulfilled, (state, { payload }) => {
        state.singleUser = [payload];
      })
      .addCase(fetchPatchUserImage.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.singleUser = [payload];
      })
      .addCase(fetchPatchUserNewPassword.fulfilled, (state, { payload }) => {
        state.singleUser[0].password = payload;
      })
      .addCase(handleRejectedFriendRequest.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.singleUser[0].followRequests = payload.followRequests;
      });
  },
});

export const singleUserReducer = singleUserSlice.reducer;
export const selectSingleUser = (state) => state.singleUser;
