import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";

const { GET, POST, PATCH } = UseRequest();

export const fetchGetAllPosts = createAsyncThunk("allPosts/fetchGetAllPosts", async () => {
  const result = await GET("http://localhost:8080/allPosts");
  return result;
});
export const fetchPostUserStatus = createAsyncThunk("allPosts/fetchPostUserStatus", async (payload) => {
  const result = POST("http://localhost:8080/allPosts", payload);
  return result;
});

export const fetchPatchIncreaseLikes = createAsyncThunk("allPosts/fetchPatchIncreaseLikes", async ({ id, data }) => {
  const result = PATCH("http://localhost:8080/allPosts", id, data);
  return result;
});

export const fetchPatchAddNewComment = createAsyncThunk("allPosts/fetchPatchAddNewComment", async ({ data, postId }) => {
  const result = PATCH(`http://localhost:8080/allPosts`, postId, { comments: data });
  return result;
});
