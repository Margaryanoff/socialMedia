import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllPosts, fetchPatchAddNewComment, fetchPatchIncreaseLikes, fetchPostUserStatus } from "./API";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    allPosts: [],
    isLaoding: false,
  },
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchGetAllPosts.fulfilled, (state, { payload }) => {
        state.allPosts = payload;
      })
      .addCase(fetchPostUserStatus.fulfilled, (state, { payload }) => {
        state.allPosts.push(payload);
      })
      .addCase(fetchPatchIncreaseLikes.fulfilled, (state, { payload }) => {
        const index = state.allPosts.findIndex((el) => el.id == payload.id);
        state.allPosts[index] = payload;
      })
      .addCase(fetchPatchAddNewComment.fulfilled, (state, { payload }) => {
        const index = state.allPosts.findIndex((el) => el.postId == payload.postId);
        state.allPosts[index] = payload;
      });
  },
});

export const selectAllPosts = (state) => state.allPosts;
export const allPostsReducer = allPostsSlice.reducer;
export const {} = allPostsSlice.actions;
